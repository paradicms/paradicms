import * as React from "react";
import {Text} from "@paradicms/models";
import {RightsParagraph} from "@paradicms/react-dom-components";

export const WorksheetDescriptionFragment: React.FunctionComponent<{
  description: string | Text | null;
}> = ({description}) => {
  if (!description) {
    return null;
  }
  return (
    <>
      <p>{description.toString()}</p>
      {description instanceof Text && description.rights ? (
        <RightsParagraph
          material="Text"
          rights={description.rights}
          style={{fontSize: "xx-small"}}
        />
      ) : null}
    </>
  );
};
