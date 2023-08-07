import {
  AgentsSort,
  AgentsSortProperty,
  defaultWorkAgentsSort,
} from "@paradicms/api";
import {WorkAgent} from "@paradicms/models";

/**
 * Sort work agents in place.
 */
export const sortWorkAgents = (
  sort: AgentsSort,
  workAgents: WorkAgent[]
): void => {
  const compareMultiplier = sort.ascending ? 1 : -1;
  switch (sort.property) {
    case AgentsSortProperty.NAME:
      workAgents.sort(
        (left, right) =>
          compareMultiplier * left.agent.label.localeCompare(right.agent.label)
      );
      return;
    default:
      sortWorkAgents(defaultWorkAgentsSort, workAgents);
      return;
  }
};
