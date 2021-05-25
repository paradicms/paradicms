import * as React from "react";
import {Grid} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";
import {ObjectCard} from "./ObjectCard";
import {ObjectCardObject} from "./ObjectCardObject";
import {ObjectCardInstitution} from "./ObjectCardInstitution";

const OBJECTS_PER_PAGE = 10;

/**
 * Objects gallery component.
 *
 * @param objects objects to render in the gallery, should not be sliced (limit + offset) beforehand
 */
export const ObjectsGallery: React.FunctionComponent<{
  objects: readonly ObjectCardObject[];
  onChangePage: (page: number) => void;
  page: number; // From 0
  renderInstitutionLink?: (
    institution: ObjectCardInstitution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderObjectLink: (
    object: ObjectCardObject,
    children: React.ReactNode
  ) => React.ReactNode;
}> = ({
  objects,
  onChangePage,
  page,
  renderInstitutionLink,
  renderObjectLink,
}) => {
  const maxPage = Math.ceil(objects.length / OBJECTS_PER_PAGE) - 1;

  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Grid container spacing={8}>
          {objects
            .slice(page * OBJECTS_PER_PAGE, (page + 1) * OBJECTS_PER_PAGE)
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
      {maxPage > 0 ? (
        <Grid item style={{alignSelf: "center"}}>
          <Pagination
            count={maxPage + 1}
            page={page + 1}
            onChange={(_, value) => onChangePage(value - 1)}
          />
        </Grid>
      ) : null}
    </Grid>
  );
};
