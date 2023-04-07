import {Image} from "@paradicms/models";
import {galleryThumbnailTargetDimensions} from "./galleryThumbnailTargetDimensions";
import {RightsParagraph} from "./RightsParagraph";
import * as React from "react";
import {Card, CardBody, CardFooter} from "reactstrap";

const RIGHTS_STYLE: React.CSSProperties = {
  fontSize: "xx-small",
  marginBottom: 0,
};

// @ts-ignore
export const GalleryCard: React.FunctionComponent<{
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  thumbnail: Image | null;
  title: string;
}> = ({getAbsoluteImageSrc, thumbnail, title}) => (
  <Card className="border-0 text-center">
    <CardBody>
      <img
        src={
          thumbnail?.src
            ? getAbsoluteImageSrc(thumbnail.src)
            : Image.placeholderSrc(galleryThumbnailTargetDimensions)
        }
        style={{
          maxHeight: galleryThumbnailTargetDimensions.height,
          maxWidth: galleryThumbnailTargetDimensions.width,
        }}
        title={title}
      />
    </CardBody>
    {thumbnail && thumbnail.rights?.requiresAttribution ? (
      <CardFooter>
        <RightsParagraph
          material="Image"
          rights={thumbnail.rights}
          style={RIGHTS_STYLE}
        />
      </CardFooter>
    ) : null}
  </Card>
);
