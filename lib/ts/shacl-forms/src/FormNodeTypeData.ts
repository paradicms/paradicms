import {DataFactory} from "@paradicms/rdf";
import {FormData} from "./FormData";
import {FormNodeData} from "./FormNodeData";
import {rdf} from "@paradicms/vocabularies";
import {DataGraph, NodeShape, ShapesGraph} from "@paradicms/shacl";
import {NamedNode} from "@rdfjs/types";

export class FormNodeTypeData {
  readonly form: FormData;
  readonly rdfType: NamedNode;
  readonly shape: NodeShape;

  constructor(kwds: {form: FormData; rdfType: NamedNode; shape: NodeShape}) {
    this.form = kwds.form;
    this.rdfType = kwds.rdfType;
    this.shape = kwds.shape;
  }

  addNode(dataGraphNode: NamedNode): FormNodeData {
    // Add (node, rdf:type, ...)
    // Assumes the shapes graph has a class or implicit class target
    this.dataGraph.add(DataFactory.quad(dataGraphNode, rdf.type, this.rdfType));

    return new FormNodeData({
      dataGraph: this.dataGraph,
      dataGraphNode: dataGraphNode,
      shape: this.shape,
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

  nodeById(id: string): FormNodeData {
    const dataGraphNode = DataFactory.namedNode(id);
    for (const _ of this.dataGraph.match(null, rdf.type, this.rdfType, null)) {
      return new FormNodeData({
        dataGraph: this.dataGraph,
        dataGraphNode,
        shape: this.shape,
      });
    }
    throw new RangeError("no such form node " + id);
  }

  get nodes(): readonly FormNodeData[] {
    return Object.values(this.nodesById);
  }

  private get nodesById(): {[index: string]: FormNodeData} {
    return this.dataGraph
      .match(null, rdf.type, this.rdfType, null)
      .reduce((map, quad) => {
        const subject = quad.subject;
        if (subject.termType === "NamedNode" && !map[subject.value]) {
          map[subject.value] = new FormNodeData({
            dataGraph: this.dataGraph,
            dataGraphNode: subject,
            shape: this.shape,
          });
        }
        return map;
      }, {} as {[index: string]: FormNodeData});
  }

  get shapesGraph(): ShapesGraph {
    return this.form.shapesGraph;
  }
}
