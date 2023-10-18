import {RightsStatement} from "@paradicms/models";
import * as React from "react";

export const RightsStatementLink: React.FunctionComponent<{
  rightsStatement: RightsStatement | null;
}> = ({rightsStatement}) => {
  if (!rightsStatement) {
    return null;
  }
  if (
    rightsStatement.iri.value.startsWith("http://") ||
    rightsStatement.iri.value.startsWith("https://")
  ) {
    return <a href={rightsStatement.iri.value}>{rightsStatement.label}</a>;
  } else {
    return <span>{rightsStatement.label}</span>;
  }
};
