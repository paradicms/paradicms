import {CollectionAppConfiguration} from "./CollectionAppConfiguration";
import {BlankNode, NamedNode, Store} from "@rdfjs/types";
import {
  imputeSearchConfiguration,
  readAppConfiguration,
  readPropertyConfiguration,
} from "@paradicms/configuration";
import {configuration} from "@paradicms/vocabularies";

export const readCollectionAppConfiguration = (
  configurationStore: Store | null,
  datasetStore: Store
): CollectionAppConfiguration | null => {
  return readAppConfiguration<CollectionAppConfiguration>(
    configurationStore,
    datasetStore,
    ({graph, node, store, ...appConfigurationProps}) => {
      const workProperties = store
        .getObjects(node, configuration.workProperty, graph)
        .filter(
          term => term.termType === "BlankNode" || term.termType === "NamedNode"
        )
        .map(node =>
          readPropertyConfiguration({
            node: node as BlankNode | NamedNode,
            graph,
            store,
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
