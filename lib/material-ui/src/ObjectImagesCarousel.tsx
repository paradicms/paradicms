import * as React from "react";
import ImageZoom from "react-medium-image-zoom";
import Carousel from "react-material-ui-carousel";
import {JoinedImage} from "@paradicms/models";
import {AccordionSummary, AccordionDetails, Grid} from "@material-ui/core";
import {Accordion} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {RightsTable} from "./RightsTable";
import {
  indexImagesByOriginalImageUri,
  placeholderImageUrl,
  selectThumbnail,
} from "@paradicms/model-utils";

export const ObjectImagesCarousel: React.FunctionComponent<{
  images: readonly JoinedImage[];
}> = ({images}) => {
  const imagesByOriginalImageUri = indexImagesByOriginalImageUri(images);
  return (
    <Carousel autoPlay={false}>
      {Object.keys(imagesByOriginalImageUri).map(originalImageUri => {
        const images = imagesByOriginalImageUri[originalImageUri];
        const originalImage = images.find(
          image => image.uri === originalImageUri
        );
        const thumbnail = selectThumbnail({
          images,
          targetDimensions: {height: 600, width: 600},
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
                  src: thumbnail
                    ? thumbnail.uri
                    : placeholderImageUrl({
                        dimensions: {height: 600, width: 600},
                        text: "Missing thumbnail",
                      }),
                  style: {
                    maxHeight: 600,
                    maxWidth: 600,
                  },
                }}
                zoomImage={{
                  className: "img--zoomed",
                  src: originalImageUri,
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
