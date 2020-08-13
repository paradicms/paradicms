import * as React from "react";
import {Grid} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";
import {JoinedObject} from "~/models/JoinedObject";
import {ObjectCard} from "~/components/ObjectCard";

export const ObjectsGallery: React.FunctionComponent<{
  currentPage: number; // From 0
  maxPage: number; // From 0
  objects: JoinedObject[];
  objectsPerPage: number;
  objectsTotal: number;
  onChangePage: (page: number) => void;
}> = ({
  currentPage,
  maxPage,
  objects,
  objectsPerPage,
  objectsTotal,
  onChangePage,
}) => (
  <Grid container direction="column" spacing={4}>
    <Grid item>
      <p className="muted">
        Showing objects{" "}
        <span data-cy="start-object-index">
          {currentPage * objectsPerPage + 1}
        </span>{" "}
        &mdash;{" "}
        <span data-cy="end-object-index">
          {currentPage * objectsPerPage + objects.length}
        </span>{" "}
        of <span data-cy="objects-count">{objectsTotal}</span>
      </p>
    </Grid>
    <Grid item>
      <Grid container spacing={8}>
        {objects.map(object => (
          <Grid item key={object.uri}>
            <ObjectCard object={object} />
          </Grid>
        ))}
      </Grid>
    </Grid>
    {maxPage > 0 ? (
      <Grid item style={{alignSelf: "center"}}>
        <Pagination
          count={maxPage + 1}
          page={currentPage + 1}
          onChange={(_, value) => onChangePage(value - 1)}
        />
      </Grid>
    ) : null}
  </Grid>
);
