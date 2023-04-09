import {Image} from "@paradicms/models";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";
import {RightsParagraph} from "./RightsParagraph";
import * as React from "react";
import {Card, CardBody, CardText, CardTitle} from "reactstrap";

const RIGHTS_STYLE: React.CSSProperties = {
  fontSize: "xx-small",
  marginBottom: 0,
  marginTop: 0,
};

// @ts-ignore
export const GalleryCard: React.FunctionComponent<{
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  thumbnail: Image | null;
  subtitle?: React.ReactElement | string | null;
  title: React.ReactElement | string;
}> = ({getAbsoluteImageSrc, thumbnail, subtitle, title}) => (
  <Card
    className="border-0"
    style={{
      maxWidth: galleryThumbnailSelector.targetDimensions.width,
    }}
  >
    <div
      className="d-flex justify-content-center"
      style={{
        minHeight: galleryThumbnailSelector.targetDimensions.height,
      }}
    >
      <img
        src={
          thumbnail?.src
            ? getAbsoluteImageSrc(thumbnail.src)
            : Image.placeholderSrc(galleryThumbnailSelector.targetDimensions)
        }
        style={{
          alignSelf: "center",
          maxHeight: galleryThumbnailSelector.targetDimensions.height,
          maxWidth: galleryThumbnailSelector.targetDimensions.width,
        }}
      />
    </div>
    <CardBody className="text-center">
      <CardTitle className="mb-1" tag="h5">
        {title}
      </CardTitle>
      {subtitle || (thumbnail && thumbnail.rights?.requiresAttribution) ? (
        <CardText>
          {subtitle ? (
            <p className="mb-1" style={{fontSize: "small"}}>
              {subtitle}
            </p>
          ) : null}
          {thumbnail && thumbnail.rights?.requiresAttribution ? (
            <RightsParagraph
              material="Image"
              rights={thumbnail.rights}
              style={RIGHTS_STYLE}
            />
          ) : null}
        </CardText>
      ) : null}
    </CardBody>
  </Card>
);
