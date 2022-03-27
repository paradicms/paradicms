import {BootstrapCollectionAppConfiguration} from "./BootstrapCollectionAppConfiguration";
import {BlankNode, NamedNode, Store} from "n3";
import {
  imputeSearchConfiguration,
  readAppConfiguration,
  readPropertyConfiguration,
} from "@paradicms/configuration";
import {CONFIGURATION} from "@paradicms/vocabularies";

export const readBootstrapCollectionAppConfiguration = (
  configurationStore: Store | null,
  datasetStore: Store
): BootstrapCollectionAppConfiguration | null => {
  return readAppConfiguration<BootstrapCollectionAppConfiguration>(
    configurationStore,
    datasetStore,
    ({graph, node, store, ...appConfigurationProps}) => {
      const workProperties = store
        .getObjects(node, CONFIGURATION.workProperty, graph)
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
