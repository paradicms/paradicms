import {getRdfInstanceQuads} from "@paradicms/rdf";
import {ModelReader} from "./ModelReader";
import {NamedModel} from "./NamedModel";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {DefaultGraph, BlankNode, Dataset, NamedNode} from "@rdfjs/types";
import {ModelSet} from "./ModelSet";
import {AppConfiguration} from "./AppConfiguration";
import {Collection} from "./Collection";
import {Concept} from "./Concept";
import {Image} from "./Image";
import {License} from "./License";
import {NamedLocation} from "./NamedLocation";
import {Organization} from "./Organization";
import {Person} from "./Person";
import {Property} from "./Property";
import {PropertyGroup} from "./PropertyGroup";
import {RightsStatement} from "./RightsStatement";
import {Work} from "./Work";
import {WorkEvent} from "./WorkEvent";

export abstract class DatasetModelReader implements ModelReader {
  constructor(protected readonly dataset: Dataset) {}

  abstract readAppConfiguration(kwds: {
    modelSet: ModelSet;
  }): AppConfiguration | null;
  abstract readCollections(kwds: {modelSet: ModelSet}): readonly Collection[];
  abstract readConcepts(kwds: {modelSet: ModelSet}): readonly Concept[];
  abstract readImages(kwds: {modelSet: ModelSet}): readonly Image[];
  abstract readLicenses(kwds: {modelSet: ModelSet}): readonly License[];
  abstract readNamedLocations(kwds: {
    modelSet: ModelSet;
  }): readonly NamedLocation[];
  abstract readOrganizations(kwds: {
    modelSet: ModelSet;
  }): readonly Organization[];
  abstract readPeople(kwds: {modelSet: ModelSet}): readonly Person[];
  abstract readProperties(kwds: {modelSet: ModelSet}): readonly Property[];
  abstract readPropertyGroups(kwds: {
    modelSet: ModelSet;
  }): readonly PropertyGroup[];
  abstract readRightsStatements(kwds: {
    modelSet: ModelSet;
  }): readonly RightsStatement[];
  abstract readWorkEvents(kwds: {modelSet: ModelSet}): readonly WorkEvent[];
  abstract readWorks(kwds: {modelSet: ModelSet}): readonly Work[];

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
            dataset: this.dataset,
            graphNode: quad.graph as DefaultGraph | BlankNode | NamedNode,
            modelSet: kwds.modelSet,
            node: quad.subject as NamedNode,
          })
        );
      }
    }
    return namedModels;
  }
}
