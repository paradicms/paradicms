import * as React from "react";
import ImageZoom from "react-medium-image-zoom";
import Carousel from "react-material-ui-carousel";
import {Image} from "~/models/image/Image";
import {Images} from "~/models/image/Images";

export const ObjectImagesCarousel: React.FunctionComponent<{
  images: Image[];
}> = ({images}) => {
  const imagesByOriginalImageUri = Images.indexByOriginalImageUri(images);
  return (
    <Carousel autoPlay={false}>
      {Object.keys(imagesByOriginalImageUri).map(originalImageUri => {
        const images = imagesByOriginalImageUri[originalImageUri];
        const originalImage = images.find(
          image => image.uri === originalImageUri
        );
        const thumbnail = Images.selectThumbnail({
          images,
          maxDimensions: {height: 600, width: 600},
        });
        return (
          <ImageZoom
            image={{
              className: "img",
              src: thumbnail
                ? thumbnail.uri
                : "https://place-hold.it/600x600?text=Missing%20thumbnail",
              style: {
                maxHeight: 600,
                maxWidth: 600,
              },
            }}
            key={originalImageUri}
            zoomImage={{
              className: "img--zoomed",
              src: originalImageUri,
              style: originalImage?.exactDimensions ?? undefined,
            }}
          />
        );
      })}
    </Carousel>
  );
};
