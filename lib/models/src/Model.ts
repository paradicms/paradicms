import {BlankNode, NamedNode, Store, Term} from "n3";
import {Dataset} from "./Dataset";
import {ModelParameters} from "./ModelParameters";
import {RDF} from "./vocabularies";

export class Model {
  readonly dataset: Dataset;
  readonly graphNode: NamedNode;
  protected readonly _node: BlankNode | NamedNode;

  constructor(kwds: ModelParameters) {
    this.dataset = kwds.dataset;
    this.graphNode = kwds.graphNode;
    this._node = kwds.node;
  }

  protected hasRdfType(
    subject: BlankNode | NamedNode,
    rdfType: NamedNode
  ): boolean {
    return this.store.getQuads(subject, RDF.type, rdfType, null).length > 0;
  }

  get node(): BlankNode | NamedNode {
    return this._node;
  }

  protected propertyObjects(property: NamedNode): readonly Term[] {
    return this.store.getObjects(this.node, property, this.graphNode);
  }

  // protected optionalModelOrString<ModelT extends NamedModel>(
  //   modelByUri: (uri: string) => ModelT,
  //   property: NamedNode
  // ): ModelT | string | null {
  //   for (const object of this.store.getObjects(
  //     this.node,
  //     property,
  //     this.graphNode
  //   )) {
  //     switch (object.termType) {
  //       case "Literal":
  //         return object.value;
  //       case "NamedNode":
  //         return modelByUri(object.value);
  //     }
  //   }
  //   return null;
  // }

  protected get store(): Store {
    return this.dataset.store;
  }
}
