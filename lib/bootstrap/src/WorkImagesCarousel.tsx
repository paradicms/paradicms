import * as React from "react";
import {useCallback, useEffect, useState} from "react";
import {Image, ImageDimensions, Work} from "@paradicms/models";
import {Carousel, CarouselControl, CarouselItem} from "reactstrap";
import ImageZoom from "react-medium-image-zoom";
import {RightsTable} from "./RightsTable";

const thumbnailTargetDimensions: ImageDimensions = {height: 600, width: 600};

export const WorkImagesCarousel: React.FunctionComponent<{
  hideImageRights?: boolean;
  onShowImage?: (newImage: Image) => void;
  work: Work;
}> = ({hideImageRights, onShowImage, work}) => {
  const workOriginalImages = work.originalImages;

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
            <h6 className="text-center">Image rights</h6>
            <RightsTable rights={originalImage.rights} />
          </div>
        ) : null}
      </div>
    );
  };

  useEffect(() => {
    if (onShowImage && workOriginalImages.length > 0) {
      // Invoke onChange with the first image
      onShowImage(workOriginalImages[0]);
    }
  }, [work]);

  const [activeIndex, setActiveIndex] = useState(0);

  const onClickNext = useCallback(() => {
    // if (animating) return;
    const nextIndex =
      activeIndex === workOriginalImages.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    if (onShowImage) {
      onShowImage(workOriginalImages[nextIndex]);
    }
  }, [activeIndex]);

  const onClickPrevious = useCallback(() => {
    // if (animating) return;
    const nextIndex =
      activeIndex === 0 ? workOriginalImages.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    if (onShowImage) {
      onShowImage(workOriginalImages[nextIndex]);
    }
  }, [activeIndex]);

  // const goToIndex = (newIndex: number) => {
  //   // if (animating) return;
  //   setActiveIndex(newIndex);
  // };

  if (workOriginalImages.length === 1) {
    console.debug(
      "work",
      work.uri,
      "only has one image, rendering without carousel"
    );
    return renderOriginalImage(workOriginalImages[0]);
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
      {workOriginalImages.map(originalImage => {
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
