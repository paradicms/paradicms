import {BlankNode, DefaultGraph, NamedNode, Store, Term} from "n3";
import {Dataset} from "./Dataset";
import {ModelParameters} from "./ModelParameters";

export class Model {
  readonly dataset: Dataset;
  readonly graphNode: DefaultGraph | NamedNode;
  protected readonly _node: BlankNode | NamedNode;

  constructor(kwds: ModelParameters) {
    this.dataset = kwds.dataset;
    this.graphNode = kwds.graphNode;
    this._node = kwds.node;
  }

  protected getObjects(property: NamedNode): readonly Term[] {
    return this.store.getObjects(this.node, property, this.graphNode);
  }

  get node(): BlankNode | NamedNode {
    return this._node;
  }

  protected get store(): Store {
    return this.dataset.store;
  }
}
