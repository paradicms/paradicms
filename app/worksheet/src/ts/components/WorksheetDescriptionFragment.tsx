import {Text} from "@paradicms/models";
import {RightsParagraph} from "@paradicms/react-dom-components";
import * as React from "react";

export const WorksheetDescriptionFragment: React.FunctionComponent<{
  description: Text | null;
}> = ({description}) => {
  if (!description) {
    return null;
  }
  return (
    <>
      <p>{description.toString()}</p>
      {description &&
      typeof description !== "string" &&
      description.requiresAttribution ? (
        <RightsParagraph
          material="Text"
          rights={description}
          style={{fontSize: "xx-small"}}
        />
      ) : null}
    </>
  );
};
