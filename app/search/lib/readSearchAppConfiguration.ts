import {SearchAppConfiguration} from "./SearchAppConfiguration";
import {BlankNode, Dataset, NamedNode} from "@rdfjs/types";
import {
  imputeSearchConfiguration,
  readAppConfiguration,
  readPropertyConfiguration,
} from "@paradicms/configuration";
import {configuration} from "@paradicms/vocabularies";

export const readSearchAppConfiguration = (
  configurationDataset: Dataset | null,
  modelSetDataset: Dataset
): SearchAppConfiguration | null => {
  return readAppConfiguration<SearchAppConfiguration>(
    configurationDataset,
    modelSetDataset,
    ({graph, node, dataset, ...appConfigurationProps}) => {
      const workProperties = dataset
        .match(node, configuration.workProperty, null, graph)
        .toArray()
        .map(quad => quad.object)
        .filter(
          term => term.termType === "BlankNode" || term.termType === "NamedNode"
        )
        .map(node =>
          readPropertyConfiguration({
            node: node as BlankNode | NamedNode,
            graph,
            dataset,
          })
        );

      return {
        search: imputeSearchConfiguration(workProperties, undefined),
        workProperties,
        ...appConfigurationProps,
      };
    }
  );
};
