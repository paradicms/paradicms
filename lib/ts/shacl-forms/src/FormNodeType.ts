import {DataFactory} from "@paradicms/rdf";
import {Form} from "./Form";
import {FormNode} from "./FormNode";
import {rdf} from "@paradicms/vocabularies";
import {Model} from "./Model";
import {DataGraph, NodeShape, ShapesGraph} from "@paradicms/shacl";
import {NamedNode} from "@rdfjs/types";

export class FormNodeType extends Model {
  readonly form: Form;
  readonly rdfType: NamedNode;
  readonly shape: NodeShape;

  constructor(kwds: {form: Form; rdfType: NamedNode; shape: NodeShape}) {
    super();
    this.form = kwds.form;
    this.rdfType = kwds.rdfType;
    this.shape = kwds.shape;
  }

  addNode(dataGraphNode: NamedNode): FormNode {
    // Add (node, rdf:type, ...)
    // Assumes the shapes graph has a class or implicit class target
    this.dataGraph.add(DataFactory.quad(dataGraphNode, rdf.type, this.rdfType));

    return new FormNode({
      dataGraphNode: dataGraphNode,
      type: this,
    });
  }

  get dataGraph(): DataGraph {
    return this.form.dataGraph;
  }

  get id(): string {
    return this.rdfType.value;
  }

  get label(): string {
    return this.shape.name ?? this.rdfType.value;
  }

  nodeById(id: string): FormNode {
    const dataGraphNode = DataFactory.namedNode(id);
    for (const _ of this.dataGraph.match(null, rdf.type, this.rdfType, null)) {
      return new FormNode({
        dataGraphNode,
        type: this,
      });
    }
    throw new RangeError("no such form node " + id);
  }

  get nodes(): readonly FormNode[] {
    return Object.values(this.nodesById);
  }

  private get nodesById(): {[index: string]: FormNode} {
    return this.dataGraph
      .match(null, rdf.type, this.rdfType, null)
      .reduce((map, quad) => {
        const subject = quad.subject;
        if (subject.termType === "NamedNode" && !map[subject.value]) {
          map[subject.value] = new FormNode({
            dataGraphNode: subject,
            type: this,
          });
        }
        return map;
      }, {} as {[index: string]: FormNode});
  }

  get shapesGraph(): ShapesGraph {
    return this.form.shapesGraph;
  }
}
