/* 
	cnbilgin 
	https://github.com/cnbilgin/jquery-drawpad
	v 0.1
*/

import {
  blobToCanvas,
  getJpegBlob,
  takeScreenshotJpegBlob
} from './media-utilities';

(function ($) {
  const pluginSuffix = 'drawpad';
  $.drawpad = function (element: HTMLElement, options: DrawpadPluginOptions) {
    let defaults = {
      defaultColor: '#f1c40f',
      colors: [
        '#000000', //black
        '#2ecc71', //green
        '#3498db', //blue
        '#e74c3c', //red
        '#f1c40f', //yellow
        '#9b59b6', //purple
        '#e67e22' //orange
      ],
      eraserSize: 10
    };

    let plugin = this;
    let $element = $(element);

    plugin.settings = {};

    const coordinate = { x: 0, y: 0 };
    let drawing = false;
    let drawingType = 'pen';
    const lineStyle = {
      width: 5,
      color: defaults.defaultColor,
      type: 'round'
    };
    let bytes = '';
    //Rectangle Stuff
    let positionA: any;
    let positionB: any;
    let canvasOffset; // = $canvas.offset();
    let offsetX: number; //= canvasOffset.left;
    let offsetY: number; //= canvasOffset.top;
    let scrollX: number; //= $canvas.scrollLeft();
    let scrollY: number; //= $canvas.scrollTop();
    let startX: number;
    let startY: number;

    let prevStartX = 0;
    let prevStartY = 0;

    let prevWidth = 0;
    let prevHeight = 0;
    //End Rectangle Stuff
    /* private methods */
    const createCanvas = () => {
      plugin.$canvas = $('<canvas></canvas>');
      plugin.canvas = plugin.$canvas.get(0) as HTMLCanvasElement;
      plugin.context = plugin.canvas.getContext('2d');

      return plugin.$canvas;
    };
    const createOverlayCanvas = () => {
      plugin.$overlayCanvas = $('<canvas></canvas>');
      plugin.overlayCanvas = plugin.$overlayCanvas.get(0) as HTMLCanvasElement;
      plugin.overlayContext = plugin.overlayCanvas.getContext('2d');

      return plugin.$overlayCanvas;
    };
    const resizeCanvas = () => {
      plugin.canvas.width = $element.width();
      plugin.canvas.height = $element.height();
      plugin.overlayCanvas.width = $element.width();
      plugin.overlayCanvas.height = $element.height();
    };
    const getMousePos = (canvas: HTMLCanvasElement, evt: MouseEvent) => {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    };
    const createToolbox = () => {
      const $toolbox = $(`<div class="${pluginSuffix}-toolbox"></div>`);
      const createColorbox = (color: string) => {
        const activeClass = `${pluginSuffix}-colorbox-active`;
        let $colorbox = $(
          `<div class="${pluginSuffix}-colorbox" style="background-color:${color};">&nbsp;</div>`
        );
        if (color === plugin.settings.defaultColor) {
          $colorbox.addClass(activeClass);
        }

        $colorbox.on('click', () => {
          $element.removeClass(`${pluginSuffix}-erase-mode`);
          lineStyle.color = color;
          // drawingType = 'pen';
          $colorbox.addClass(activeClass).siblings().removeClass(activeClass);
          logDrawingParams();
        });

        return $colorbox;
      };
      const createEraser = () => {
        const activeClass = `${pluginSuffix}-colorbox-active`;
        const $eraser = $(
          `<div class="${pluginSuffix}-colorbox ${pluginSuffix}-eraser">&nbsp;</div>`
        );

        $eraser.on('click', function () {
          drawingType = 'eraser';
          $element.addClass(`${pluginSuffix}-erase-mode`);
          $eraser.addClass(activeClass).siblings().removeClass(activeClass);
        });

        return $eraser;
      };
      const createDrawingTool = (tool: string) => {
        const activeClass = `${pluginSuffix}-drawing-type-active`;
        var text = tool == 'pen' ? '&#x3030;' : '&#x25AD;';
        var title = tool == 'pen' ? 'Freehand' : 'Rectangle';
        const $drawingTool = $(
          `<div class="${pluginSuffix}-colorbox ${pluginSuffix}-drawing-tool" title="${title}">${text}</div>`
        );
        if (drawingType === tool) {
          $drawingTool.addClass(activeClass);
        }
        $drawingTool.on('click', function () {
          drawingType = tool;
          logDrawingParams();
          $element.addClass(`${pluginSuffix}-drawing-tool`);
          $drawingTool
            .addClass(activeClass)
            .siblings()
            .removeClass(activeClass);
        });

        return $drawingTool;
      };
      const createScreenCapture = () => {
        const $screenCapture = $(
          `<div class="${pluginSuffix}-colorbox ${pluginSuffix}-screen">&#x1F3AC;</div>`
        );

        $screenCapture.on('click', async () => {
          //jQuery('.feedback-glass').hide();
          //jQuery('.feedback-modal').hide();
          jQuery('.feedback-canvas').hide();
          var screenshotJpegBlob = await takeScreenshotJpegBlob();
          await blobToCanvas(screenshotJpegBlob, null, null, plugin.canvas);
          jQuery('.feedback-canvas').show();
          //jQuery('.feedback-modal').show();
        });

        return $screenCapture;
      };

      const createDoneButton = () => {
        const $doneButton = $(
          `<div class="${pluginSuffix}-colorbox ${pluginSuffix}-done" style="border-radius:0 2px 2px 0;" title="Click here after done editing.">&#x2714;</div>`
        );

        $doneButton.on('click', async () => {
          const blob = await getJpegBlob(plugin.canvas);
          jQuery('.feedback-glass').show();
          jQuery('.feedback-modal').show();
          jQuery('.feedback-canvas').hide();
          var canvas = jQuery(
            '.feedback-screenshot canvas'
          )[0] as HTMLCanvasElement;
          bytes = canvas.toDataURL();
          await blobToCanvas(blob, 300, 300, canvas);
        });

        return $doneButton;
      };

      const createHandleTool = () => {
        const activeClass = `${pluginSuffix}-colorbox-active`;
        let $dragHandle = $(
          `<div class="${pluginSuffix}-colorbox" title="Drag to move the toolbar" style="cursor:move;border-radius:2px 0 0 2px;">&#x2630;</div>`
        );
        let active = false;
        let currentX: number;
        let currentY: number;
        let initialX: number;
        let initialY: number;
        let xOffset = 0;
        let yOffset = 0;
        $dragHandle.on('mousedown', function (e) {
          initialX = e.clientX - xOffset;
          initialY = e.clientY - yOffset;
          active = true;
          e.stopPropagation();
          e.preventDefault();
        });
        $dragHandle.on('mouseup', function (e) {
          initialX = currentX;
          initialY = currentY;

          active = false;
          e.stopPropagation();
          e.preventDefault();
        });
        $dragHandle.on('mousemove', function (e) {
          if (active) {
            e.preventDefault();
            e.stopPropagation();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            xOffset = currentX;
            yOffset = currentY;
            $dragHandle.get(0).parentElement.parentElement.style.transform =
              'translate3d(' + currentX + 'px, ' + currentY + 'px, 0)';
          }
        });
        return $dragHandle;
      };
      const $colors = $(`<div class="${pluginSuffix}-colors"></div>`);
      $colors.append(createHandleTool());
      plugin.settings.colors.forEach((color: string) => {
        $colors.append(createColorbox(color));
      });

      // $colors.append(createEraser()); //dont really need it
      // $colors.append(createScreenCapture());
      $colors.append(createDrawingTool('pen'));
      $colors.append(createDrawingTool('rectangle'));
      $colors.append(createDoneButton());
      $toolbox.append($colors);

      return $toolbox;
    };
    const logDrawingParams = () => {
      console.log(drawingType, lineStyle, drawing);
    };
    const updateCoordinate = (event: any) => {
      coordinate.x = event.offsetX;
      coordinate.y = event.offsetY;
    };

    const handleStartDraw = (event: MouseEvent) => {
      drawing = true;
      $element.addClass(`${pluginSuffix}-drawing`);
      updateCoordinate(event);
      positionA = getMousePos(plugin.canvas, event);
      startX = event.clientX - offsetX;
      startY = event.clientY - offsetY;
      handleDraw(event);
    };
    const handleStopDraw = (event: MouseEvent) => {
      drawing = false;
      $element.removeClass(`${pluginSuffix}-drawing`);
      positionB = getMousePos(plugin.canvas, event);
      if (drawingType == 'rectangle' && prevWidth != 0) {
        plugin.context.lineWidth = lineStyle.width;
        plugin.context.strokeStyle = lineStyle.color;
        plugin.context.strokeRect(
          prevStartX,
          prevStartY,
          prevWidth,
          prevHeight
        );
        //reset
        prevWidth = 0;
        prevHeight = 0;
      }
    };
    const handleDraw = (event: MouseEvent) => {
      if (!drawing) return;
      const ctx = plugin.context;
      if (drawingType != 'rectangle') {
        ctx.beginPath();
        switch (drawingType) {
          case 'pen':
            ctx.globalCompositeOperation = 'source-over';
            ctx.lineWidth = lineStyle.width;
            ctx.strokeStyle = lineStyle.color;
            break;
          case 'eraser':
            ctx.globalCompositeOperation = 'destination-out';
            ctx.lineWidth = plugin.settings.eraserSize;
            ctx.strokeStyle = 'black';
            break;
        }
        ctx.lineCap = lineStyle.type;
        ctx.moveTo(coordinate.x, coordinate.y);
        updateCoordinate(event);
        ctx.lineTo(coordinate.x, coordinate.y);

        ctx.stroke();
      } else {
        const octx = plugin.overlayContext;
        // octx.globalCompositeOperation = 'source-over';
        octx.lineWidth = lineStyle.width;
        octx.strokeStyle = lineStyle.color;
        let mouseX = event.clientX - offsetX;
        let mouseY = event.clientY - offsetY;
        var width = mouseX - startX;
        var height = mouseY - startY;
        // clear the canvas
        octx.clearRect(0, 0, plugin.canvas.width, plugin.canvas.height);

        octx.strokeRect(startX, startY, width, height);
        prevStartX = startX;
        prevStartY = startY;

        prevWidth = width;
        prevHeight = height;
      }
    };

    const initialize = () => {
      $element.addClass(pluginSuffix);
      $element.append(createCanvas());
      $element.append(createOverlayCanvas()); //TODO: Support drawing rectangles
      $element.append(createToolbox());
      resizeCanvas();

      plugin.$overlayCanvas.on('mousedown', handleStartDraw);
      plugin.$overlayCanvas.on('mouseup mouseleave mouseout', handleStopDraw);
      plugin.$overlayCanvas.on('mousemove', handleDraw);
    };

    /* public methods */
    plugin.init = function () {
      plugin.settings = $.extend({}, defaults, options);
      initialize();
      return plugin;
    };

    plugin.clear = function () {
      plugin.context.clearRect(
        0,
        0,
        plugin.context.canvas.width,
        plugin.context.canvas.height
      );
      plugin.overlayContext.clearRect(
        0,
        0,
        plugin.overlayContext.canvas.width,
        plugin.overlayContext.canvas.height
      );
    };

    plugin.resize = function () {
      resizeCanvas();
    };

    plugin.getBytes = function () {
      return plugin.canvas.toDataURL();
    };
    plugin.setCaptureScreen = async function (blob: Blob) {
      plugin.clear();
      await blobToCanvas(blob, null, null, plugin.canvas);
      canvasOffset = plugin.$canvas.offset();
      offsetX = canvasOffset.left;
      offsetY = canvasOffset.top;
      scrollX = plugin.$canvas.scrollLeft();
      scrollY = plugin.$canvas.scrollTop();
      plugin.overlayCanvas.width = plugin.canvas.width;
      plugin.overlayCanvas.height = plugin.canvas.height;
      plugin.overlayCanvas.setAttribute(
        'style',
        `width:${plugin.canvas.width}px;height:${plugin.canvas.height}px`
      );
      return plugin;
    };

    plugin.init();
  };

  $.fn.drawpad = function (options: DrawpadPluginOptions) {
    if ($(this).data(pluginSuffix) === undefined) {
      var plugin = new $.drawpad(this, options);
      $(this).data(pluginSuffix, plugin);
    }

    return $(this).data(pluginSuffix);
  };
})(jQuery);
