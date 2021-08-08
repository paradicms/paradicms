import {ListGroup, ListGroupItem} from "reactstrap";
import * as React from "react";
import {JoinedObject} from "@paradicms/models";

export const ObjectsListGroup: React.FunctionComponent<{
  objects: readonly JoinedObject[];
}> = ({objects}) => (
  <ListGroup>
    {objects.map(object => (
      <ListGroupItem key={object.uri}>
        <ListGroupItem tag="a" href={object.page ?? object.uri} action>
          {object.title}
        </ListGroupItem>
      </ListGroupItem>
    ))}
  </ListGroup>
);
