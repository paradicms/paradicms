import {WorkAgent} from "./WorkAgent";
import {Work} from "./Work";
import {RightsMixin} from "./RightsMixin";

const getRightsWorkAgents = (
  rights: RightsMixin | null,
  rolePrefix: string
): readonly WorkAgent[] => {
  const result: WorkAgent[] = [];

  if (!rights) {
    return result;
  }

  for (const contributor of rights.contributors) {
    result.push({
      agent: contributor,
      role: rolePrefix + " contributor",
    });
  }

  for (const creator of rights.creators) {
    result.push({
      agent: creator,
      role: rolePrefix + " creator",
    });
  }

  for (const rightsHolder of rights.rightsHolders) {
    result.push({
      agent: rightsHolder,
      role: rolePrefix + " rights holder",
    });
  }

  return result;
};

export const getWorkAgents = (work: Work) => {
  const result: WorkAgent[] = [];

  result.push(...getRightsWorkAgents(work, "Work"));

  if (work.description) {
    result.push(...getRightsWorkAgents(work.description, "Text"));
  }

  return result;
};
