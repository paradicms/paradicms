import * as React from "react";
import {Agent} from "@paradicms/models";
import {AgentCard} from "./AgentCard";
import {Gallery} from "./Gallery";

export const AgentsGallery: React.FunctionComponent<{
  agents: readonly Agent[];
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
}> = ({agents, getAbsoluteImageSrc}) => (
  <Gallery
    cards={agents.map(agent => ({
      element: (
        <AgentCard agent={agent} getAbsoluteImageSrc={getAbsoluteImageSrc} />
      ),
      key: agent.uri,
    }))}
  />
);
