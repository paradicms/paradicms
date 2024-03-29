import {getRdfInstanceQuads} from "@paradicms/rdf";
import {DatasetCore, NamedNode} from "@rdfjs/types";
import log from "loglevel";
import * as RdfString from "rdf-string";
import invariant from "ts-invariant";
import {Model} from "./Model";
import {ModelSet} from "./ModelSet";
import {PartialModelReader} from "./PartialModelReader";

import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";

type ResourceBackedModelFactory<ResourceBackedModelT> = {
  new (kwds: ResourceBackedModelParameters): ResourceBackedModelT;
};

export abstract class DatasetModelReader extends PartialModelReader {
  constructor(protected readonly dataset: DatasetCore) {
    super();
  }

  protected checkModelGraph(kwds: {
    modelGraph: NamedNode;
    modelIri: NamedNode;
  }): void {
    const {modelGraph, modelIri: modelIdentifier} = kwds;
    if (!modelGraph.equals(modelIdentifier)) {
      const message = `expected graph (${RdfString.termToString(
        modelGraph
      )}) to equal subject (${RdfString.termToString(modelIdentifier)})`;
      invariant(false, message);
      // log.warn(message);
    }
    // else {
    //   log.info(
    //     `graph (${RdfString.termToString(
    //       modelGraph
    //     )}) equals subject (${RdfString.termToString(modelNode)})`
    //   );
    // }
  }

  protected readModels<ModelT extends Model>(kwds: {
    class_: NamedNode;
    factory: ResourceBackedModelFactory<ModelT>;
    modelSet: ModelSet;
    includeSubclasses?: boolean;
    instanceOfPredicate?: NamedNode;
    subClassOfPredicate?: NamedNode;
  }): readonly ModelT[] {
    const models: ModelT[] = [];
    for (const quad of getRdfInstanceQuads({
      class_: kwds.class_,
      dataset: this.dataset,
      includeSubclasses: kwds.includeSubclasses ?? false,
      instanceOfPredicate: kwds.instanceOfPredicate,
      subClassOfPredicate: kwds.subClassOfPredicate,
    }).values()) {
      if (quad.graph.termType !== "NamedNode") {
        continue;
      }
      if (quad.subject.termType !== "NamedNode") {
        continue;
      }
      if (!quad.subject.equals(quad.graph)) {
        log.trace(
          "found model",
          quad.subject.value,
          "with class",
          kwds.class_.value,
          "that doesn't have its own graph"
        );
        continue;
      }

      models.push(
        new kwds.factory({
          dataset: this.dataset,
          graph: quad.graph as NamedNode,
          iri: quad.subject as NamedNode,
          modelSet: kwds.modelSet,
        })
      );
    }
    return models;
  }
}
