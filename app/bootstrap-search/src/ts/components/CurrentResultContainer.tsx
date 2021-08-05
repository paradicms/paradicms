import * as React from "react";
import {useState} from "react";
import {Button, ButtonGroup, Col, Container, Row} from "reactstrap";
import {CurrentResultPagination} from "~/components/CurrentResultPagination";
import {CurrentResultGallery} from "~/components/CurrentResultGallery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CurrentResultList} from "~/components/CurrentResultList";

export const CurrentResultContainer: React.FunctionComponent = () => {
  const [view, setView] = useState<"gallery" | "list">("gallery");

  return (
    <Container fluid>
      <Row>
        <Col className="left" xs={8}>
          <h3>Objects</h3>
        </Col>
        <Col xs={4}>
          <ButtonGroup size="lg">
            <Button
              color={view === "gallery" ? "primary" : undefined}
              onClick={() => setView("gallery")}
              title="gallery view"
            >
              <FontAwesomeIcon icon={["fas", "images"]} />
            </Button>
            <Button
              color={view === "list" ? "primary" : undefined}
              onClick={() => setView("list")}
              title="list view"
            >
              <FontAwesomeIcon icon={["fas", "list"]} />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs={12}>
          {view === "gallery" ? <CurrentResultGallery /> : null}
          {view === "list" ? <CurrentResultList /> : null}
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="d-flex justify-content-center" xs={12}>
          <CurrentResultPagination />
        </Col>
      </Row>
    </Container>
  );
};
