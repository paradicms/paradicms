import {DataGraph, PropertyShape, ShapesGraph} from "@paradicms/shacl";
import {DatasetCore, NamedNode, Term} from "@rdfjs/types";
import {FormNode} from "./FormNode";
import {Model} from "./Model";
import {DataFactory} from "@paradicms/rdf";
import TermMap from "@rdfjs/term-map";
import {NonNullable} from "@paradicms/utilities";

import {FormPropertyWidgetScorer} from "./FormPropertyWidgetScorer";
import {dashFormPropertyEditorScorers} from "./dashFormPropertyEditorScorers";
import {rdfs} from "@paradicms/vocabularies";
import {FormPropertyValue} from "./FormPropertyValue";
import {dashFormPropertyViewerScorers} from "./dashFormPropertyViewerScorers";

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
    const editor = this.shape.editor;
    if (editor) {
      return editor;
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
  ): readonly NonNullable<T>[] {
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

  get id(): string {
    return this.path.value;
  }

  get label(): string {
    return this.shape.name ?? this.pathLabel ?? this.path.value;
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
        scores.set(scorer.widgetName, score);
      }
    }

    if (scores.size > 0) {
      console.info("widget scores: ", [...scores.entries()]);
    }

    const scoreEntries = [...scores.entries()];
    switch (scoreEntries.length) {
      case 0:
        return null;
      case 1:
        return scoreEntries[0][0];
      default:
        return scoreEntries.reduce((highestScoreEntry, scoreEntry) => {
          if (!highestScoreEntry || scoreEntry[1] > highestScoreEntry[1]) {
            return scoreEntry;
          } else {
            return highestScoreEntry;
          }
        }, undefined as [NamedNode, Number] | undefined)![0];
    }
  }

  get path(): NamedNode {
    return this.shape.path;
  }

  private get pathLabel(): string | null {
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

  get shapesGraph(): ShapesGraph {
    return this.formNode.shapesGraph;
  }

  set value(term: FormPropertyValue) {
    this.values = [term];
  }

  get values(): readonly FormPropertyValue[] {
    const values: FormPropertyValue[] = [];
    for (const valueQuad of this.matchValues()) {
      values.push(checkFormPropertyValueTermType(valueQuad.object));
    }
    return values;
  }

  set values(terms: readonly FormPropertyValue[]) {
    this.dataGraph.deleteMatches(this.dataGraphNode, this.path);
    this.dataGraph.addAll(
      terms.map(term => DataFactory.quad(this.dataGraphNode, this.path, term))
    );
  }

  get viewer(): NamedNode | null {
    const viewer = this.shape.viewer;
    if (viewer) {
      return viewer;
    }

    return this.mostSuitableWidget(dashFormPropertyViewerScorers);
  }
}
