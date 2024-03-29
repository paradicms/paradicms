import {faInfoCircle, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Image, Text, imagePlaceholderSrc} from "@paradicms/models";
import {getAbsoluteImageSrc} from "@paradicms/next";
import {
  ImagesCarousel,
  RightsParagraph,
  galleryThumbnailSelector,
  imagesCarouselThumbnailSelector,
} from "@paradicms/react-dom-components";
import {Literal} from "@rdfjs/types";
import classnames from "classnames";
import ISO6391 from "iso-639-1";
import {useRouter} from "next/router";
import * as React from "react";
import {useEffect, useState} from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Table,
} from "reactstrap";
import {WorksheetMode} from "~/models/WorksheetMode";

interface Item {
  altLabels: readonly Literal[] | null;
  description: Text | null;
  images: readonly Image[];
  label: string;
  onToggleSelected: () => void | null;
  selected: boolean | null;
}

export const MasterDetailContainer: React.FunctionComponent<{
  mode: WorksheetMode | null;
  items: readonly Item[];
}> = ({items, mode}) => {
  const [detailItem, setDetailItem] = useState<Item | null>(null);
  const router = useRouter();
  // Reset the detail whenever the location changes
  useEffect(() => setDetailItem(null), [router]);

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
            maxWidth:
              imagesCarouselThumbnailSelector.targetDimensions.width + 100,
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
  const router = useRouter();

  if (item.images.length > 0) {
    rows.push(
      <Row key={"row" + rows.length.toString()}>
        <Col className="p-0 text-center" xs={12}>
          <ImagesCarousel
            getAbsoluteImageSrc={relativeImageSrc =>
              getAbsoluteImageSrc(relativeImageSrc, router)
            }
            originalImages={item.images}
          />
        </Col>
      </Row>
    );
  }

  if (item.description) {
    rows.push(
      <Row key={"row" + rows.length.toString()}>
        <Col className="p-0 text-center" xs={12}>
          <p>{item.description.value}</p>
          {item.description?.requiresAttribution ? (
            <RightsParagraph
              material="Text"
              rights={item.description}
              style={{fontSize: "xx-small"}}
            />
          ) : null}
        </Col>
      </Row>
    );
  }

  if (item.altLabels && item.altLabels.length > 0) {
    const altLabelsByLanguageCode: {[index: string]: string[]} = {};
    for (const altLabel of item.altLabels) {
      let languageCodeAltLabels = altLabelsByLanguageCode[altLabel.language];
      if (!languageCodeAltLabels) {
        languageCodeAltLabels = altLabelsByLanguageCode[altLabel.language] = [];
      }
      languageCodeAltLabels.push(altLabel.value);
    }

    let altLabelLanguageCodes = Object.keys(altLabelsByLanguageCode).sort();
    if (altLabelLanguageCodes.some(languageCode => languageCode === "en")) {
      altLabelLanguageCodes = ["en"].concat(
        altLabelLanguageCodes.filter(languageCode => languageCode !== "en")
      );
    }

    rows.push(
      <Row key={"row" + rows.length.toString()}>
        <Col className="p-0" xs={12}>
          <h5 className="text-center">Variant terms</h5>
          <ul>
            {altLabelLanguageCodes.map(languageCode => (
              <li key={languageCode}>
                {ISO6391.getName(languageCode)}
                {ISO6391.getNativeName(languageCode) !==
                ISO6391.getName(languageCode) ? (
                  <>
                    &nbsp;/&nbsp;
                    {ISO6391.getNativeName(languageCode)}
                  </>
                ) : null}
                <ul>
                  {altLabelsByLanguageCode[languageCode]
                    .sort()
                    .map((altLabel, altLabelI) => (
                      <li key={altLabelI}>{altLabel}</li>
                    ))}
                </ul>
              </li>
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
          {item.label}
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
};

const ItemsGallery: React.FunctionComponent<{
  items: readonly Item[];
  setDetailItem: (item: Item) => void;
}> = ({items, setDetailItem}) => {
  const router = useRouter();
  return (
    <Container fluid>
      <Row>
        {items.map((item, itemI) => {
          const {onToggleSelected, images, selected, label} = item;

          let thumbnailSrc: string = imagePlaceholderSrc(
            galleryThumbnailSelector.targetDimensions
          );
          for (const image of images) {
            const thumbnail = image.thumbnail(galleryThumbnailSelector);
            if (thumbnail) {
              thumbnailSrc = getAbsoluteImageSrc(
                thumbnail.src ?? thumbnail.iri.value,
                router
              );
              break;
            }
          }

          return (
            <Card
              className={classnames({
                "border-info": selected,
                "mb-4": true,
                "me-4": true,
              })}
              key={itemI}
              style={{
                borderWidth: "8px",
                maxWidth: galleryThumbnailSelector.targetDimensions.width + 40,
                minHeight: galleryThumbnailSelector.targetDimensions.height,
              }}
            >
              <CardHeader className="px-0 mt-2 text-center w-100">
                <Button
                  active={!!selected}
                  className="w-50"
                  color="primary"
                  onClick={onToggleSelected}
                  style={{cursor: "pointer", textDecoration: "none"}}
                >
                  {label}
                </Button>
              </CardHeader>
              <CardBody className="pb-0 px-0 text-center w-100">
                <div className="d-flex flex-column h-100 justify-content-center">
                  <a onClick={onToggleSelected}>
                    <img
                      className="rounded"
                      src={thumbnailSrc}
                      style={{
                        cursor: "pointer",
                        maxHeight:
                          galleryThumbnailSelector.targetDimensions.height,
                        maxWidth:
                          galleryThumbnailSelector.targetDimensions.width,
                      }}
                    />
                  </a>
                  <div className="mb-2">
                    <a
                      onClick={() => setDetailItem(item)}
                      style={{cursor: "pointer"}}
                    >
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        style={{height: "16px", width: "16px"}}
                      />
                    </a>
                  </div>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

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
        {chunks.map((items, chunkI) => (
          <Table
            className="d-inline-block"
            key={chunkI}
            style={{maxWidth: "24rem"}}
          >
            <tbody>
              {items.map((item, itemI) => {
                const {onToggleSelected, selected, label} = item;

                return (
                  <tr
                    className={classnames({
                      "border-secondary": selected,
                    })}
                    key={itemI}
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
                        {label}
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
                );
              })}
            </tbody>
          </Table>
        ))}
      </Row>
    </Container>
  );
};
