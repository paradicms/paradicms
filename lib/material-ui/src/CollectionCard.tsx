import * as React from "react";
import {Card, CardContent, CardHeader, Grid, makeStyles} from "@material-ui/core";
import {thumbnailTargetDimensions} from "./thumbnailTargetDimensions";
import {JoinedCollection, JoinedImage} from "@paradicms/models";

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
  collection: JoinedCollection;
  renderCollectionLink: (
    collection: JoinedCollection,
    children: React.ReactNode,
  ) => React.ReactNode;
}> = ({collection, renderCollectionLink}) => {
  const classes = useStyles();
  const thumbnail = collection.thumbnail({targetDimensions: thumbnailTargetDimensions});
  const thumbnailSrc = thumbnail?.src ?? JoinedImage.placeholderSrc(thumbnailTargetDimensions);

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
                  src={thumbnailSrc}
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
