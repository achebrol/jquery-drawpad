import {
  blobToCanvas,
  getJpegBlob,
  takeScreenshotJpegBlob
} from './media-utilities';

export class DrawpadPlugin {
  pluginSuffix = 'drawpad';
  $element: JQuery;
  $canvas: JQuery;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  $overlayCanvas: JQuery;
  overlayCanvas: HTMLCanvasElement;
  overlayContext: CanvasRenderingContext2D;

  options: DrawpadPluginOptions;
  defaults: DrawpadPluginOptions = {
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
  coordinate = { x: 0, y: 0 };
  drawing = false;
  drawingType = 'pen';
  lineStyle: {
    width: number;
    color: string;
    type: CanvasLineCap;
  } = {
    width: 5,
    color: this.defaults.defaultColor,
    type: 'round'
  };
  bytes = '';
  //Rectangle Stuff
  positionA: any;
  positionB: any;
  canvasOffset: any; // = $canvas.offset();
  offsetX: number; //= canvasOffset.left;
  offsetY: number; //= canvasOffset.top;
  scrollX: number; //= $canvas.scrollLeft();
  scrollY: number; //= $canvas.scrollTop();
  startX: number;
  startY: number;

  prevStartX = 0;
  prevStartY = 0;

  prevWidth = 0;
  prevHeight = 0;
  //End Rectangle Stuff

  constructor(element: JQuery, options: Partial<DrawpadPluginOptions>) {
    this.$element = element;
    this.options = $.extend({}, this.defaults, options);
    this.initialize();
  }
  /*Private Methods */
  private initialize() {
    this.$element.addClass(this.pluginSuffix);
    this.$element.append(this.createCanvas());
    this.$element.append(this.createOverlayCanvas()); //TODO: Support drawing rectangles
    this.$element.append(this.createToolbox());
    this.resizeCanvas();

    this.$overlayCanvas.on('mousedown', this.handleStartDraw.bind(this));
    this.$overlayCanvas.on(
      'mouseup mouseleave mouseout',
      this.handleStopDraw.bind(this)
    );
    this.$overlayCanvas.on('mousemove', this.handleDraw.bind(this));
  }

  private createCanvas() {
    this.$canvas = $('<canvas></canvas>');
    this.canvas = this.$canvas.get(0) as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d');
    return this.$canvas;
  }
  private createOverlayCanvas() {
    this.$overlayCanvas = $('<canvas></canvas>');
    this.overlayCanvas = this.$overlayCanvas.get(0) as HTMLCanvasElement;
    this.overlayContext = this.overlayCanvas.getContext('2d');
    return this.$overlayCanvas;
  }
  private resizeCanvas() {
    this.canvas.width = this.$element.width();
    this.canvas.height = this.$element.height();
    this.overlayCanvas.width = this.$element.width();
    this.overlayCanvas.height = this.$element.height();
  }
  private getMousePos(canvas: HTMLCanvasElement, evt: MouseEvent) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
  private createToolbox() {
    const $toolbox = $(`<div class="${this.pluginSuffix}-toolbox"></div>`);
    const createColorbox = (color: string) => {
      const activeClass = `${this.pluginSuffix}-colorbox-active`;
      let $colorbox = $(
        `<div class="${this.pluginSuffix}-colorbox" style="background-color:${color};">&nbsp;</div>`
      );
      if (color === this.options.defaultColor) {
        $colorbox.addClass(activeClass);
      }

      $colorbox.on('click', () => {
        this.$element.removeClass(`${this.pluginSuffix}-erase-mode`);
        this.lineStyle.color = color;
        // drawingType = 'pen';
        $colorbox.addClass(activeClass).siblings().removeClass(activeClass);
        this.logDrawingParams();
      });

      return $colorbox;
    };
    const createEraser = () => {
      const activeClass = `${this.pluginSuffix}-colorbox-active`;
      const $eraser = $(
        `<div class="${this.pluginSuffix}-colorbox ${this.pluginSuffix}-eraser">&nbsp;</div>`
      );

      $eraser.on('click', () => {
        this.drawingType = 'eraser';
        this.$element.addClass(`${this.pluginSuffix}-erase-mode`);
        $eraser.addClass(activeClass).siblings().removeClass(activeClass);
      });

      return $eraser;
    };
    const createDrawingTool = (tool: string) => {
      const activeClass = `${this.pluginSuffix}-drawing-type-active`;
      var text = tool == 'pen' ? '&#x3030;' : '&#x25AD;';
      var title = tool == 'pen' ? 'Freehand' : 'Rectangle';
      const $drawingTool = $(
        `<div class="${this.pluginSuffix}-colorbox ${this.pluginSuffix}-drawing-tool" title="${title}">${text}</div>`
      );
      if (this.drawingType === tool) {
        $drawingTool.addClass(activeClass);
      }
      $drawingTool.on('click', () => {
        this.drawingType = tool;
        this.logDrawingParams();
        this.$element.addClass(`${this.pluginSuffix}-drawing-tool`);
        $drawingTool.addClass(activeClass).siblings().removeClass(activeClass);
      });

      return $drawingTool;
    };
    const createScreenCapture = () => {
      const $screenCapture = $(
        `<div class="${this.pluginSuffix}-colorbox ${this.pluginSuffix}-screen">&#x1F3AC;</div>`
      );

      $screenCapture.on('click', async () => {
        //jQuery('.feedback-glass').hide();
        //jQuery('.feedback-modal').hide();
        jQuery('.feedback-canvas').hide();
        var screenshotJpegBlob = await takeScreenshotJpegBlob();
        await blobToCanvas(screenshotJpegBlob, null, null, this.canvas);
        jQuery('.feedback-canvas').show();
        //jQuery('.feedback-modal').show();
      });

      return $screenCapture;
    };
    const createDoneButton = () => {
      const $doneButton = $(
        `<div class="${this.pluginSuffix}-colorbox ${this.pluginSuffix}-done" style="border-radius:0 2px 2px 0;" title="Click here after done editing.">&#x2714;</div>`
      );

      $doneButton.on('click', async () => {
        const blob = await getJpegBlob(this.canvas);
        jQuery('.feedback-glass').show();
        jQuery('.feedback-modal').show();
        jQuery('.feedback-canvas').hide();
        var canvas = jQuery(
          '.feedback-screenshot canvas'
        )[0] as HTMLCanvasElement;
        this.bytes = canvas.toDataURL();
        await blobToCanvas(blob, 300, 300, canvas);
      });

      return $doneButton;
    };
    const createHandleTool = () => {
      const activeClass = `${this.pluginSuffix}-colorbox-active`;
      let $dragHandle = $(
        `<div class="${this.pluginSuffix}-colorbox" title="Drag to move the toolbar" style="cursor:move;border-radius:2px 0 0 2px;">&#x2630;</div>`
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
    const $colors = $(`<div class="${this.pluginSuffix}-colors"></div>`);
    $colors.append(createHandleTool());
    this.options.colors.forEach((color: string) => {
      $colors.append(createColorbox(color));
    });

    // $colors.append(createEraser()); //dont really need it
    // $colors.append(createScreenCapture());
    $colors.append(createDrawingTool('pen'));
    $colors.append(createDrawingTool('rectangle'));
    $colors.append(createDoneButton());
    $toolbox.append($colors);

    return $toolbox;
  }
  private logDrawingParams() {
    //console.log(this.drawingType, this.lineStyle, this.drawing);
  }
  private updateCoordinate(event: MouseEvent) {
    this.coordinate.x = event.offsetX;
    this.coordinate.y = event.offsetY;
  }
  private handleStartDraw(event: MouseEvent) {
    this.drawing = true;
    this.$element.addClass(`${this.pluginSuffix}-drawing`);
    this.updateCoordinate(event);
    this.positionA = this.getMousePos(this.canvas, event);
    this.startX = event.clientX - this.offsetX;
    this.startY = event.clientY - this.offsetY;
    this.handleDraw(event);
  }
  private handleStopDraw(event: MouseEvent) {
    this.drawing = false;
    this.$element.removeClass(`${this.pluginSuffix}-drawing`);
    this.positionB = this.getMousePos(this.canvas, event);
    if (this.drawingType == 'rectangle' && this.prevWidth != 0) {
      this.context.lineWidth = this.lineStyle.width;
      this.context.strokeStyle = this.lineStyle.color;
      this.context.strokeRect(
        this.prevStartX,
        this.prevStartY,
        this.prevWidth,
        this.prevHeight
      );
      //reset
      this.prevWidth = 0;
      this.prevHeight = 0;
    }
  }
  private handleDraw(event: MouseEvent) {
    if (!this.drawing) return;
    const ctx = this.context;
    if (this.drawingType != 'rectangle') {
      ctx.beginPath();
      switch (this.drawingType) {
        case 'pen':
          ctx.globalCompositeOperation = 'source-over';
          ctx.lineWidth = this.lineStyle.width;
          ctx.strokeStyle = this.lineStyle.color;
          break;
        case 'eraser':
          ctx.globalCompositeOperation = 'destination-out';
          ctx.lineWidth = this.options.eraserSize;
          ctx.strokeStyle = 'black';
          break;
      }
      ctx.lineCap = this.lineStyle.type;
      ctx.moveTo(this.coordinate.x, this.coordinate.y);
      this.updateCoordinate(event);
      ctx.lineTo(this.coordinate.x, this.coordinate.y);

      ctx.stroke();
    } else {
      const octx = this.overlayContext;
      // octx.globalCompositeOperation = 'source-over';
      octx.lineWidth = this.lineStyle.width;
      octx.strokeStyle = this.lineStyle.color;
      let mouseX = event.clientX - this.offsetX;
      let mouseY = event.clientY - this.offsetY;
      var width = mouseX - this.startX;
      var height = mouseY - this.startY;
      // clear the canvas
      octx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      octx.strokeRect(this.startX, this.startY, width, height);
      this.prevStartX = this.startX;
      this.prevStartY = this.startY;

      this.prevWidth = width;
      this.prevHeight = height;
    }
  }

  /*Public Methods */
  public clear() {
    this.context.clearRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );
    this.overlayContext.clearRect(
      0,
      0,
      this.overlayContext.canvas.width,
      this.overlayContext.canvas.height
    );
  }
  public resize() {
    this.resizeCanvas();
  }

  public getBytes() {
    return this.canvas.toDataURL();
  }
  public async setCaptureScreen(blob: Blob) {
    this.clear();
    await blobToCanvas(blob, null, null, this.canvas);
    this.canvasOffset = this.$canvas.offset();
    this.offsetX = this.canvasOffset.left;
    this.offsetY = this.canvasOffset.top;
    this.scrollX = this.$canvas.scrollLeft();
    this.scrollY = this.$canvas.scrollTop();
    this.overlayCanvas.width = this.canvas.width;
    this.overlayCanvas.height = this.canvas.height;
    this.overlayCanvas.setAttribute(
      'style',
      `width:${this.canvas.width}px;height:${this.canvas.height}px`
    );
  }
}
(function ($) {
  const pluginSuffix = 'drawpad';
  $.fn.drawpad = function (options: DrawpadPluginOptions) {
    if ($(this).data(pluginSuffix) === undefined) {
      var plugin = new DrawpadPlugin(this, options);
      $(this).data(pluginSuffix, plugin);
    }
    return $(this).data(pluginSuffix) as DrawpadPlugin;
  };
})(jQuery);
