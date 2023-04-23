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

export abstract class DatasetModelReader implements ModelReader {
  constructor(protected readonly dataset: Dataset) {}

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
  }): readonly NamedModelT[] {
    const namedModels: NamedModelT[] = [];
    // const namedModelUris: Set<string> = new Set<string>();
    for (const quad of getRdfInstanceQuads({
      class_: kwds.class_,
      dataset: this.dataset,
    }).values()) {
      if (quad.subject.termType === "NamedNode") {
        // invariant(
        //   !namedModelUris.has(quad.subject.value),
        //   "duplicate named model instance: " + quad.subject.value
        // );
        namedModels.push(
          new kwds.factory({
            dataset: this.dataset,
            graphNode: quad.graph as DefaultGraph | BlankNode | NamedNode,
            modelSet: kwds.modelSet,
            node: quad.subject as NamedNode,
          })
        );
        // namedModelUris.add(quad.subject.value);
      }
    }
    return namedModels;
  }
}
