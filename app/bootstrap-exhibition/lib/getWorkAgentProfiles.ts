import {Agent, ImageDimensions, Institution, Work} from "@paradicms/models";
import {WorkAgentProfile} from "./WorkAgentProfile";

export const getWorkAgentProfiles = (kwds: {
  institution: Institution;
  work: Work;
}): readonly WorkAgentProfile[] => {
  const {institution, work} = kwds;

  const result: WorkAgentProfile[] = [];

  const rights = work.rights ?? institution.rights ?? null;

  const thumbnailTargetDimensions: ImageDimensions = {height: 600, width: 600};

  const creator = rights?.creator;
  if (creator && creator instanceof Agent) {
    const creatorAgent = creator as Agent;
    const thumbnail = creatorAgent.thumbnail({
      targetDimensions: thumbnailTargetDimensions,
    });
    if (thumbnail) {
      result.push({
        agent: creatorAgent,
        href: creatorAgent.page ?? creatorAgent.wikidataConceptUri ?? null,
        role: "Creator",
        thumbnail,
        thumbnailTargetDimensions,
      });
    }
  }

  return result;
};
