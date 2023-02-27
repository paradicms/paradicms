import * as React from "react";
import {Agent} from "@paradicms/models";
import {AgentCard} from "./AgentCard";

export const AgentsGallery: React.FunctionComponent<{
  agents: readonly Agent[];
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
}> = ({agents, getAbsoluteImageSrc}) => (
  <>
    {agents.map(agent => (
      <div
        key={agent.uri}
        style={{
          marginLeft: "20px",
          marginBottom: "20px",
          width: "400px",
        }}
      >
        <AgentCard agent={agent} getAbsoluteImageSrc={getAbsoluteImageSrc} />
      </div>
    ))}
  </>
);
