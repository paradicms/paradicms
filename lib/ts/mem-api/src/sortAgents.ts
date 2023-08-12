import {AgentsSort, defaultAgentsSort} from "@paradicms/api";

/**
 * Sort agents in place.
 */
export const sortAgents = (
  agents: {readonly label: string}[],
  sort: AgentsSort
): void => {
  const compareMultiplier = sort.ascending ? 1 : -1;
  switch (sort.property) {
    case "name":
      agents.sort(
        (left, right) =>
          compareMultiplier * left.label.localeCompare(right.label)
      );
      return;
    default:
      sortAgents(agents, defaultAgentsSort);
      return;
  }
};
