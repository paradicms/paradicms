import {RightsStatement} from "@paradicms/models";
import * as React from "react";

export const RightsStatementLink: React.FunctionComponent<{
  rightsStatement: RightsStatement | null;
}> = ({rightsStatement}) => {
  if (!rightsStatement) {
    return null;
  }
  if (!rightsStatement.iri) {
    return <span>{rightsStatement.label}</span>;
  }
  return <a href={rightsStatement.iri}>{rightsStatement.label}</a>;
};
