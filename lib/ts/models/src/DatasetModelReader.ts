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
      // console.warn(message);
    }
    // else {
    //   console.info(
    //     `graph (${RdfString.termToString(
    //       modelGraph
    //     )}) equals subject (${RdfString.termToString(modelNode)})`
    //   );
    // }
  }

  protected readNamedModels<NamedModelT extends Model>(kwds: {
    class_: NamedNode;
    factory: ResourceBackedModelFactory<NamedModelT>;
    modelSet: ModelSet;
    instanceOfPredicate?: NamedNode;
    subClassOfPredicate?: NamedNode;
  }): readonly NamedModelT[] {
    const namedModels: NamedModelT[] = [];
    // const namedModelIris: Set<string> = new Set<string>();
    for (const quad of getRdfInstanceQuads({
      class_: kwds.class_,
      dataset: this.dataset,
      instanceOfPredicate: kwds.instanceOfPredicate,
      subClassOfPredicate: kwds.subClassOfPredicate,
    }).values()) {
      if (quad.subject.termType === "NamedNode") {
        // invariant(
        //   !namedModelIris.has(quad.subject.value),
        //   "duplicate named model instance: " + quad.subject.value
        // );
        this.checkModelGraph({
          modelGraph: quad.graph as ModelGraphIdentifier,
          modelIdentifier: quad.subject,
        });
        namedModels.push(
          new kwds.factory({
            dataset: this.dataset,
            graph: quad.graph as ModelGraphIdentifier,
            identifier: quad.subject as NamedNode,
            modelSet: kwds.modelSet,
          })
        );
        // namedModelIris.add(quad.subject.value);
      }
    }
    return namedModels;
  }
}
