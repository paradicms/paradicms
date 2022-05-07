import * as React from "react";
import {useCallback, useEffect, useState} from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Carousel,
  CarouselControl,
  CarouselItem,
  Col,
  Container,
  Row,
  Table,
} from "reactstrap";
import {Image, selectThumbnail, Text} from "@paradicms/models";
import {RightsParagraph, thumbnailTargetDimensions} from "@paradicms/bootstrap";
import classnames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle, faTimes} from "@fortawesome/free-solid-svg-icons";
import {useLocation} from "react-router";
import {WorksheetMode} from "~/models/WorksheetMode";
import ImageZoom from "react-medium-image-zoom";

interface Item {
  altLabels: string[] | null;
  description: string | Text | null;
  images: readonly Image[];
  onToggleSelected: () => void | null;
  selected: boolean | null;
  title: string;
}

export const MasterDetailContainer: React.FunctionComponent<{
  mode: WorksheetMode | null;
  items: readonly Item[];
}> = ({items, mode}) => {
  const [detailItem, setDetailItem] = useState<Item | null>(null);
  const location = useLocation();
  // Reset the detail whenever the location changes
  useEffect(() => setDetailItem(null), [location]);

  return (
    <div className="d-flex mt-2">
      <div className="flex-grow-1">
        {mode === WorksheetMode.BEGINNER ? (
          <ItemsGallery items={items} setDetailItem={setDetailItem} />
        ) : null}
        {mode !== WorksheetMode.BEGINNER ? (
          <ItemsTable items={items} setDetailItem={setDetailItem} />
        ) : null}
      </div>
      {detailItem ? (
        <div
          className="ms-2"
          style={{
            maxWidth: thumbnailTargetDimensions.width + 100,
          }}
        >
          <ItemDetailCard
            item={detailItem}
            onClose={() => setDetailItem(null)}
          />
        </div>
      ) : null}
    </div>
  );
};

