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
import {Image, Text} from "@paradicms/models";
import {RightsParagraph, thumbnailTargetDimensions} from "@paradicms/bootstrap";
import classnames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle, faTimes} from "@fortawesome/free-solid-svg-icons";
import {useLocation} from "react-router";
import {WorksheetMode} from "~/models/WorksheetMode";

interface Item {
  altLabels: string[] | null;
  description: string | Text | null;
  onToggleSelected: () => void | null;
  selected: boolean | null;
  thumbnail: Image | null;
  title: string;
}

const thumbnailSrc = (thumbnail: Image | null) => {
  if (thumbnail) {
    return thumbnail.src ?? thumbnail.uri;
  } else {
    return Image.placeholderSrc(thumbnailTargetDimensions);
  }
};

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

  if (item.thumbnail) {
    rows.push(
      <Row key={"row" + rows.length.toString()}>
        <Col className="text-center" xs={12}>
          <figure className="figure mb-0">
            <img
              src={item.thumbnail.src ?? item.thumbnail.uri}
              className="figure-img img-fluid rounded"
              alt={item.title}
            />
            {item.thumbnail.rights ? (
              <figcaption>
                <RightsParagraph
                  material="Image"
                  rights={item.thumbnail.rights}
                  style={{fontSize: "xx-small"}}
                />
              </figcaption>
            ) : null}
          </figure>
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
        const {onToggleSelected, selected, thumbnail, title} = item;

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
                  src={thumbnailSrc(thumbnail)}
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
}> = ({items, setDetailItem}) => (
  <Table>
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
);
