import {WorkSearchAppConfiguration} from "./WorkSearchAppConfiguration";
import {BlankNode, Dataset, NamedNode} from "@rdfjs/types";
import {
  readAppConfiguration,
  readPropertyConfiguration,
} from "@paradicms/configuration";
import {configuration} from "@paradicms/vocabularies";

export const readWorkSearchAppConfiguration = (
  configurationDataset: Dataset | null,
  modelSetDataset: Dataset
): WorkSearchAppConfiguration | null => {
  return readAppConfiguration<WorkSearchAppConfiguration>(
    configurationDataset,
    modelSetDataset,
    ({graph, node, dataset, ...appConfigurationProps}) => {
      return {
        workProperties: dataset
          .match(node, configuration.workProperty, null, graph)
          .toArray()
          .map(quad => quad.object)
          .filter(
            term =>
              term.termType === "BlankNode" || term.termType === "NamedNode"
          )
          .map(node =>
            readPropertyConfiguration({
              node: node as BlankNode | NamedNode,
              graph,
              dataset,
            })
          ),
        ...appConfigurationProps,
      };
    }
  );
};
