/* 
	cnbilgin 
	https://github.com/cnbilgin/jquery-drawpad
	v 0.1
*/

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

    /* private methods */
    const createCanvas = () => {
      plugin.$canvas = $('<canvas></canvas>');
      plugin.canvas = plugin.$canvas.get(0);
      plugin.context = plugin.canvas.getContext('2d');

      return plugin.$canvas;
    };
    const resizeCanvas = () => {
      plugin.canvas.width = $element.width();
      plugin.canvas.height = $element.height();
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

        $colorbox.click(() => {
          $element.removeClass(`${pluginSuffix}-erase-mode`);
          lineStyle.color = color;
          drawingType = 'pen';
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

      const createScreenCapture = () => {
        const $screenCapture = $(
          `<div class="${pluginSuffix}-colorbox ${pluginSuffix}-screen">&#x1F3AC;</div>`
        );

        $screenCapture.on('click', async () => {
          jQuery('.feedback-glass').hide();
          jQuery('.feedback-modal').hide();
          var screenshotJpegBlob = await takeScreenshotJpegBlob();
          await blobToCanvas(screenshotJpegBlob, null, null);
          jQuery('.feedback-glass').show();
          jQuery('.feedback-modal').show();
        });

        return $screenCapture;
      };

      const createDoneButton = () => {
        const $doneButton = $(
          `<div class="${pluginSuffix}-colorbox ${pluginSuffix}-done">Done</div>`
        );

        $doneButton.on('click', async () => {
          jQuery('.feedback-glass').show();
          jQuery('.feedback-modal').show();
          //TODO:Get blob from fullscreen and show a preview in dialog
          //await blobToCanvas(screenshotJpegBlob, null, null);
        });

        return $doneButton;
      };

      const $colors = $(`<div class="${pluginSuffix}-colors"></div>`);
      plugin.settings.colors.forEach((color: string) => {
        $colors.append(createColorbox(color));
      });

      $colors.append(createEraser());
      $colors.append(createScreenCapture());
      $colors.append(createDoneButton());
      $toolbox.append($colors);

      return $toolbox;
    };

    const updateCoordinate = (event: any) => {
      coordinate.x = event.offsetX;
      coordinate.y = event.offsetY;
    };

    const handleStartDraw = (event: any) => {
      drawing = true;
      $element.addClass(`${pluginSuffix}-drawing`);
      updateCoordinate(event);
      handleDraw(event);
    };
    const handleStopDraw = () => {
      drawing = false;
      $element.removeClass(`${pluginSuffix}-drawing`);
    };
    const handleDraw = (event: any) => {
      if (!drawing) return;
      const ctx = plugin.context;

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

          break;
      }
      ctx.lineCap = lineStyle.type;
      ctx.moveTo(coordinate.x, coordinate.y);
      updateCoordinate(event);
      ctx.lineTo(coordinate.x, coordinate.y);

      ctx.stroke();
    };

    const initialize = () => {
      $element.addClass(pluginSuffix);
      $element.append(createCanvas());
      $element.append(createToolbox());
      resizeCanvas();

      plugin.$canvas.on('mousedown', handleStartDraw);
      plugin.$canvas.on('mouseup mouseleave', handleStopDraw);
      plugin.$canvas.on('mousemove', handleDraw);
    };
    // docs: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia
    // see: https://www.webrtc-experiment.com/Pluginfree-Screen-Sharing/#20893521368186473
    // see: https://github.com/muaz-khan/WebRTC-Experiment/blob/master/Pluginfree-Screen-Sharing/conference.js

    const getDisplayMedia = (options: any) => {
      var nav = navigator as any;
      if (nav.mediaDevices && nav.mediaDevices.getDisplayMedia) {
        return nav.mediaDevices.getDisplayMedia(options);
      }
      if (nav.getDisplayMedia) {
        return nav.getDisplayMedia(options);
      }
      if (nav.webkitGetDisplayMedia) {
        return nav.webkitGetDisplayMedia(options);
      }
      if (nav.mozGetDisplayMedia) {
        return nav.mozGetDisplayMedia(options);
      }
      throw new Error('getDisplayMedia is not defined');
    };

    const getUserMedia = (options: any) => {
      var nav = navigator as any;
      if (nav.mediaDevices && nav.mediaDevices.getUserMedia) {
        return navigator.mediaDevices.getUserMedia(options);
      }
      if (nav.getUserMedia) {
        return navigator.getUserMedia(options, undefined, undefined);
      }
      if (nav.webkitGetUserMedia) {
        return nav.webkitGetUserMedia(options);
      }
      if (nav.mozGetUserMedia) {
        return nav.mozGetUserMedia(options);
      }
      throw new Error('getUserMedia is not defined');
    };

    const takeScreenshotStream = async () => {
      // see: https://developer.mozilla.org/en-US/docs/Web/API/Window/screen
      const width = screen.width * (window.devicePixelRatio || 1);
      const height = screen.height * (window.devicePixelRatio || 1);

      const errors = [];
      let stream;
      try {
        stream = await getDisplayMedia({
          audio: false,
          // see: https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints/video
          video: {
            width,
            height,
            frameRate: 1
          }
        });
      } catch (ex) {
        errors.push(ex);
      }

      // for electron js
      if (navigator.userAgent.indexOf('Electron') >= 0) {
        try {
          stream = await getUserMedia({
            audio: false,
            video: {
              mandatory: {
                chromeMediaSource: 'desktop',
                // chromeMediaSourceId: source.id,
                minWidth: width,
                maxWidth: width,
                minHeight: height,
                maxHeight: height
              }
            }
          });
        } catch (ex) {
          errors.push(ex);
        }
      }

      if (errors.length) {
        console.debug(...errors);
        if (!stream) {
          throw errors[errors.length - 1];
        }
      }

      return stream;
    };

    const takeScreenshotCanvas = async () => {
      const stream = await takeScreenshotStream();

      // from: https://stackoverflow.com/a/57665309/5221762
      const video = document.createElement('video');
      const result = await new Promise<HTMLCanvasElement>((resolve, reject) => {
        video.onloadedmetadata = () => {
          video.play();
          video.pause();

          // from: https://github.com/kasprownik/electron-screencapture/blob/master/index.js
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const context = canvas.getContext('2d');
          // see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement
          context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
          resolve(canvas);
        };
        video.srcObject = stream;
      });

      stream.getTracks().forEach(function (track: any) {
        track.stop();
      });

      if (result == null) {
        throw new Error('Cannot take canvas screenshot');
      }

      return result;
    };

    // from: https://stackoverflow.com/a/46182044/5221762
    const getJpegBlob = (canvas: HTMLCanvasElement) => {
      return new Promise<Blob>((resolve, reject) => {
        // docs: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob
        canvas.toBlob((blob) => resolve(blob), 'image/jpeg', 0.95);
      });
    };

    const getJpegBytes = async (canvas: HTMLCanvasElement) => {
      const blob = await getJpegBlob(canvas);
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.addEventListener('loadend', function () {
          if (this.error) {
            reject(this.error);
            return;
          }
          resolve(this.result);
        });

        fileReader.readAsArrayBuffer(blob);
      });
    };

    const takeScreenshotJpegBlob = async () => {
      const canvas = await takeScreenshotCanvas();
      return getJpegBlob(canvas);
    };

    const takeScreenshotJpegBytes = async () => {
      const canvas = await takeScreenshotCanvas();
      return getJpegBytes(canvas);
    };

    const blobToCanvas = (blob: Blob, maxWidth: number, maxHeight: number) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function () {
          const canvas: HTMLCanvasElement = $(
            '.feedback-screenshot canvas'
          )[0] as HTMLCanvasElement; // document.createElement('canvas')
          const scale = Math.min(
            1,
            maxWidth ? maxWidth / img.width : 1,
            maxHeight ? maxHeight / img.height : 1
          );
          canvas.width = img.width * scale;
          canvas.height = img.height * scale;
          canvas.setAttribute(
            'style',
            `width:${canvas.width}px;height:${canvas.height}px`
          );
          const ctx = canvas.getContext('2d');
          ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            0,
            0,
            canvas.width,
            canvas.height
          );
          //document.body.appendChild(img)
          resolve(canvas);
        };
        img.onerror = () => {
          reject(new Error('Error load blob to Image'));
        };
        img.src = URL.createObjectURL(blob);
      });
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
    };

    plugin.resize = function () {
      resizeCanvas();
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
