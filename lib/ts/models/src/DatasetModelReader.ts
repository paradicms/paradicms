import {getRdfInstanceQuads} from "@paradicms/rdf";
import {BlankNode, Dataset, DefaultGraph, NamedNode} from "@rdfjs/types";
import {AppConfiguration} from "./AppConfiguration";
import {Collection} from "./Collection";
import {Concept} from "./Concept";
import {Image} from "./Image";
import {License} from "./License";
import {Location} from "./Location";
import {Model} from "./Model";
import {ModelReader} from "./ModelReader";
import {ModelSet} from "./ModelSet";
import {Organization} from "./Organization";
import {Person} from "./Person";
import {Property} from "./Property";
import {PropertyGroup} from "./PropertyGroup";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {RightsStatement} from "./RightsStatement";
import {Work} from "./Work";
import {WorkEventUnion} from "./WorkEventUnion";
import * as RdfString from "rdf-string";
import invariant from "ts-invariant"; // ts-ignore

export abstract class DatasetModelReader implements ModelReader {
  constructor(protected readonly dataset: Dataset) {}

  protected checkModelGraph(kwds: {
    modelGraph: BlankNode | DefaultGraph | NamedNode;
    modelNode: BlankNode | NamedNode;
  }): void {
    const {modelGraph, modelNode} = kwds;
    if (!modelGraph.equals(modelNode)) {
      const message = `expected graph (${RdfString.termToString(
        modelGraph
      )}) to equal subject (${RdfString.termToString(modelNode)})`;
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

  abstract readAppConfiguration(kwds: {
    modelSet: ModelSet;
  }): AppConfiguration | null;
  abstract readCollections(kwds: {modelSet: ModelSet}): readonly Collection[];
  abstract readConcepts(kwds: {modelSet: ModelSet}): readonly Concept[];
  abstract readImages(kwds: {modelSet: ModelSet}): readonly Image[];
  abstract readNamedLicenses(kwds: {modelSet: ModelSet}): readonly License[];
  abstract readNamedLocations(kwds: {modelSet: ModelSet}): readonly Location[];
  abstract readNamedOrganizations(kwds: {
    modelSet: ModelSet;
  }): readonly Organization[];
  abstract readNamedPeople(kwds: {modelSet: ModelSet}): readonly Person[];
  abstract readProperties(kwds: {modelSet: ModelSet}): readonly Property[];
  abstract readPropertyGroups(kwds: {
    modelSet: ModelSet;
  }): readonly PropertyGroup[];
  abstract readNamedRightsStatements(kwds: {
    modelSet: ModelSet;
  }): readonly RightsStatement[];
  abstract readWorkEvents(kwds: {
    modelSet: ModelSet;
  }): readonly WorkEventUnion[];
  abstract readWorks(kwds: {modelSet: ModelSet}): readonly Work[];

  protected readNamedModels<NamedModelT extends Model>(kwds: {
    class_: NamedNode;
    factory: {new (kwds: ResourceBackedModelParameters): NamedModelT};
    modelSet: ModelSet;
    instanceOfPredicate?: NamedNode;
    subClassOfPredicate?: NamedNode;
  }): readonly NamedModelT[] {
    const namedModels: NamedModelT[] = [];
    // const namedModelUris: Set<string> = new Set<string>();
    for (const quad of getRdfInstanceQuads({
      class_: kwds.class_,
      dataset: this.dataset,
      instanceOfPredicate: kwds.instanceOfPredicate,
      subClassOfPredicate: kwds.subClassOfPredicate,
    }).values()) {
      if (quad.subject.termType === "NamedNode") {
        // invariant(
        //   !namedModelUris.has(quad.subject.value),
        //   "duplicate named model instance: " + quad.subject.value
        // );
        this.checkModelGraph({
          modelGraph: quad.graph as DefaultGraph | BlankNode | NamedNode,
          modelNode: quad.subject,
        });
        namedModels.push(
          new kwds.factory({
            dataset: this.dataset,
            graph: quad.graph as DefaultGraph | BlankNode | NamedNode,
            identifier: quad.subject as NamedNode,
            modelSet: kwds.modelSet,
          })
        );
        // namedModelUris.add(quad.subject.value);
      }
    }
    return namedModels;
  }
}
