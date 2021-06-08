import * as React from "react";
import ImageZoom from "react-medium-image-zoom";
import Carousel from "react-material-ui-carousel";
import {ImageDimensions, JoinedImage} from "@paradicms/models";
import {Accordion, AccordionDetails, AccordionSummary, Grid} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {RightsTable} from "./RightsTable";
import {getImageSrc, indexImagesByOriginalImageUri, selectThumbnail} from "@paradicms/model-utils";

export const ObjectImagesCarousel: React.FunctionComponent<{
  images: readonly JoinedImage[];
}> = ({images}) => {
  const imagesByOriginalImageUri = indexImagesByOriginalImageUri(images);
  return (
    <Carousel autoPlay={false}>
      {Object.keys(imagesByOriginalImageUri).map(originalImageUri => {
        const images = imagesByOriginalImageUri[originalImageUri];
        const originalImage = images.find(
          image => image.uri === originalImageUri,
        );
        const thumbnailTargetDimensions: ImageDimensions = {height: 600, width: 600};
        const thumbnail = selectThumbnail({
          images,
          targetDimensions: thumbnailTargetDimensions,
        });
        return (
          <Grid
            container
            alignContent="center"
            justify="center"
            key={originalImageUri}
          >
            <Grid item>
              <ImageZoom
                image={{
                  className: "img",
                  src: getImageSrc({image: thumbnail, targetDimensions: thumbnailTargetDimensions}),
                  style: {
                    maxHeight: 600,
                    maxWidth: 600,
                  },
                }}
                zoomImage={{
                  className: "img--zoomed",
                  src: getImageSrc({image: originalImage, targetDimensions: thumbnailTargetDimensions}) ?? undefined,
                  style: originalImage?.exactDimensions ?? undefined,
                }}
              />
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
