import * as React from "react";
import {Col, Container, Row} from "reactstrap";

export const Gallery: React.FunctionComponent<{
  cards: readonly {
    element: React.ReactElement;
    key: string;
  }[];
  sortDropdown?: React.ReactElement;
}> = ({cards, sortDropdown}) => {
  const cardsRow = (
    <>
      {cards.map(card => (
        <div
          key={card.key}
          style={{
            marginLeft: "20px",
            marginBottom: "20px",
            width: "400px",
          }}
        >
          {card.element}
        </div>
      ))}
    </>
  );

  if (!sortDropdown) {
    return cardsRow;
  }

  return (
    <Container fluid>
      <Row className="mb-2">
        <Col className="d-flex justify-content-end">
          <div>Sort dropdown</div>
        </Col>
      </Row>
      <Row>
        <>
          {cards.map(card => (
            <div
              key={card.key}
              style={{
                marginLeft: "20px",
                marginBottom: "20px",
                width: "400px",
              }}
            >
              {card.element}
            </div>
          ))}
        </>
      </Row>
    </Container>
  );
};
