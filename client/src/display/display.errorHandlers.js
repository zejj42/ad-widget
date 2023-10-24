export const applyFallbackOnImageError = (image, fallbackSrc) => {
  return new Promise((resolve) => {
    let didRecImgFail = false;
    image.onerror = () => {
      if (image.src !== fallbackSrc) {
        image.src = fallbackSrc;
        didRecImgFail = true;
      }
      resolve(didRecImgFail);
    };
    image.onload = () => {
      resolve(didRecImgFail);
    };
  });
};
