import {
  getRdfInstanceQuads,
} from "@paradicms/rdf";
import { cms, configuration } from "@paradicms/vocabularies";
import {
  BlankNode,
  Dataset,
  DefaultGraph,
  NamedNode
} from "@rdfjs/types";
import { CachingModelSet } from "CachingModelSet";
import { CmsCollection } from "CmsCollection"; 
import { CmsConcept } from "CmsConcept";
import { CmsImage } from "CmsImage";
import { CmsLicense } from "CmsLicense";
import { CmsNamedLocation } from "CmsNamedLocation";
import { CmsOrganization } from "CmsOrganization";
import { CmsPerson } from "CmsPerson";
import { CmsProperty } from "CmsProperty";
import { CmsPropertyGroup } from "CmsPropertyGroup";
import { CmsRightsStatement } from "CmsRightsStatement";
import { CmsWork } from "CmsWork";
import { CmsWorkClosing } from "CmsWorkClosing";
import { CmsWorkCreation } from "CmsWorkCreation";
import { CmsWorkEvent } from "CmsWorkEvent";
import { CmsWorkOpening } from "CmsWorkOpening";
import { NamedLocation } from "NamedLocation";
import { AppConfiguration } from "./AppConfiguration";
import { Collection } from "./Collection";
import { Concept } from "./Concept";
import { Image } from "./Image";
import { License } from "./License";
import { NamedModel } from "./NamedModel";
import { Organization } from "./Organization";
import { Person } from "./Person";
import { Property } from "./Property";
import { PropertyGroup } from "./PropertyGroup";
import { ResourceBackedModelParameters } from "./ResourceBackedModelParameters";
import { RightsStatement } from "./RightsStatement";
import { Work } from "./Work";
import { WorkEvent } from "./WorkEvent";
import { DatasetBackedModelSet } from "DatasetBackedModelSet";

const workEventClassesByRdfType = (() => {
  const result: {
    [index: string]: {new (kwds: ResourceBackedModelParameters): CmsWorkEvent};
  } = {};
  result[cms.WorkClosing.value] = CmsWorkClosing;
  result[cms.WorkCreation.value] = CmsWorkCreation;
  result[cms.WorkOpening.value] = CmsWorkOpening;
  return result;
})();

export class CmsModelSet extends CachingModelSet implements DatasetBackedModelSet {
  protected constructor(readonly dataset: Dataset) {
    super();
  }

  protected override readAppConfiguration(): AppConfiguration | null {
    for (const quad of getRdfInstanceQuads({
      class_: configuration.AppConfiguration,
      dataset: this.dataset,
    }).values()) {
      return new AppConfiguration({
        graphNode: quad.graph as BlankNode | DefaultGraph | NamedNode,
        modelSet: this,
        node: quad.subject as BlankNode | NamedNode,
      });
    }
    return null;
  }

  protected override readWorkEvents(): readonly WorkEvent[] {
    const workEvents: CmsWorkEvent[] = [];
    for (const quad of getRdfInstanceQuads({
      class_: cms.WorkEvent,
      dataset: this.dataset,
    }).values()) {
      if (quad.subject.termType !== "NamedNode") {
        continue;
      }
      const workEventClass = workEventClassesByRdfType[quad.object.value];
      if (workEventClass) {
        workEvents.push(
          new workEventClass({
            graphNode: quad.graph as BlankNode | DefaultGraph | NamedNode,
            modelSet: this,
            node: quad.subject as BlankNode | NamedNode,
          })
        );
      }
    }
    return workEvents;
  }

  protected override readCollections(): readonly Collection[] {
    return this.readNamedModels(CmsCollection, cms.Collection);
  }

  protected override readConcepts(): readonly Concept[] {
    return this.readNamedModels(CmsConcept, cms.Concept);
  }

  protected override readImages(): readonly Image[] {
    return this.readNamedModels(CmsImage, cms.Image);
  }

  protected override readLicenses(): readonly License[] {
    return this.readNamedModels(CmsLicense, cms.License);
  }

  private readNamedModels<NamedModelT extends NamedModel>(
    factory: {new (kwds: ResourceBackedModelParameters): NamedModelT},
    type: NamedNode
  ): readonly NamedModelT[] {
    const namedModels: NamedModelT[] = [];
    for (const quad of getRdfInstanceQuads({
      class_: cms.Collection,
      dataset: this.dataset,
    }).values()) {
      if (quad.subject.termType === "NamedNode") {
        namedModels.push(new factory({
          graphNode: quad.graph as DefaultGraph | BlankNode | NamedNode,
          modelSet: this,
          node: quad.subject as NamedNode,
        }))
      }
    }
    return namedModels;
  }

  protected override readNamedLocations(): readonly NamedLocation[] {
    return this.readNamedModels(CmsNamedLocation, cms.Location);
  }

  protected override readOrganizations(): readonly Organization[] {
    return this.readNamedModels(CmsOrganization, cms.Organization);
  }

  protected override readPeople(): readonly Person[] {
    return this.readNamedModels(CmsPerson, cms.Person);
  }

  protected override readProperties(): readonly Property[] {
    return this.readNamedModels(CmsProperty, cms.Property);
  }

  protected override readPropertyGroups(): readonly PropertyGroup[] {
    return this.readNamedModels(CmsPropertyGroup, cms.PropertyGroup);
  }

  protected override readRightsStatements(): readonly RightsStatement[] {
    return this.readNamedModels(CmsRightsStatement, cms.RightsStatement);
  }

  protected override readWorks(): readonly Work[] {
    return this.readNamedModels(CmsWork, cms.Work);
  }
}
