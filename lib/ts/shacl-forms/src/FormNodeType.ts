import {DataFactory} from "n3";
import {Form} from "./Form";
import {FormNode} from "./FormNode";
import {rdf} from "@paradicms/vocabularies";
import {Model} from "./Model";
import {DataGraph, ShapesGraph} from "@paradicms/shacl";
import {NamedNode} from "@rdfjs/types";

export class FormNodeType extends Model {
  readonly form: Form;
  readonly rdfType: NamedNode;

  constructor(kwds: {form: Form; rdfType: NamedNode}) {
    super();
    this.form = kwds.form;
    this.rdfType = kwds.rdfType;
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

  get nodes(): readonly FormNode[] {
    return Object.values(this.nodesByUri);
  }

  get nodesByUri(): {[index: string]: FormNode} {
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
