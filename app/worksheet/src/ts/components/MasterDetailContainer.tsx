import * as React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import {Image, Text} from "@paradicms/models";
import {useEffect, useState} from "react";
import {RightsParagraph, thumbnailTargetDimensions} from "@paradicms/bootstrap";
import classnames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {useLocation} from "react-router";
import {faImages, faTable, faTimes} from "@fortawesome/free-solid-svg-icons";
import {useQueryParam} from "use-query-params";
import {WorksheetView} from "~/models/WorksheetView";
import {useRouteWorksheetMark} from "~/hooks/useRouteWorksheetMark";

interface Item {
  altLabels: string[] | null;
  description: string | Text | null;
  onToggleSelected: () => void | null;
  selected: boolean | null;
  thumbnail: Image | null;
  title: string;
}

export const MasterDetailContainer: React.FunctionComponent<{
  items: readonly Item[];
}> = ({items}) => {
  const [detailItem, setDetailItem] = useState<Item | null>(null);
  const [showDetailItem, setShowDetailItem] = useState<boolean>(true);
  const location = useLocation();
  // Reset the detail whenever the location changes
  useEffect(() => setDetailItem(null), [location]);
  useEffect(() => setShowDetailItem(true), [detailItem]);
  const [_, setView] = useQueryParam<string>("view");
  const view = useRouteWorksheetMark().view ?? WorksheetView.GALLERY;

  return (
    <>
      <div className="d-flex">
        <div style={{flexGrow: 1}} />
        <div style={{flexGrow: 0}}>
          <ButtonGroup>
            <Button
              active={view === WorksheetView.GALLERY}
              onClick={() => setView(WorksheetView.GALLERY)}
              title="Gallery view"
            >
              <FontAwesomeIcon icon={faImages} />
            </Button>
            <Button
              active={view === WorksheetView.TABLE}
              onClick={() => setView(WorksheetView.TABLE)}
              title="Table view"
            >
              <FontAwesomeIcon icon={faTable} />
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="d-flex mt-2">
        <div style={{flexGrow: 1}}>
          {view === WorksheetView.GALLERY ? (
            <ItemsGallery items={items} setDetailItem={setDetailItem} />
          ) : null}
        </div>
        {detailItem && showDetailItem ? (
          <div
            style={{
              flexGrow: 0,
              maxWidth: thumbnailTargetDimensions.width + 100,
            }}
          >
            <ItemDetailCard
              item={detailItem}
              onClose={() => setShowDetailItem(false)}
            />
          </div>
        ) : null}
      </div>
    </>
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
          className="text-center"
          style={{alignItems: "center", fontSize: "x-large", flexGrow: 1}}
        >
          {item.title}
        </div>
        <div style={{alignItems: "center", flexGrow: 0}}>
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

// {thumbnail && thumbnail.rights ? (
//   <figcaption
//     className="figure-caption"
//     style={{fontSize: "xx-small"}}
//   >
//     <RightsParagraph
//       material="Image"
//       rights={thumbnail.rights}
//     />
//   </figcaption>
// ) : null}

const ItemsGallery: React.FunctionComponent<{
  items: readonly Item[];
  setDetailItem: (item: Item) => void;
}> = ({items, setDetailItem}) => (
  <Container fluid>
    <Row>
      {items.map((item, itemI) => {
        const {onToggleSelected, selected, thumbnail, title} = item;

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
