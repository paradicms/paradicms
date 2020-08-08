import * as React from "react";
import {Grid} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";
import {JoinedObject} from "~/models/object/JoinedObject";
import {ObjectCard} from "~/components/object/ObjectCard";

export const ObjectsGallery: React.FunctionComponent<{
  currentPage: number;
  maxPage: number;
  objects: JoinedObject[];
  onChangePage: (page: number) => void;
}> = ({currentPage, maxPage, objects, onChangePage}) => (
  <Grid container direction="column" spacing={4}>
    <Grid item>
      <Grid container>
        {objects.map(object => (
          <Grid item key={object.uri}>
            <ObjectCard object={object} />
          </Grid>
        ))}
      </Grid>
    </Grid>
    {maxPage > 1 ? (
      <Grid item style={{alignSelf: "center"}}>
        <Pagination
          count={maxPage}
          page={currentPage}
          onChange={(_, value) => onChangePage(value)}
        />
      </Grid>
    ) : null}
  </Grid>
);
