import * as React from "react";
import {Grid} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";
import {ObjectCard} from "./ObjectCard";
import {ObjectCardObject} from "./ObjectCardObject";
import {ObjectCardInstitution} from "./ObjectCardInstitution";

/**
 * Objects gallery component.
 *
 * @param objects current page of objects to render in the gallery
 */
export const ObjectsGallery: React.FunctionComponent<{
  objects: readonly ObjectCardObject[];
  onChangePage: (page: number) => void;
  page: number; // From 0
  pageMax: number; // From 0
  renderInstitutionLink?: (
    institution: ObjectCardInstitution,
    children: React.ReactNode,
  ) => React.ReactNode;
  renderObjectLink: (
    object: ObjectCardObject,
    children: React.ReactNode,
  ) => React.ReactNode;
}> = ({
        objects,
        onChangePage,
        page,
        pageMax,
        renderInstitutionLink,
        renderObjectLink,
      }) => {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Grid container spacing={8}>
          {objects
            .map(object => (
              <Grid item key={object.uri}>
                <ObjectCard
                  object={object}
                  renderInstitutionLink={renderInstitutionLink}
                  renderObjectLink={renderObjectLink}
                />
              </Grid>
            ))}
        </Grid>
      </Grid>
      <Grid item style={{alignSelf: "center"}}>
        <Pagination
          count={pageMax + 1}
          page={page + 1}
          onChange={(_, value) => onChangePage(value - 1)}
        />
      </Grid>
    </Grid>
  );
};
