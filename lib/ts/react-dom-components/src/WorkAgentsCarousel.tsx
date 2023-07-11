import {WorkAgent} from "@paradicms/models";
import * as React from "react";
import {AgentsCarousel} from "./AgentsCarousel";

export const WorkAgentsCarousel: React.FunctionComponent<{
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  workAgents: readonly WorkAgent[];
}> = ({getAbsoluteImageSrc, workAgents}) => (
  <AgentsCarousel
    agents={workAgents.map(workAgent => ({
      homepage: workAgent.agent.homepage,
      key: workAgent.agent.key,
      label: workAgent.agent.label,
      role: workAgent.role,
      thumbnail: selector => workAgent.agent.thumbnail(selector),
      wikidataConceptIri: workAgent.agent.wikidataConceptIri,
      wikipediaUrl: workAgent.agent.wikipediaUrl,
    }))}
    getAbsoluteImageSrc={getAbsoluteImageSrc}
  />
);
