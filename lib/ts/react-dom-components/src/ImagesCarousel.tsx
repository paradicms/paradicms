import {Image, imagePlaceholderSrc} from "@paradicms/models";
import * as React from "react";
import {useCallback, useEffect, useState} from "react";
import ImageZoom from "react-medium-image-zoom";
import {Carousel, CarouselItem} from "reactstrap";
import {FontAwesomeCarouselControl} from "./FontAwesomeCarouselControl";
import {RightsParagraph} from "./RightsParagraph";
import {imagesCarouselThumbnailSelector} from "./imagesCarouselThumbnailSelector";

export interface ImagesCarouselProps {
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  hideImageRights?: boolean;
  images: readonly Image[];
  onShowImage?: (newImage: Image) => void;
}

export const ImagesCarousel: React.FunctionComponent<ImagesCarouselProps> = ({
  getAbsoluteImageSrc,
  hideImageRights,
  images,
  onShowImage,
}) => {
  const originalImages = images.filter(image => image.thumbnails.length > 0);

  const renderOriginalImage = (originalImage: Image) => {
    if (!originalImage.src) {
      return null;
    }
    const thumbnail = originalImage.thumbnail(imagesCarouselThumbnailSelector);
    if (!thumbnail || !thumbnail.src) {
      return (
        <img
          className="img"
          src={
            originalImage.src
              ? getAbsoluteImageSrc(originalImage.src)
              : imagePlaceholderSrc(
                  imagesCarouselThumbnailSelector.targetDimensions
                )
          }
          style={{
            maxHeight: imagesCarouselThumbnailSelector.targetDimensions.height,
            maxWidth: imagesCarouselThumbnailSelector.targetDimensions.width,
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
              src: getAbsoluteImageSrc(thumbnail.src),
              style: {
                maxHeight:
                  imagesCarouselThumbnailSelector.targetDimensions.height,
                maxWidth:
                  imagesCarouselThumbnailSelector.targetDimensions.width,
              },
            }}
            zoomImage={{
              className: "img--zoomed",
              src: getAbsoluteImageSrc(originalImage.src),
              style: originalImage?.exactDimensions ?? undefined,
            }}
          />
        </div>
        {!hideImageRights && originalImage?.requiresAttribution ? (
          <div className="mt-2">
            <RightsParagraph
              material="Image"
              rights={originalImage}
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
          <CarouselItem key={originalImage.key}>
            {renderedOriginalImage}
          </CarouselItem>
        );
      })}
      <FontAwesomeCarouselControl
        className="text-primary"
        direction="prev"
        directionText="Previous"
        onClickHandler={onClickPrevious}
      />
      <FontAwesomeCarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={onClickNext}
      />
    </Carousel>
  );
};
