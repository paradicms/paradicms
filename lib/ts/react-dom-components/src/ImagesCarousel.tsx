import * as React from "react";
import {useCallback, useEffect, useState} from "react";
import {Image, ImageDimensions} from "@paradicms/models";
import {Carousel, CarouselControl, CarouselItem} from "reactstrap";
import ImageZoom from "react-medium-image-zoom";
import {thumbnailTargetDimensions as thumbnailTargetDimensionsDefault} from "./thumbnailTargetDimensions";
import {RightsParagraph} from "./RightsParagraph";

export interface ImagesCarouselProps {
  hideImageRights?: boolean;
  images: readonly Image[];
  onShowImage?: (newImage: Image) => void;
  thumbnailTargetDimensions?: ImageDimensions;
}

export const ImagesCarousel: React.FunctionComponent<ImagesCarouselProps> = ({
  hideImageRights,
  images,
  onShowImage,
  thumbnailTargetDimensions: thumbnailTargetDimensionsInput,
}) => {
  const originalImages = images.filter(image => image.isOriginal);

  const thumbnailTargetDimensions =
    thumbnailTargetDimensionsInput ?? thumbnailTargetDimensionsDefault;

  const renderOriginalImage = (originalImage: Image) => {
    const originalImageSrc = originalImage.src;
    if (!originalImageSrc) {
      return null;
    }
    const thumbnail = originalImage.thumbnail({
      targetDimensions: thumbnailTargetDimensions,
    });
    const thumbnailSrc = thumbnail?.src;
    if (!thumbnail || !thumbnailSrc) {
      return (
        <img
          className="img"
          src={originalImageSrc}
          style={{
            maxHeight: thumbnailTargetDimensions.height,
            maxWidth: thumbnailTargetDimensions.width,
          }}
        />
      );
    }

    return (
      <div>
        <div>
          <ImageZoom
            image={{
              className: "img",
              src: thumbnailSrc,
              style: {
                maxHeight: thumbnailTargetDimensions.height,
                maxWidth: thumbnailTargetDimensions.width,
              },
            }}
            zoomImage={{
              className: "img--zoomed",
              src: originalImageSrc,
              style: originalImage?.exactDimensions ?? undefined,
            }}
          />
        </div>
        {!hideImageRights && originalImage && originalImage.rights ? (
          <div className="mt-2">
            <RightsParagraph
              material="Image"
              rights={originalImage.rights}
              style={{fontSize: "xx-small"}}
            />
          </div>
        ) : null}
      </div>
    );
  };

  useEffect(() => {
    if (onShowImage && originalImages.length > 0) {
      // Invoke onChange with the first image
      onShowImage(originalImages[0]);
    }
  }, [images]);

  const [activeIndex, setActiveIndex] = useState(0);

  const onClickNext = useCallback(() => {
    // if (animating) return;
    const nextIndex =
      activeIndex === originalImages.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    if (onShowImage) {
      onShowImage(originalImages[nextIndex]);
    }
  }, [activeIndex]);

  const onClickPrevious = useCallback(() => {
    // if (animating) return;
    const nextIndex =
      activeIndex === 0 ? originalImages.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    if (onShowImage) {
      onShowImage(originalImages[nextIndex]);
    }
  }, [activeIndex]);

  // const goToIndex = (newIndex: number) => {
  //   // if (animating) return;
  //   setActiveIndex(newIndex);
  // };

  if (originalImages.length === 1) {
    // console.debug("only has one image, rendering without carousel");
    return renderOriginalImage(originalImages[0]);
  }

  return (
    <Carousel
      activeIndex={activeIndex}
      autoPlay={false}
      next={onClickNext}
      previous={onClickPrevious}
      slide={false}
    >
      {/*<CarouselIndicators*/}
      {/*  activeIndex={activeIndex}*/}
      {/*  items={items}*/}
      {/*  onClickHandler={goToIndex}*/}
      {/*/>*/}
      {originalImages.map(originalImage => {
        const renderedOriginalImage = renderOriginalImage(originalImage);
        if (!renderedOriginalImage) {
          return null;
        }
        return (
          <CarouselItem key={originalImage.uri}>
            {renderedOriginalImage}
          </CarouselItem>
        );
      })}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={onClickPrevious}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={onClickNext}
      />
    </Carousel>
  );
};
