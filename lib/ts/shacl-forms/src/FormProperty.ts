import {DataGraph, PropertyShape, ShapesGraph} from "@paradicms/shacl";
import {DatasetCore, NamedNode, Term} from "@rdfjs/types";
import {FormNode} from "./FormNode";
import {Model} from "./Model";
import {DataFactory, TermMap} from "@paradicms/rdf";
import {FormPropertyWidgetScorer} from "./FormPropertyWidgetScorer";
import {dashFormPropertyEditorScorers} from "./dashFormPropertyEditorScorers";
import {rdfs} from "@paradicms/vocabularies";
import {NonNullable} from "@paradicms/utilities";
import {FormPropertyValue} from "./FormPropertyValue";

const checkFormPropertyValueTermType = (term: Term): FormPropertyValue => {
  switch (term.termType) {
    case "BlankNode":
    case "Literal":
    case "NamedNode":
      return term;
    default:
      throw new EvalError(
        "unexpected form property value type: " + term.termType
      );
  }
};

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

    return this.mostSuitableWidget(dashFormPropertyEditorScorers);
  }

  findAndMapValue<T>(
    callback: (value: FormPropertyValue) => NonNullable<T> | null
  ): NonNullable<T> | null {
    for (const valueQuad of this.matchValues()) {
      const mappedValue = callback(
        checkFormPropertyValueTermType(valueQuad.object)
      );
      if (mappedValue !== null) {
        return mappedValue;
      }
    }
    return null;
  }

  filterAndMapValues<T>(
    callback: (value: FormPropertyValue) => NonNullable<T> | null
  ): readonly NonNullable<T>[] | null {
    const mappedValues: NonNullable<T>[] = [];
    for (const valueQuad of this.matchValues()) {
      const mappedValue = callback(
        checkFormPropertyValueTermType(valueQuad.object)
      );
      if (mappedValue !== null) {
        mappedValues.push(mappedValue);
      }
    }
    return mappedValues;
  }

  private matchValues(): DatasetCore {
    return this.dataGraph.match(this.dataGraphNode, this.path, null, null);
  }

  private mostSuitableWidget(
    scorers: readonly FormPropertyWidgetScorer[]
  ): NamedNode | null {
    const scores: TermMap<NamedNode, number> = new TermMap();
    const thisValues = this.values;

    for (const scorer of scorers) {
      const score = scorer.score(this, thisValues);
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

  get name(): string | null {
    const shName = this.shape.name;
    if (shName) {
      return shName;
    }

    for (const rdfsLabelQuad of this.dataGraph.match(
      this.path,
      rdfs.label,
      null,
      null
    )) {
      if (rdfsLabelQuad.object.termType === "Literal") {
        return rdfsLabelQuad.object.value;
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

  set value(term: FormPropertyValue) {
    this.values = [term];
  }

  set values(terms: readonly FormPropertyValue[]) {
    this.dataGraph.deleteMatches(this.dataGraphNode, this.path);
    this.dataGraph.addAll(
      terms.map(term => DataFactory.quad(this.dataGraphNode, this.path, term))
    );
  }
}
