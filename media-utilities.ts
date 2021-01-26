// docs: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia
// see: https://www.webrtc-experiment.com/Pluginfree-Screen-Sharing/#20893521368186473
// see: https://github.com/muaz-khan/WebRTC-Experiment/blob/master/Pluginfree-Screen-Sharing/conference.js

export const getDisplayMedia = (options: any) => {
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

export const getUserMedia = (options: any) => {
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

export const takeScreenshotStream = async () => {
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

export const takeScreenshotCanvas = async () => {
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
export const getJpegBlob = (canvas: HTMLCanvasElement) => {
  return new Promise<Blob>((resolve, reject) => {
    // docs: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob
    canvas.toBlob((blob) => resolve(blob), 'image/jpeg', 0.95);
  });
};

export const getJpegBytes = async (canvas: HTMLCanvasElement) => {
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

export const takeScreenshotJpegBlob = async () => {
  const canvas = await takeScreenshotCanvas();
  return getJpegBlob(canvas);
};

export const takeScreenshotJpegBytes = async () => {
  const canvas = await takeScreenshotCanvas();
  return getJpegBytes(canvas);
};

export const blobToCanvas = (
  blob: Blob,
  maxWidth: number,
  maxHeight: number,
  canvas: HTMLCanvasElement
) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
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
