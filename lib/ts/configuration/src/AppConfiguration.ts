import {configuration, rdf} from "@paradicms/vocabularies";
import {Configuration} from "./Configuration";
import {datasetToFastRdfString} from "@paradicms/rdf";
import {ConfigurationParameters} from "./ConfigurationParameters";
import {BlankNode, Dataset, DefaultGraph, NamedNode} from "@rdfjs/types";

export class AppConfiguration extends Configuration {
  protected constructor(kwds: ConfigurationParameters) {
    super(kwds);
  }

  static fromDataset(dataset: Dataset): AppConfiguration | null {
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

    return new AppConfiguration({
      dataset,
      graphNode: typeQuad.graph as DefaultGraph | NamedNode,
      node: typeQuad.subject as BlankNode | NamedNode,
    });
  }

  static fromDatasets(
    datasets: readonly (Dataset | null)[]
  ): AppConfiguration | null {
    for (const dataset of datasets) {
      if (!dataset) {
        continue;
      }
      const result = AppConfiguration.fromDataset(dataset);
      if (result) {
        return result;
      }
    }
    return null;
  }

  get stylesheet(): string | null {
    return this.findAndMapObject(configuration.stylesheet, term =>
      term.termType === "NamedNode" || term.termType === "Literal"
        ? term.value
        : null
    );
  }

  get title(): string | null {
    return this.findAndMapObject(configuration.title, term =>
      term.termType === "Literal" ? term.value : null
    );
  }

  toFastRdfString(): string {
    return datasetToFastRdfString(this.dataset);
  }
}
