import * as React from "react";
import ImageZoom from "react-medium-image-zoom";
import {Image, Images} from "@paradicms/models";
import {RightsTable} from "./RightsTable";
import {useState} from "react";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import {Accordion} from "components/Accordion";

export const ObjectImagesCarousel: React.FunctionComponent<{
  images: readonly Image[];
}> = ({images}) => {
  const imagesByOriginalImageUri = Images.indexByOriginalImageUri(images);

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

  const goToIndex = (newIndex: number) => {
    // if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <Carousel
      activeIndex={activeIndex}
      autoPlay={false}
      next={next}
      previous={previous}
      slide={false}
    >
      <CarouselIndicators
        activeIndex={activeIndex}
        items={items}
        onClickHandler={goToIndex}
      />
      {Object.keys(imagesByOriginalImageUri).map(originalImageUri => {
        const images = imagesByOriginalImageUri[originalImageUri];
        const originalImage = images.find(
          image => image.uri === originalImageUri
        );
        const thumbnail = Images.selectThumbnail({
          images,
          targetDimensions: {height: 600, width: 600},
        });
        return (
          <CarouselItem key={originalImageUri}>
            <ImageZoom
              image={{
                className: "img",
                src: thumbnail
                  ? thumbnail.uri
                  : Images.placeholderUrl({
                      dimensions: {height: 600, width: 600},
                      text: "Missing thumbnail",
                    }),
                style: {
                  maxHeight: 600,
                  maxWidth: 600,
                },
              }}
              zoomImage={{
                className: "img--zoomed",
                src: originalImageUri,
                style: originalImage?.exactDimensions ?? undefined,
              }}
            />
            {originalImage && originalImage.rights ? (
              <Accordion title="Image rights">
                <RightsTable rights={originalImage.rights} />
              </Accordion>
            ) : null}
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
