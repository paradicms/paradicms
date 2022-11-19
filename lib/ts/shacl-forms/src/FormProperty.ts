import {DataGraph, PropertyShape, ShapesGraph} from "@paradicms/shacl";
import {BlankNode, Literal, NamedNode} from "@rdfjs/types";
import {FormNode} from "./FormNode";
import {Model} from "./Model";
import {TermMap} from "@paradicms/rdf";
import {FormPropertyWidgetScorer} from "./FormPropertyWidgetScorer";
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

    return this.mostSuitableWidget(dashEditorScorers);
  }

  private mostSuitableWidget(
    scorers: readonly FormPropertyWidgetScorer[]
  ): NamedNode | null {
    const scores: TermMap<NamedNode, number> = new TermMap();

    for (const scorer of scorers) {
      const score = scorer.score(this);
      if (score !== null && score > 0) {
        scores.put(scorer.widgetName, score);
      }
    }

    const scoreEntries = scores.entries;
    switch (scoreEntries.length) {
      case 0:
        return null;
      case 1:
        return scoreEntries[0].key;
      default:
        return scoreEntries.reduce((highestScoreEntry, scoreEntry) => {
          if (
            !highestScoreEntry ||
            scoreEntry.value > highestScoreEntry.value
          ) {
            return scoreEntry;
          } else {
            return highestScoreEntry;
          }
        }, undefined as {key: NamedNode; value: number} | undefined)!.key;
    }
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
