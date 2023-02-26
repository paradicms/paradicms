import {AppConfiguration} from "./AppConfiguration";
import {BlankNode, Dataset, DefaultGraph, NamedNode} from "@rdfjs/types";
import {configuration, rdf} from "@paradicms/vocabularies";
import {ConfigurationParameters} from "./ConfigurationParameters";

export const getAppConfiguration = <AppConfigurationT extends AppConfiguration>(
  dataset: Dataset,
  factory: (kwds: ConfigurationParameters) => AppConfigurationT
): AppConfigurationT | null => {
  const typeQuads = dataset
    .match(null, rdf.type, configuration.AppConfiguration, null)
    .toArray();
  if (typeQuads.length === 0) {
    return null;
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
    dataset,
    graphNode: typeQuad.graph as DefaultGraph | NamedNode,
    node: typeQuad.subject as BlankNode | NamedNode,
  });
};
