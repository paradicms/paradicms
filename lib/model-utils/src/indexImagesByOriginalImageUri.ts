export const indexImagesByOriginalImageUri = <
  ImageT extends {originalImageUri: string | null; uri: string}
>(
  images: readonly ImageT[]
): {[index: string]: readonly ImageT[]} => {
  return images.reduce((map, image) => {
    const originalImageUri = image.originalImageUri ?? image.uri;
    const existingImages = map[originalImageUri];
    if (existingImages) {
      existingImages.push(image);
    } else {
      map[originalImageUri] = [image];
    }
    return map;
  }, {} as {[index: string]: ImageT[]});
};
