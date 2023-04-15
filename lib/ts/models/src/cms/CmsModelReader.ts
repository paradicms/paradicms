import {getRdfInstanceQuads} from "@paradicms/rdf";
import {cms, configuration, rdf} from "@paradicms/vocabularies";
import {BlankNode, DefaultGraph, NamedNode} from "@rdfjs/types";
import {AppConfiguration} from "../AppConfiguration";
import {Collection} from "../Collection";
import {Concept} from "../Concept";
import {DatasetModelReader} from "../DatasetModelReader";
import {Image} from "../Image";
import {License} from "../License";
import {ModelSet} from "../ModelSet";
import {NamedLocation} from "../NamedLocation";
import {Organization} from "../Organization";
import {Person} from "../Person";
import {Property} from "../Property";
import {PropertyGroup} from "../PropertyGroup";
import {ResourceBackedModelParameters} from "../ResourceBackedModelParameters";
import {RightsStatement} from "../RightsStatement";
import {Work} from "../Work";
import {WorkEvent} from "../WorkEvent";
import {CmsCollection} from "./CmsCollection";
import {CmsConcept} from "./CmsConcept";
import {CmsImage} from "./CmsImage";
import {CmsLicense} from "./CmsLicense";
import {CmsNamedLocation} from "./CmsNamedLocation";
import {CmsOrganization} from "./CmsOrganization";
import {CmsPerson} from "./CmsPerson";
import {CmsProperty} from "./CmsProperty";
import {CmsPropertyGroup} from "./CmsPropertyGroup";
import {CmsRightsStatement} from "./CmsRightsStatement";
import {CmsWork} from "./CmsWork";
import {CmsWorkClosing} from "./CmsWorkClosing";
import {CmsWorkCreation} from "./CmsWorkCreation";
import {CmsWorkEvent} from "./CmsWorkEvent";
import {CmsWorkOpening} from "./CmsWorkOpening";

const workEventClassesByRdfType = (() => {
  const result: {
    [index: string]: {new (kwds: ResourceBackedModelParameters): CmsWorkEvent};
  } = {};
  result[cms.WorkClosing.value] = CmsWorkClosing;
  result[cms.WorkCreation.value] = CmsWorkCreation;
  result[cms.WorkOpening.value] = CmsWorkOpening;
  return result;
})();

export class CmsModelReader extends DatasetModelReader {
  readAppConfiguration(kwds: {modelSet: ModelSet}): AppConfiguration | null {
    for (const quad of getRdfInstanceQuads({
      class_: configuration.AppConfiguration,
      dataset: this.dataset,
    }).values()) {
      return new AppConfiguration({
        dataset: this.dataset,
        modelSet: kwds.modelSet,
        graphNode: quad.graph as BlankNode | DefaultGraph | NamedNode,
        node: quad.subject as BlankNode | NamedNode,
      });
    }
    return null;
  }

  readCollections(kwds: {modelSet: ModelSet}): readonly Collection[] {
    return this.readNamedModels({
      class_: cms.Collection,
      factory: CmsCollection,
      ...kwds,
    });
  }

  readConcepts(kwds: {modelSet: ModelSet}): readonly Concept[] {
    return this.readNamedModels({
      class_: cms.Concept,
      factory: CmsConcept,
      ...kwds,
    });
  }

  readImages(kwds: {modelSet: ModelSet}): readonly Image[] {
    return this.readNamedModels({
      class_: cms.Image,
      factory: CmsImage,
      ...kwds,
    });
  }

  readLicenses(kwds: {modelSet: ModelSet}): readonly License[] {
    return this.readNamedModels({
      class_: cms.License,
      factory: CmsLicense,
      ...kwds,
    });
  }

  readNamedLocations(kwds: {modelSet: ModelSet}): readonly NamedLocation[] {
    return this.readNamedModels({
      class_: cms.Location,
      factory: CmsNamedLocation,
      ...kwds,
    });
  }

  readOrganizations(kwds: {modelSet: ModelSet}): readonly Organization[] {
    return this.readNamedModels({
      class_: cms.Organization,
      factory: CmsOrganization,
      ...kwds,
    });
  }

  readPeople(kwds: {modelSet: ModelSet}): readonly Person[] {
    return this.readNamedModels({
      class_: cms.Person,
      factory: CmsPerson,
      ...kwds,
    });
  }

  readProperties(kwds: {modelSet: ModelSet}): readonly Property[] {
    return this.readNamedModels({
      class_: cms.Property,
      factory: CmsProperty,
      ...kwds,
    });
  }

  readPropertyGroups(kwds: {modelSet: ModelSet}): readonly PropertyGroup[] {
    return this.readNamedModels({
      class_: cms.PropertyGroup,
      factory: CmsPropertyGroup,
      ...kwds,
    });
  }

  readRightsStatements(kwds: {modelSet: ModelSet}): readonly RightsStatement[] {
    return this.readNamedModels({
      class_: cms.RightsStatement,
      factory: CmsRightsStatement,
      ...kwds,
    });
  }

  readWorkEvents(kwds: {modelSet: ModelSet}): readonly WorkEvent[] {
    const workEvents: CmsWorkEvent[] = [];
    for (const quad of getRdfInstanceQuads({
      class_: cms.WorkEvent,
      dataset: this.dataset,
    }).values()) {
      if (quad.subject.termType !== "NamedNode") {
        continue;
      }
      for (const rdfTypeQuad of this.dataset.match(
        quad.subject,
        rdf.type,
        null,
        quad.graph
      )) {
        if (
          rdfTypeQuad.object.termType !== "NamedNode" ||
          rdfTypeQuad.object.equals(cms.Event) ||
          rdfTypeQuad.object.equals(cms.WorkEvent)
        ) {
          continue;
        }
        const workEventClass =
          workEventClassesByRdfType[rdfTypeQuad.object.value];
        if (workEventClass) {
          workEvents.push(
            new workEventClass({
              dataset: this.dataset,
              graphNode: quad.graph as BlankNode | DefaultGraph | NamedNode,
              modelSet: kwds.modelSet,
              node: quad.subject as BlankNode | NamedNode,
            })
          );
          break;
        }
      }
    }
    return workEvents;
  }

  readWorks(kwds: {modelSet: ModelSet}): readonly Work[] {
    return this.readNamedModels({
      class_: cms.Work,
      factory: CmsWork,
      ...kwds,
    });
  }
}
