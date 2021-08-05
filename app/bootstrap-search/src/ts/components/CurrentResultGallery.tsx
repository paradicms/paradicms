import {CurrentResultStore} from "~/stores/CurrentResultStore";
import {Card, CardHeader, CardImg, Container, Row} from "reactstrap";
import React from "react";

export const CurrentResultGallery: React.FunctionComponent = () => {
  const objects = CurrentResultStore.useState(
    (state) => state.currentResult.objects
  );

  return (
    <Container fluid>
      <Row>
        {objects.map((object) => (
          <div
            className="text-center"
            style={{marginBottom: "20px", marginLeft: "20px", width: "400px"}}
          >
            <Card>
              <CardHeader tag="h4">
                <a href={object.url}>{object.title}</a>
              </CardHeader>
              <a href={object.url}>
                <CardImg
                  src={object.thumbnailUrl ?? "https://place-hold.it/200x200"}
                  style={{
                    height: "200px",
                    marginBottom: "20px",
                    marginTop: "20px",
                    width: "200px",
                  }}
                  title={object.title}
                />
              </a>
            </Card>
          </div>
        ))}
      </Row>
    </Container>
  );
};
