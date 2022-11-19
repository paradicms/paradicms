import {DataGraph, PropertyShape, ShapesGraph} from "@paradicms/shacl";
import {BlankNode, Literal, NamedNode} from "@rdfjs/types";
import {FormNode} from "./FormNode";
import {Model} from "./Model";
import {TermMap} from "@paradicms/rdf";
import {dashEditorScorers} from "./DashFormPropertyWidgetScorers";

export class FormProperty extends Model {
  readonly formNode: FormNode;
  readonly shape: PropertyShape;

  constructor(kwds: {formNode: FormNode; shape: PropertyShape}) {
    super();
    this.formNode = kwds.formNode;
    this.shape = kwds.shape;
  }

  get dataGraph(): DataGraph {
    return this.formNode.dataGraph;
  }

  private get dataGraphNode() {
    return this.formNode.dataGraphNode;
  }

  get editor(): NamedNode | null {
    {
      const editor = this.shape.editor;
      if (editor) {
        return editor;
      }
    }

    const scores: TermMap<NamedNode, number> = new TermMap();
    const scorers = dashEditorScorers;
    for (const scorer of scorers) {
      const score = scorer.score(this);
      if (score !== null) {
        scores.put(scorer.widgetName, score);
      }
    }

    return null;
  }

  get path(): NamedNode {
    return this.shape.path;
  }

  get shapesGraph(): ShapesGraph {
    return this.formNode.shapesGraph;
  }

  get values(): readonly (BlankNode | Literal | NamedNode)[] {
    return this.dataGraph
      .match(this.dataGraphNode, this.path, null, null)
      .toArray()
      .map(quad => quad.object)
      .filter(object => {
        switch (object.termType) {
          case "BlankNode":
          case "Literal":
          case "NamedNode":
            return true;
          default:
            return false;
        }
      }) as (BlankNode | Literal | NamedNode)[];
  }
}
