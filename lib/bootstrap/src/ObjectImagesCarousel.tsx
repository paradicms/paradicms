import * as React from "react";
import {useState} from "react";
import {ImageDimensions, JoinedImage} from "@paradicms/models";
import {Carousel, CarouselControl, CarouselItem} from "reactstrap";
import {indexImagesByOriginalImageUri, selectThumbnail} from "@paradicms/model-utils";
import {ObjectImageCard} from "./ObjectImageCard";

export const ObjectImagesCarousel: React.FunctionComponent<{
  images: readonly JoinedImage[];
}> = ({images}) => {
  const imagesByOriginalImageUri = indexImagesByOriginalImageUri(images);

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
      {Object.keys(imagesByOriginalImageUri).map(originalImageUri => {
        const images = imagesByOriginalImageUri[originalImageUri];
        const originalImage = images.find(
          image => image.uri === originalImageUri,
        );
        const thumbnailTargetDimensions: ImageDimensions = {height: 600, width: 600};
        const thumbnail = selectThumbnail({
          imagesByOriginalImageUri,
          targetDimensions: thumbnailTargetDimensions,
        });
        return (
          <CarouselItem key={originalImageUri}>
            <ObjectImageCard originalImage={originalImage!} thumbnail={thumbnail}
                             thumbnailTargetDimensions={thumbnailTargetDimensions} />
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
