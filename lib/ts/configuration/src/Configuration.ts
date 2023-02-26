import {Resource} from "@paradicms/rdf";
import {Dataset, DefaultGraph, NamedNode} from "@rdfjs/types";
import {ConfigurationParameters} from "./ConfigurationParameters";

export abstract class Configuration extends Resource {
  readonly dataset: Dataset;
  readonly graphNode: DefaultGraph | NamedNode;

  protected constructor(kwds: ConfigurationParameters) {
    super({node: kwds.node});
    this.dataset = kwds.dataset;
    this.graphNode = kwds.graphNode;
  }
}
