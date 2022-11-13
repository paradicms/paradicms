import {DataFactory, NamedNode, OTerm} from "n3";
import {Form} from "./Form";
import {FormNode} from "./FormNode";
import {RDF} from "@paradicms/vocabularies";
import {Model} from "./Model";
import {DataGraph, ShapesGraph} from "@paradicms/shacl";

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
    this.form.dataGraph.store.add(
      DataFactory.quad(dataGraphNode, RDF.type, this.rdfType)
    );

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
    return this.form.dataGraph.store
      .getSubjects(RDF.type, this.rdfType, null as OTerm)
      .reduce((map, subject) => {
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
