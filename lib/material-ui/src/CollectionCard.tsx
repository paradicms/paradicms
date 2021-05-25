import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
} from "@material-ui/core";
import {placeholderImageUrl} from "@paradicms/model-utils";
import {CollectionCardCollection} from "./CollectionCardCollection";
import {thumbnailTargetDimensions} from "./thumbnailTargetDimensions";

const useStyles = makeStyles(theme => ({
  thumbnailImg: {
    maxHeight: "200px",
    maxWidth: "200px",
  },
  root: {
    width: "400px",
  },
  title: {
    textAlign: "center",
  },
}));

// const thumbnail = selectThumbnail({
//   images: collection.images,
//   targetDimensions: {height: 200, width: 200},
// });

export const CollectionCard: React.FunctionComponent<{
  collection: CollectionCardCollection;
  renderCollectionLink: (
    collection: CollectionCardCollection,
    children: React.ReactNode
  ) => React.ReactNode;
}> = ({collection, renderCollectionLink}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.title}
        title={renderCollectionLink(collection, <>{collection.title}</>)}
      />
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item container alignItems="center" justify="center">
            <Grid item>
              {renderCollectionLink(
                collection,
                <img
                  className={classes.thumbnailImg}
                  src={
                    collection.thumbnail
                      ? collection.thumbnail.uri
                      : placeholderImageUrl({
                          dimensions: thumbnailTargetDimensions,
                          text: "Missing thumbnail",
                        })
                  }
                  title={collection.title}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
