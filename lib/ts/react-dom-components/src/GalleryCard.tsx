import {Image, imagePlaceholderSrc} from "@paradicms/models";
import * as React from "react";
import {Card, CardBody, CardText, CardTitle} from "reactstrap";
import {RightsParagraph} from "./RightsParagraph";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";

const RIGHTS_STYLE: React.CSSProperties = {
  fontSize: "xx-small",
  marginBottom: 0,
  marginTop: 0,
};

// @ts-ignore
export const GalleryCard: React.FunctionComponent<{
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  renderLink?: (children: React.ReactNode) => React.ReactElement;
  thumbnail: Image | null;
  subtitle?: React.ReactElement | string | null;
  title: string;
}> = ({
  getAbsoluteImageSrc,
  renderLink: renderLinkProp,
  subtitle,
  thumbnail,
  title,
}) => {
  const renderLink =
    renderLinkProp ?? ((children: React.ReactNode) => <>{children}</>);

  return (
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
        {renderLink(
          <img
            src={
              thumbnail?.src
                ? getAbsoluteImageSrc(thumbnail.src)
                : imagePlaceholderSrc(galleryThumbnailSelector.targetDimensions)
            }
            style={{
              alignSelf: "center",
              maxHeight: galleryThumbnailSelector.targetDimensions.height,
              maxWidth: galleryThumbnailSelector.targetDimensions.width,
            }}
          />
        )}
      </div>
      <CardBody className="text-center">
        <CardTitle className="mb-1" tag="h5">
          {renderLink(title)}
        </CardTitle>
        {subtitle || (thumbnail && thumbnail.requiresAttribution) ? (
          <CardText tag="div">
            {subtitle ? (
              <div className="mb-1" style={{fontSize: "small"}}>
                {subtitle}
              </div>
            ) : null}
            {thumbnail && thumbnail.requiresAttribution ? (
              <RightsParagraph
                tag="div"
                material="Image"
                rights={thumbnail}
                style={RIGHTS_STYLE}
              />
            ) : null}
          </CardText>
        ) : null}
      </CardBody>
    </Card>
  );
};
