import {AppConfiguration} from "./AppConfiguration";
import {BlankNode, DefaultGraph, NamedNode, Store} from "n3";
import {CONFIGURATION, rdf} from "@paradicms/vocabularies";

export const readAppConfiguration = <
  AppConfigurationT extends AppConfiguration
>(
  configurationStore: Store | null,
  dataStore: Store,
  factory: (kwds: {
    readonly graph: BlankNode | DefaultGraph | NamedNode;
    readonly node: BlankNode | NamedNode;
    readonly store: Store;
    readonly stylesheetHref: string | null;
  }) => AppConfigurationT
): AppConfigurationT | null => {
  for (const store of [configurationStore, dataStore]) {
    if (!store) {
      continue;
    }

    const typeQuads = store.getQuads(
      null,
      rdf.type,
      CONFIGURATION.AppConfiguration,
      null
    );
    if (typeQuads.length === 0) {
      continue;
    } else if (typeQuads.length > 1) {
      throw new RangeError(
        "multiple configurations defined: " +
          typeQuads.map(quad => quad.subject.value).join(" ")
      );
    }

    const typeQuad = typeQuads[0];

    switch (typeQuad.graph.termType) {
      case "BlankNode":
      case "DefaultGraph":
      case "NamedNode":
        break;
      default:
        throw new EvalError();
    }

    switch (typeQuad.subject.termType) {
      case "BlankNode":
      case "NamedNode":
        break;
      default:
        throw new EvalError(typeQuad.subject.termType);
    }

    return factory({
      graph: typeQuad.graph as DefaultGraph | NamedNode | BlankNode,
      node: typeQuad.subject as BlankNode | NamedNode,
      store,
      stylesheetHref:
        store
          .getObjects(
            typeQuad.subject,
            CONFIGURATION.stylesheetHref,
            typeQuad.graph
          )
          .find(term => term.termType === "NamedNode")?.value ?? null,
    });
  }

  return null;
};
