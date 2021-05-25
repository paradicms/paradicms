import {JoinedRights, Rights} from "@paradicms/models";
import {joinValue} from "./joinValue";

export const joinRights = (kwds: {
  licenseTitlesByUri: {[index: string]: string};
  rightsStatementPrefLabelsByUri: {[index: string]: string};
  rights: Rights;
}): JoinedRights => {
  const {licenseTitlesByUri, rightsStatementPrefLabelsByUri, rights} = kwds;
  return {
    creator: rights.creator
      ? joinValue({textsByUri: {}, value: rights.creator})
      : null,
    holder: rights.holder
      ? joinValue({textsByUri: {}, value: rights.holder})
      : null,
    license: rights.license
      ? joinValue({
          textsByUri: licenseTitlesByUri,
          value: rights.license,
        })
      : null,
    statement: rights.statement
      ? joinValue({
          textsByUri: rightsStatementPrefLabelsByUri,
          value: rights.statement,
        })
      : null,
  };
};
