import {RightsStatement} from "@paradicms/models";
import * as React from "react";

export const RightsStatementLink: React.FunctionComponent<{
  rightsStatement: string | RightsStatement | null;
}> = ({rightsStatement}) => {
  if (!rightsStatement) {
    return null;
  }
  if (typeof rightsStatement === "string") {
    return <span>{rightsStatement as string}</span>;
  }
  const rightsStatementModel = rightsStatement as RightsStatement;
  return (
    <a href={rightsStatementModel.uri}>{rightsStatementModel.prefLabel}</a>
  );
};
