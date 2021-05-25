export const indexImagesByDepictsUri = <ImageT extends {depictsUri: string}>(
  images: readonly ImageT[]
): {[index: string]: readonly ImageT[]} => {
  return images.reduce((map, image) => {
    const existingImages = map[image.depictsUri];
    if (existingImages) {
      existingImages.push(image);
    } else {
      map[image.depictsUri] = [image];
    }
    return map;
  }, {} as {[index: string]: ImageT[]});
};
