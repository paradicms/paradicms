import {getNamedRdfTypes, getRdfInstanceQuads} from "@paradicms/rdf";
import {cms, configuration} from "@paradicms/vocabularies";
import {AppConfiguration} from "../AppConfiguration";
import {Collection} from "../Collection";
import {DatasetModelReader} from "../DatasetModelReader";
import {Image} from "../Image";
import {License} from "../License";
import {Location} from "../Location";
import {ModelSet} from "../ModelSet";
import {PropertyGroup} from "../PropertyGroup";
import {ResourceBackedModelParameters} from "../ResourceBackedModelParameters";
import {RightsStatement} from "../RightsStatement";
import {Work} from "../Work";
import {WorkEventUnion} from "../WorkEventUnion";
import {CmsCollection} from "./CmsCollection";
import {CmsImage} from "./CmsImage";
import {CmsLicense} from "./CmsLicense";
import {CmsLocation} from "./CmsLocation";
import {CmsPropertyGroup} from "./CmsPropertyGroup";
import {CmsRightsStatement} from "./CmsRightsStatement";
import {CmsWork} from "./CmsWork";
import {CmsWorkClosing} from "./CmsWorkClosing";
import {CmsWorkCreation} from "./CmsWorkCreation";
import {CmsWorkOpening} from "./CmsWorkOpening";
import {ModelIdentifier} from "../ModelIdentifier";
import {ModelGraphIdentifier} from "../ModelGraphIdentifier";
import {BlankNode, DefaultGraph, NamedNode} from "@rdfjs/types";

const workEventClassesByRdfType = (() => {
  const result: {
    [index: string]: {
      new (kwds: ResourceBackedModelParameters): WorkEventUnion;
    };
  } = {};
  result[cms.WorkClosing.value] = CmsWorkClosing;
  result[cms.WorkCreation.value] = CmsWorkCreation;
  result[cms.WorkOpening.value] = CmsWorkOpening;
  return result;
})();

export class CmsModelReader extends DatasetModelReader {
  override readAppConfiguration(kwds: {modelSet: ModelSet}): AppConfiguration | null {
    for (const quad of getRdfInstanceQuads({
      class_: configuration.AppConfiguration,
      dataset: this.dataset,
    }).values()) {
      this.checkModelGraph({
        modelGraph: quad.graph as ModelGraphIdentifier,
        modelIdentifier: quad.subject as ModelIdentifier,
      });
      return new AppConfiguration({
        dataset: this.dataset,
        modelSet: kwds.modelSet,
        graph: quad.graph as ModelGraphIdentifier,
        identifier: quad.subject as ModelIdentifier,
      });
    }
    return null;
  }

  override readCollections(kwds: {modelSet: ModelSet}): readonly Collection[] {
    return this.readNamedModels({
      class_: cms.Collection,
      factory: CmsCollection,
      ...kwds,
    });
  }

  override readImages(kwds: {modelSet: ModelSet}): readonly Image[] {
    return this.readNamedModels({
      class_: cms.Image,
      factory: CmsImage,
      ...kwds,
    });
  }

  override readNamedLicenses(kwds: {modelSet: ModelSet}): readonly License[] {
    return this.readNamedModels({
      class_: cms.License,
      factory: CmsLicense,
      ...kwds,
    });
  }

  override readNamedLocations(kwds: {modelSet: ModelSet}): readonly Location[] {
    return this.readNamedModels({
      class_: cms.Location,
      factory: CmsLocation,
      ...kwds,
    });
  }

  override readPropertyGroups(kwds: {modelSet: ModelSet}): readonly PropertyGroup[] {
    return this.readNamedModels({
      class_: cms.PropertyGroup,
      factory: CmsPropertyGroup,
      ...kwds,
    });
  }

  override readNamedRightsStatements(kwds: {
    modelSet: ModelSet;
  }): readonly RightsStatement[] {
    return this.readNamedModels({
      class_: cms.RightsStatement,
      factory: CmsRightsStatement,
      ...kwds,
    });
  }

  override readWorkEvents(kwds: {modelSet: ModelSet}): readonly WorkEventUnion[] {
    const workEvents: WorkEventUnion[] = [];
    for (const quad of getRdfInstanceQuads({
      class_: cms.WorkEvent,
      dataset: this.dataset,
    }).values()) {
      if (!quad.subject.equals(quad.graph)) {
        continue;
      }

      // Get the concrete type of the WorkEvent.
      for (const rdfType of getNamedRdfTypes({dataset: this.dataset, graph: quad.graph as BlankNode | DefaultGraph | NamedNode, subject: quad.subject as BlankNode | NamedNode})) {
        if (
          rdfType.equals(cms.Event) ||
          rdfType.equals(cms.WorkEvent)
        ) {
          continue;
        }
        this.checkModelGraph({
          modelGraph: quad.graph as ModelGraphIdentifier,
          modelIdentifier: quad.subject as ModelIdentifier,
        });
        const workEventClass =
          workEventClassesByRdfType[rdfType.value];
        if (workEventClass) {
          workEvents.push(
            new workEventClass({
              dataset: this.dataset,
              graph: quad.graph as ModelGraphIdentifier,
              modelSet: kwds.modelSet,
              identifier: quad.subject as ModelIdentifier,
            })
          );
          break;
        }
      }
    }
    return workEvents;
  }

  override readWorks(kwds: {modelSet: ModelSet}): readonly Work[] {
    return this.readNamedModels({
      class_: cms.Work,
      factory: CmsWork,
      ...kwds,
    });
  }
}
