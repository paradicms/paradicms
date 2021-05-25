import {RightsStatement} from "@paradicms/models";

export const indexRightsStatementPrefLabelsByUri = (
  rightsStatements: readonly RightsStatement[]
): {[index: string]: string} => {
  return rightsStatements.reduce((result, rightsStatement) => {
    result[rightsStatement.uri] = rightsStatement.prefLabel;
    return result;
  }, {} as {[index: string]: string});
};
