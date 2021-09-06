import * as React from "react";
import {useState} from "react";
import {Image, ImageDimensions, Work} from "@paradicms/models";
import {Carousel, CarouselControl, CarouselItem} from "reactstrap";
import ImageZoom from "react-medium-image-zoom";
import {RightsTable} from "./RightsTable";

const thumbnailTargetDimensions: ImageDimensions = {height: 600, width: 600};

export const WorkImagesCarousel: React.FunctionComponent<{
  work: Work;
}> = ({work}) => {
  const workOriginalImages = work.originalImages;

  const renderWorkOriginalImage = (originalImage: Image) => {
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
        {originalImage && originalImage.rights ? (
          <div className="mt-2">
            <h6 className="text-center">Image rights</h6>
            <RightsTable rights={originalImage.rights} />
          </div>
        ) : null}
      </div>
    );
  };

  if (workOriginalImages.length === 1) {
    return renderWorkOriginalImage(workOriginalImages[0]);
  }

  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    // if (animating) return;
    const nextIndex =
      activeIndex === workOriginalImages.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    // if (animating) return;
    const nextIndex =
      activeIndex === 0 ? workOriginalImages.length - 1 : activeIndex - 1;
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
      {workOriginalImages.map(originalImage => {
        const renderedOriginalImage = renderWorkOriginalImage(originalImage);
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
