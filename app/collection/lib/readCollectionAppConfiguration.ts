import {CollectionAppConfiguration} from "./CollectionAppConfiguration";
import {BlankNode, Dataset, NamedNode} from "@rdfjs/types";
import {
  imputeSearchConfiguration,
  readAppConfiguration,
  readPropertyConfiguration,
} from "@paradicms/configuration";
import {configuration} from "@paradicms/vocabularies";

export const readCollectionAppConfiguration = (
  configurationDataset: Dataset | null,
  modelSetDataset: Dataset
): CollectionAppConfiguration | null => {
  return readAppConfiguration<CollectionAppConfiguration>(
    configurationDataset,
    modelSetDataset,
    ({graph, node, dataset, ...appConfigurationProps}) => {
      const workProperties = dataset
        .getObjects(node, configuration.workProperty, graph)
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
