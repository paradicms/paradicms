import {getRdfInstanceQuads} from "@paradicms/rdf";
import {DatasetCore, NamedNode} from "@rdfjs/types";
import {ModelSet} from "./ModelSet";
import * as RdfString from "rdf-string";
import invariant from "ts-invariant";
import {ModelIdentifier} from "./ModelIdentifier";
import {ModelGraphIdentifier} from "./ModelGraphIdentifier";
import {PartialModelReader} from "./PartialModelReader";
import {ResourceBackedModelFactory} from "./ResourceBackedModelFactory";
import {Model} from "./Model";
import log from "loglevel";

export abstract class DatasetModelReader extends PartialModelReader {
  constructor(protected readonly dataset: DatasetCore) {
    super();
  }

  protected checkModelGraph(kwds: {
    modelGraph: ModelGraphIdentifier;
    modelIdentifier: ModelIdentifier;
  }): void {
    const {modelGraph, modelIdentifier} = kwds;
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
    // const namedModelIris: Set<string> = new Set<string>();
    for (const quad of getRdfInstanceQuads({
      class_: kwds.class_,
      dataset: this.dataset,
      includeSubclasses: kwds.includeSubclasses ?? false,
      instanceOfPredicate: kwds.instanceOfPredicate,
      subClassOfPredicate: kwds.subClassOfPredicate,
    }).values()) {
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
          graph: quad.graph as ModelGraphIdentifier,
          identifier: quad.subject as NamedNode,
          modelSet: kwds.modelSet,
        })
      );
    }
    return models;
  }

  protected readNamedModels<ModelT extends Model>(kwds: {
    class_: NamedNode;
    factory: ResourceBackedModelFactory<ModelT>;
    modelSet: ModelSet;
    includeSubclasses?: boolean;
    instanceOfPredicate?: NamedNode;
    subClassOfPredicate?: NamedNode;
  }): readonly ModelT[] {
    return this.readModels(kwds).filter(model => model.iris.length > 0);
  }
}
