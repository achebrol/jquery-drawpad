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
      defaultColor: '#000000',
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
      color: 'black',
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
          `<div class="${pluginSuffix}-colorbox" style="background-color:${color};"></div>`
        );
        if (color === plugin.settings.defaultColor)
          $colorbox.addClass(activeClass);

        $colorbox.on('click', () => {
          $element.removeClass(`${pluginSuffix}-erase-mode`);
          lineStyle.color = color;
          // drawingType = 'pen';
          $colorbox.addClass(activeClass).siblings().removeClass(activeClass);
        });

        return $colorbox;
      };
      const createEraser = () => {
        const activeClass = `${pluginSuffix}-colorbox-active`;
        const $eraser = $(
          `<div class="${pluginSuffix}-colorbox ${pluginSuffix}-eraser"></div>`
        );

        $eraser.on('click', function () {
          drawingType = 'eraser';
          $element.addClass(`${pluginSuffix}-erase-mode`);
          $eraser.addClass(activeClass).siblings().removeClass(activeClass);
        });

        return $eraser;
      };
      const createDrawingTool = () => {
        const activeClass = `${pluginSuffix}-colorbox-active`;
        const $drawingTool = $(
          `<div class="${pluginSuffix}-colorbox ${pluginSuffix}-drawing-tool">&#x3030;</div>`
        );

        $drawingTool.on('click', function () {
          drawingType = drawingType == 'pen' ? 'rectangle' : 'pen';
          this.innerHTML = drawingType == 'pen' ? '&#x3030;' : '&#x25AD;';
          this.title = drawingType == 'pen' ? 'Freehand' : 'Rectangles';
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
          `<div class="${pluginSuffix}-colorbox ${pluginSuffix}-done" style="font-size:20px" title="Click here after done editing.">&#x1F197;</div>`
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

      const $colors = $(`<div class="${pluginSuffix}-colors"></div>`);
      plugin.settings.colors.forEach((color: string) => {
        $colors.append(createColorbox(color));
      });

      // $colors.append(createEraser()); //dont really need it
      // $colors.append(createScreenCapture());
      $colors.append(createDrawingTool());
      $colors.append(createDoneButton());
      $toolbox.append($colors);

      return $toolbox;
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
      if (drawingType == 'rectangle') {
        plugin.context.strokeRect(
          prevStartX,
          prevStartY,
          prevWidth,
          prevHeight
        );
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
        octx.globalCompositeOperation = 'source-over';
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
