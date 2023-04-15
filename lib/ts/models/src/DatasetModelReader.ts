import {getRdfInstanceQuads} from "@paradicms/rdf";
import {ModelReader} from "./ModelReader";
import {NamedModel} from "./NamedModel";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {DefaultGraph, BlankNode, Dataset, NamedNode} from "@rdfjs/types";
import {ModelSet} from "./ModelSet";

export abstract class DatasetModelReader implements ModelReader {
  protected constructor(protected readonly dataset: Dataset) {}

  protected readNamedModels<NamedModelT extends NamedModel>(kwds: {
    class_: NamedNode;
    factory: {new (kwds: ResourceBackedModelParameters): NamedModelT};
    modelSet: ModelSet;
  }): readonly NamedModelT[] {
    const namedModels: NamedModelT[] = [];
    for (const quad of getRdfInstanceQuads({
      class_: kwds.class_,
      dataset: this.dataset,
    }).values()) {
      if (quad.subject.termType === "NamedNode") {
        namedModels.push(
          new kwds.factory({
            graphNode: quad.graph as DefaultGraph | BlankNode | NamedNode,
            modelSet: this,
            node: quad.subject as NamedNode,
          })
        );
      }
    }
    return namedModels;
  }
}
