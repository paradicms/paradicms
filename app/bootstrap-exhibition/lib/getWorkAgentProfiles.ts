import {
  Agent,
  ImageDimensions,
  Institution,
  Rights,
  Text,
  Work,
} from "@paradicms/models";
import {WorkAgentProfile} from "./WorkAgentProfile";

const thumbnailTargetDimensions: ImageDimensions = {height: 600, width: 600};

const getRightsAgentProfiles = (
  rights: Rights | null,
  rolePrefix: string
): readonly WorkAgentProfile[] => {
  const result: WorkAgentProfile[] = [];

  if (!rights) {
    return result;
  }

  const creator = rights?.creator;
  if (creator && creator instanceof Agent) {
    const creatorAgent = creator as Agent;
    const thumbnail = creatorAgent.thumbnail({
      targetDimensions: thumbnailTargetDimensions,
    });
    if (thumbnail) {
      result.push({
        agent: creatorAgent,
        role: rolePrefix + " creator",
        thumbnail,
        thumbnailTargetDimensions,
      });
    }
  }

  return result;
};

export const getWorkAgentProfiles = (kwds: {
  institution: Institution;
  work: Work;
}): readonly WorkAgentProfile[] => {
  const {institution, work} = kwds;

  const result: WorkAgentProfile[] = [];

  result.push(
    ...getRightsAgentProfiles(work.rights ?? institution.rights ?? null, "Work")
  );

  const abstract = work.abstract;
  if (abstract && abstract instanceof Text) {
    result.push(...getRightsAgentProfiles(abstract.rights, "Text"));
  }

  for (const image of work.originalImages) {
    result.push(...getRightsAgentProfiles(image.rights, "Image"));
  }

  return result;
};
