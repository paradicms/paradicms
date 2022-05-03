import * as React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import {Image, Text} from "@paradicms/models";
import {useEffect, useState} from "react";
import {thumbnailTargetDimensions} from "@paradicms/bootstrap";
import classnames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {useLocation} from "react-router";

interface Item {
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
  const location = useLocation();
  // Reset the detail whenever the location changes
  useEffect(() => setDetailItem(null), [location]);

  return (
    <Container fluid>
      <Row>
        <Col xs={detailItem ? 8 : 12}>
          <ItemsGallery items={items} setDetailItem={setDetailItem} />
        </Col>
        {detailItem ? (
          <Col xs={4}>
            <ItemDetail item={detailItem} />
          </Col>
        ) : null}
      </Row>
    </Container>
  );
};

const ItemDetail: React.FunctionComponent<{item: Item}> = ({item}) => {
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
