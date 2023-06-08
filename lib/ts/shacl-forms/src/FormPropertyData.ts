import {DataGraph, PropertyShape} from "@paradicms/shacl";
import {DatasetCore, NamedNode, Quad, Term} from "@rdfjs/types";
import {FormNodeData} from "./FormNodeData";
import {DataFactory, getRdfNodeLabel} from "@paradicms/rdf";
import TermMap from "@rdfjs/term-map";
import {NonNullable} from "@paradicms/utilities";

import {FormPropertyWidgetScorer} from "./FormPropertyWidgetScorer";
import {dashFormPropertyEditorScorers} from "./dashFormPropertyEditorScorers";
import {FormPropertyValue} from "./FormPropertyValue";
import {dashFormPropertyViewerScorers} from "./dashFormPropertyViewerScorers";
import {FormModel} from "./FormModel";

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

export class FormPropertyData extends FormModel {
  readonly formNode: FormNodeData;
  readonly shape: PropertyShape;

  constructor(kwds: {formNode: FormNodeData; shape: PropertyShape}) {
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
    let labelCandidate: string | null = null;
    for (labelCandidate of [
      this.shape.name,
      getRdfNodeLabel({dataset: this.dataGraph, node: this.path}),
      this.shape.nodeShapes.length === 1 ? this.shape.nodeShapes[0].name : null,
    ]) {
      if (labelCandidate) {
        return labelCandidate;
      }
    }

    return this.path.value;
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
      const {score, widget} = scorer({
        formProperty: this,
        formPropertyValues: thisValues,
      });
      if (score !== null && score > 0) {
        scores.set(widget, score);
      }
    }

    // if (scores.size > 0) {
    //   console.info("widget scores: ", [...scores.entries()]);
    // }

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
    const quadsToDelete: Quad[] = [];
    for (const quad of this.dataGraph.match(this.path)) {
      quadsToDelete.push(quad);
    }
    for (const quad of quadsToDelete) {
      this.dataGraph.delete(quad);
    }

    for (const term of terms) {
      this.dataGraph.add(DataFactory.quad(this.dataGraphNode, this.path, term));
    }
  }

  get viewer(): NamedNode | null {
    const viewer = this.shape.viewer;
    if (viewer) {
      return viewer;
    }

    return this.mostSuitableWidget(dashFormPropertyViewerScorers);
  }
}
