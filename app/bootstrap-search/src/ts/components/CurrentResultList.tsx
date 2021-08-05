import {CurrentResultStore} from "~/stores/CurrentResultStore";
import {ListGroup, ListGroupItem} from "reactstrap";
import React from "react";

export const CurrentResultList: React.FunctionComponent = () => {
  const objects = CurrentResultStore.useState(
    (state) => state.currentResult.objects
  );

  return (
    <ListGroup>
      {objects.map((object) => (
        <ListGroupItem key={object.url}>
          <ListGroupItem tag="a" href={object.url} action>
            {object.title}
          </ListGroupItem>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