const ItemDetailCard: React.FunctionComponent<{
  item: Item;
  onClose: () => void;
}> = ({item, onClose}) => {
  const rows: React.ReactElement[] = [];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const originalImages = item.images.filter((image) => image.isOriginal);

  const onClickNextImage = useCallback(() => {
    // if (animating) return;
    const nextIndex =
      activeImageIndex === originalImages.length - 1 ? 0 : activeImageIndex + 1;
    setActiveImageIndex(nextIndex);
  }, [activeImageIndex]);

  const onClickPreviousImage = useCallback(() => {
    // if (animating) return;
    const nextIndex =
      activeImageIndex === 0 ? originalImages.length - 1 : activeImageIndex - 1;
    setActiveImageIndex(nextIndex);
  }, [activeImageIndex]);

  if (originalImages.length > 0) {
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
          {originalImage.rights ? (
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

    rows.push(
      <Row key={"row" + rows.length.toString()}>
        <Col className="text-center" xs={12}>
          <Carousel
            activeIndex={activeImageIndex}
            autoPlay={false}
            next={onClickNextImage}
            previous={onClickPreviousImage}
            slide={false}
          >
            {/*<CarouselIndicators*/}
            {/*  activeIndex={activeIndex}*/}
            {/*  items={items}*/}
            {/*  onClickHandler={goToIndex}*/}
            {/*/>*/}
            {originalImages.map((originalImage) => {
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
              onClickHandler={onClickPreviousImage}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={onClickNextImage}
            />
          </Carousel>
        </Col>
      </Row>
    );
  }

  if (item.description) {
    rows.push(
      <Row key={"row" + rows.length.toString()}>
        <Col className="text-center" xs={12}>
          <p>{item.description.toString()}</p>
          {item.description instanceof Text && item.description.rights ? (
            <RightsParagraph
              material="Text"
              rights={item.description.rights}
              style={{fontSize: "xx-small"}}
            />
          ) : null}
        </Col>
      </Row>
    );
  }

  if (item.altLabels && item.altLabels.length > 0) {
    rows.push(
      <Row key={"row" + rows.length.toString()}>
        <Col xs={12}>
          <h5 className="text-center">Variant terms</h5>
          <ul>
            {item.altLabels!.map((altLabel, altLabelI) => (
              <li key={altLabelI}>{altLabel}</li>
            ))}
          </ul>
        </Col>
      </Row>
    );
  }

  return (
    <Card>
      <CardHeader className="d-flex">
        <div
          className="align-items-center flex-grow-1 text-center"
          style={{fontSize: "x-large"}}
        >
          {item.title}
        </div>
        <div className="align-items-center">
          <Button color="link" onClick={onClose}>
            <FontAwesomeIcon
              icon={faTimes}
              style={{height: "32px", width: "32px"}}
            />
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        <Container fluid>
          {rows.map((row, rowI) => (
            <>
              {rowI > 0 ? <hr key={"hr" + rowI} /> : null}
              {row}
            </>
          ))}
        </Container>
      </CardBody>
    </Card>
  );
  return <div>{item.title}</div>;
};

const ItemsGallery: React.FunctionComponent<{
  items: readonly Item[];
  setDetailItem: (item: Item) => void;
}> = ({items, setDetailItem}) => (
  <Container fluid>
    <Row>
      {items.map((item, itemI) => {
        const {onToggleSelected, images, selected, title} = item;

        let thumbnail: Image | null = selectThumbnail(images, {
          targetDimensions: thumbnailTargetDimensions,
        });
        let thumbnailSrc: string;
        if (thumbnail) {
          thumbnailSrc = thumbnail.src ?? thumbnail.uri;
        } else {
          thumbnailSrc = Image.placeholderSrc(thumbnailTargetDimensions);
        }

        return (
          <Card
            className={classnames({
              "border-info": selected,
              "mb-4": true,
              "me-4": true,
            })}
            key={itemI}
            style={{borderWidth: "8px", width: "240px"}}
          >
            <CardHeader className="px-0 mt-2 text-center w-100">
              <Button
                active={!!selected}
                color="primary"
                onClick={onToggleSelected}
                style={{cursor: "pointer", textDecoration: "none"}}
              >
                {title}
              </Button>
            </CardHeader>
            <CardBody
              className="pb-0 px-0 text-center w-100"
              style={{cursor: "pointer"}}
            >
              <a onClick={onToggleSelected}>
                <img
                  className="figure-img rounded"
                  src={thumbnailSrc}
                  style={{
                    height: thumbnailTargetDimensions.height,
                    width: thumbnailTargetDimensions.width,
                  }}
                />
              </a>
              <div className="mb-2">
                <a onClick={() => setDetailItem(item)}>
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    style={{height: "16px", width: "16px"}}
                  />
                </a>
              </div>
            </CardBody>
          </Card>
        );
      })}
    </Row>
  </Container>
);

const ItemsTable: React.FunctionComponent<{
  items: readonly Item[];
  setDetailItem: (item: Item) => void;
}> = ({items, setDetailItem}) => {
  const chunks: Item[][] = [];
  let chunk: Item[] = [];
  for (const item of items) {
    chunk.push(item);
    if (chunk.length === 4) {
      chunks.push(chunk);
      chunk = [];
    }
  }
  if (chunk.length > 0) {
    chunks.push(chunk);
  }

  return (
    <Container fluid>
      <Row className="justify-content-center">
        {chunks.map((items) => (
          <Table className="d-inline-block" style={{maxWidth: "24rem"}}>
            <tbody>
              {items.map((item, itemI) => {
                const {onToggleSelected, selected, title} = item;

                return (
                  <>
                    {/*{itemI > 0 ? (*/}
                    {/*  <tr>*/}
                    {/*    <td colSpan={2}>&nbsp;</td>*/}
                    {/*  </tr>*/}
                    {/*) : null}*/}
                    <tr
                      className={classnames({
                        "border-secondary": selected,
                      })}
                      style={{
                        borderWidth: selected ? "2px" : undefined,
                      }}
                    >
                      <td
                        className="text-center"
                        style={{
                          width: "95%",
                        }}
                      >
                        <Button
                          active={!!selected}
                          color="primary"
                          onClick={onToggleSelected}
                          style={{
                            cursor: "pointer",
                            textDecoration: "none",
                            width: "90%",
                          }}
                        >
                          {title}
                        </Button>
                      </td>
                      <td className="text-center align-middle">
                        <a onClick={() => setDetailItem(item)}>
                          <FontAwesomeIcon
                            icon={faInfoCircle}
                            style={{height: "32px", width: "32px"}}
                          />
                        </a>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        ))}
      </Row>
    </Container>
  );
};
