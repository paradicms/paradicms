import * as React from "react";
import ImageZoom from "react-medium-image-zoom";
import Carousel from "react-material-ui-carousel";
import {ImageDimensions, JoinedObject} from "@paradicms/models";
import {Accordion, AccordionDetails, AccordionSummary, Grid} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {RightsTable} from "./RightsTable";

export const ObjectImagesCarousel: React.FunctionComponent<{
  object: JoinedObject
}> = ({object}) => {
  const objectOriginalImages = object.originalImages;

  return (
    <Carousel autoPlay={false}>
      {objectOriginalImages.map(originalImage => {
        const originalImageSrc = originalImage.src;
        if (!originalImageSrc) {
          return null;
        }
        const thumbnailTargetDimensions: ImageDimensions = {height: 600, width: 600};
        const thumbnail = originalImage.thumbnail({
          targetDimensions: thumbnailTargetDimensions,
        });
        const thumbnailSrc = thumbnail?.src;

        console.info("Original image src:", originalImageSrc);
        console.info("Thumbnail src:", thumbnailSrc);

        return (
          <Grid
            container
            alignContent="center"
            justify="center"
            key={originalImage.uri}
          >
            <Grid item>
              {thumbnailSrc ?
                <ImageZoom
                  image={{
                    className: "img",
                    src: thumbnailSrc,
                    style: {
                      maxHeight: thumbnailTargetDimensions.height,
                      maxWidth: thumbnailTargetDimensions.width,
                    },
                  }}
                  zoomImage={{
                    className: "img--zoomed",
                    src: originalImageSrc,
                    style: originalImage?.exactDimensions ?? undefined,
                  }}
                />
                : <img className="img" src={originalImageSrc} style={{
                  maxHeight: thumbnailTargetDimensions.height,
                  maxWidth: thumbnailTargetDimensions.width,
                }} />}
              {originalImage && originalImage.rights ? (
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    Image rights
                  </AccordionSummary>
                  <AccordionDetails>
                    <RightsTable rights={originalImage.rights} />
                  </AccordionDetails>
                </Accordion>
              ) : null}
            </Grid>
          </Grid>
        );
      })}
    </Carousel>
  );
};
