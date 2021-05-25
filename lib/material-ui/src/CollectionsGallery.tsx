import * as React from "react";
import {Grid} from "@material-ui/core";
import {CollectionCard} from "./CollectionCard";
import {CollectionCardCollection} from "./CollectionCardCollection";

export const CollectionsGallery: React.FunctionComponent<{
  collections: readonly CollectionCardCollection[];
  renderCollectionLink: (
    collection: CollectionCardCollection,
    children: React.ReactNode
  ) => React.ReactNode;
}> = ({collections, renderCollectionLink}) => (
  <Grid container direction="column" spacing={4}>
    <Grid item>
      <Grid container spacing={8}>
        {collections.map(collection => (
          <Grid item key={collection.uri}>
            <CollectionCard
              collection={collection}
              renderCollectionLink={renderCollectionLink}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);
