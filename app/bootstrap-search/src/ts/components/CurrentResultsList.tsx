import {ListGroup, ListGroupItem} from "reactstrap";
import * as React from "react";
import {CurrentResultsStore} from "~/stores/CurrentResultsStore";

export const CurrentResultsList: React.FunctionComponent = () => {
  const objects = CurrentResultsStore.useState(
    (state) => state.currentResults.dataset.objects,
  );

  return (
    <ListGroup>
      {objects.map((object) => (
        <ListGroupItem key={object.uri}>
          <ListGroupItem tag="a" href={object.url} action>
            {object.title}
          </ListGroupItem>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
