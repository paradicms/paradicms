import {AppConfiguration} from "./AppConfiguration";
import {BlankNode, Dataset, DefaultGraph, NamedNode} from "@rdfjs/types";
import {configuration, rdf} from "@paradicms/vocabularies";

export const readAppConfiguration = <
  AppConfigurationT extends AppConfiguration
>(
  configurationDataset: Dataset | null,
  dataDataset: Dataset,
  factory: (kwds: {
    readonly graph: BlankNode | DefaultGraph | NamedNode;
    readonly node: BlankNode | NamedNode;
    readonly dataset: Dataset;
    readonly stylesheetHref: string | null;
  }) => AppConfigurationT
): AppConfigurationT | null => {
  for (const dataset of [configurationDataset, dataDataset]) {
    if (!dataset) {
      continue;
    }

    const typeQuads = dataset
      .match(null, rdf.type, configuration.AppConfiguration, null)
      .toArray();
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
      dataset,
      stylesheetHref:
        dataset
          .match(
            typeQuad.subject,
            configuration.stylesheetHref,
            null,
            typeQuad.graph
          )
          .toArray()
          .find(quad => quad.object.termType === "NamedNode")?.object.value ??
        null,
    });
  }

  return null;
};
