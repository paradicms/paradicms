import * as React from "react";
import {Col, Container, Row} from "reactstrap";
import ImageZoom from "react-medium-image-zoom";
import {RightsTable} from "RightsTable";
import {ImageDimensions, JoinedImage} from "@paradicms/models";
import {getImageSrc} from "@paradicms/model-utils";

export const ObjectImageCard: React.FunctionComponent<{
  originalImage: JoinedImage;
  thumbnail: JoinedImage | null;
  thumbnailTargetDimensions: ImageDimensions;
}> = ({originalImage, thumbnail, thumbnailTargetDimensions}) => {
  return (
    <Container fluid>
      <Row>
        <ImageZoom
          image={{
            className: "img",
            src: getImageSrc({image: thumbnail, targetDimensions: thumbnailTargetDimensions}),
            style: {
              maxHeight: thumbnailTargetDimensions.height,
              maxWidth: thumbnailTargetDimensions.width,
            },
          }}
          zoomImage={{
            className: "img--zoomed",
            src: getImageSrc({image: originalImage, targetDimensions: thumbnailTargetDimensions}),
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
  );
};
