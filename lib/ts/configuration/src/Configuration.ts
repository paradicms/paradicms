import {Resource} from "@paradicms/rdf";
import {BlankNode, Dataset, DefaultGraph, NamedNode} from "@rdfjs/types";
import {ConfigurationParameters} from "./ConfigurationParameters";

export abstract class Configuration extends Resource {
  readonly dataset: Dataset;
  readonly graphNode: BlankNode | DefaultGraph | NamedNode;

  protected constructor(kwds: ConfigurationParameters) {
    super({node: kwds.node});
    this.dataset = kwds.dataset;
    this.graphNode = kwds.graphNode;
  }
}
