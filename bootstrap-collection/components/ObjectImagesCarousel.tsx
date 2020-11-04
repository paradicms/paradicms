import * as React from "react";
import {useState} from "react";
import ImageZoom from "react-medium-image-zoom";
import {Image, Images} from "@paradicms/models";
import {RightsTable} from "./RightsTable";
import {
  Carousel,
  CarouselControl,
  CarouselItem,
  Col,
  Container,
  Row,
} from "reactstrap";

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
          image => image.uri === originalImageUri
        );
        const thumbnail = Images.selectThumbnail({
          images,
          targetDimensions: {height: 600, width: 600},
        });
        return (
          <CarouselItem key={originalImageUri}>
            <Container fluid>
              <Row>
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
              </Row>
              {originalImage && originalImage.rights ? (
                <Row className="mt-2">
                  <Col xs={12}>
                    <h6 className="text-center">Image rights</h6>
                    <RightsTable rights={originalImage.rights} />
                  </Col>
                </Row>
              ) : null}
            </Container>
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
