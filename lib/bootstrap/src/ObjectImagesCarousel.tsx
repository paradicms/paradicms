import * as React from "react";
import {useState} from "react";
import {ImageDimensions, JoinedImage} from "@paradicms/models";
import {Carousel, CarouselControl, CarouselItem} from "reactstrap";
import {getImageSrc, indexImagesByOriginalImageUri, selectThumbnail} from "@paradicms/model-utils";
import ImageZoom from "react-medium-image-zoom";
import {RightsTable} from "./RightsTable";

export const ObjectImagesCarousel: React.FunctionComponent<{
  images: readonly JoinedImage[];
}> = ({images}) => {
  const imagesByOriginalImageUri = indexImagesByOriginalImageUri(images);
  const originalImageUris = Object.keys(imagesByOriginalImageUri);

  const renderObjectImage = (originalImageUri: string) => {
    const images = imagesByOriginalImageUri[originalImageUri];
    const originalImage = images.find(
      image => image.uri === originalImageUri,
    );
    const thumbnailTargetDimensions: ImageDimensions = {height: 600, width: 600};
    const thumbnail = selectThumbnail({
      images,
      targetDimensions: thumbnailTargetDimensions,
    });

    return (
      <div>
        <div>
          <ImageZoom
            image={{
              className: "img",
              src: getImageSrc({image: thumbnail, targetDimensions: thumbnailTargetDimensions}),
              style: {
                maxHeight: thumbnailTargetDimensions.height,
                maxWidth: thumbnailTargetDimensions.width,
              },
            }}
            zoomImage={{
              className: "img--zoomed",
              src: getImageSrc({image: originalImage, targetDimensions: thumbnailTargetDimensions}),
              style: originalImage?.exactDimensions ?? undefined,
            }}
          />
        </div>
        {originalImage && originalImage.rights ? (
          <div className="mt-2">
            <h6 className="text-center">Image rights</h6>
            <RightsTable rights={originalImage.rights} />
          </div>
        ) : null}
      </div>
    );
  };

  if (originalImageUris.length === 1) {
    return renderObjectImage(originalImageUris[0]);
  }

  const items = Object.keys(imagesByOriginalImageUri).map(originalImageUri => ({
    key: originalImageUri,
  }));

  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    // if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    // if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // const goToIndex = (newIndex: number) => {
  //   // if (animating) return;
  //   setActiveIndex(newIndex);
  // };

  return (
    <Carousel
      activeIndex={activeIndex}
      autoPlay={false}
      next={next}
      previous={previous}
      slide={false}
    >
      {/*<CarouselIndicators*/}
      {/*  activeIndex={activeIndex}*/}
      {/*  items={items}*/}
      {/*  onClickHandler={goToIndex}*/}
      {/*/>*/}
      {originalImageUris.map(originalImageUri => {
        return (
          <CarouselItem key={originalImageUri}>
            {renderObjectImage(originalImageUri)}
          </CarouselItem>
        );
      })}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};
