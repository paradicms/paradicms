import * as React from "react";

export const ObjectSearchSummary: React.FunctionComponent<{
  endObjectIndex: number;
  startObjectIndex: number;
  objectIndexMax: number;
}> = ({endObjectIndex, startObjectIndex, objectIndexMax}) => {
  return (
    <p className="muted">
      Showing objects{" "}
      <span data-cy="start-object-index">{startObjectIndex + 1}</span> &mdash;{" "}
      <span data-cy="end-object-index">{endObjectIndex + 1}</span> of{" "}
      <span data-cy="objects-count">{objectIndexMax + 1}</span>.
    </p>
  );
};
