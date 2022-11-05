import {DataFactory, NamedNode, OTerm} from "n3";
import {Form} from "./Form";
import {FormNode} from "./FormNode";
import {RDF} from "@paradicms/vocabularies";

export class FormNodeType {
  readonly form: Form;
  readonly rdfType: NamedNode;

  constructor(kwds: {form: Form; rdfType: NamedNode}) {
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
}
