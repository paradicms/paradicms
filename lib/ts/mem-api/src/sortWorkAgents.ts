import {
  defaultWorkAgentsSort,
  WorkAgentsSort,
  WorkAgentsSortProperty,
} from "@paradicms/api";
import {WorkAgentWithWorkKey} from "./WorkAgentWithWorkKey";

/**
 * Sort work agents in place.
 */
export const sortWorkAgents = (
  sort: WorkAgentsSort,
  workAgents: WorkAgentWithWorkKey[]
): void => {
  const compareMultiplier = sort.ascending ? 1 : -1;
  switch (sort.property) {
    case WorkAgentsSortProperty.NAME:
      workAgents.sort(
        (left, right) =>
          compareMultiplier *
          left.workAgent.agent.label.localeCompare(right.workAgent.agent.label)
      );
      return;
    default:
      sortWorkAgents(defaultWorkAgentsSort, workAgents);
      return;
  }
};
