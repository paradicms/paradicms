import {DataFactory} from "@paradicms/rdf";
import {cms, dcterms} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {PropertyValue} from "../PropertyValue";
import {RightsMixin} from "../RightsMixin";
import {Text} from "../Text";
import {Work} from "../Work";
import {WorkAgent} from "../WorkAgent";
import {WorkEventUnion} from "../WorkEventUnion";
import {WorkLocation} from "../WorkLocation";
import {createPropertyValuesFromQuadObjects} from "../createPropertyValuesFromQuadObjects";
import {CmsDescriptionMixin} from "./CmsDescriptionMixin";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {CmsRelationsMixin} from "./CmsRelationsMixin";
import {CmsRightsMixin} from "./CmsRightsMixin";
import {CmsTitleMixin} from "./CmsTitleMixin";
import {Property} from "../Property";
import {CmsNamedModel} from "./CmsNamedModel";
import {mapTermToText} from "../mapTermToText";
import {mapTermToLocation} from "../mapTermToLocation";
import {mapTermToWorkEvent} from "../mapTermToWorkEvent";
import {OwlSameAsMixin} from "../owl/OwlSameAsMixin";

const getRightsWorkAgents = (
  rights: RightsMixin | null,
  rolePrefix: string
): readonly WorkAgent[] => {
  const result: WorkAgent[] = [];

  if (!rights) {
    return result;
  }

  for (const contributor of rights.contributors) {
    result.push({
      agent: contributor,
      role: rolePrefix + " contributor",
    });
  }

  for (const creator of rights.creators) {
    result.push({
      agent: creator,
      role: rolePrefix + " creator",
    });
  }

  for (const rightsHolder of rights.rightsHolders) {
    result.push({
      agent: rightsHolder,
      role: rolePrefix + " rights holder",
    });
  }

  return result;
};

export class CmsWork extends Mixin(
  CmsNamedModel,
  CmsDescriptionMixin,
  CmsImagesMixin,
  CmsTitleMixin,
  CmsRelationsMixin,
  CmsRightsMixin,
  OwlSameAsMixin
) implements Work {
  @Memoize()
  get agents(): readonly WorkAgent[] {
    const result: WorkAgent[] = [];

    result.push(...getRightsWorkAgents(this, "Work"));

    if (this.description) {
      result.push(...getRightsWorkAgents(this.description, "Text"));
    }

    return result;
  }

  @Memoize()
  override get description(): Text | null {
    return this.findAndMapObject(dcterms.description, term =>
      mapTermToText(this, term)
    );
  }

  @Memoize()
  get displayDate(): string | null {
    let startDisplayDate: string | undefined;
    let endDisplayDate: string | undefined;
    for (const workEvent of this.events) {
      switch (workEvent.type) {
        case "WorkClosing":
          if (!endDisplayDate && workEvent.displayDate) {
            endDisplayDate = workEvent.displayDate;
          }
          break;
        case "WorkCreation":
          if (!startDisplayDate && workEvent.displayDate) {
            startDisplayDate = workEvent.displayDate;
          }
          break;
        case "WorkOpening":
          if (!startDisplayDate && workEvent.displayDate) {
            startDisplayDate = workEvent.displayDate;
          }
          break;
      }
    }

    if (startDisplayDate && endDisplayDate) {
      return `${startDisplayDate} to ${endDisplayDate}`;
    } else if (startDisplayDate) {
      return startDisplayDate;
    } else {
      return null;
    }
  }


  @Memoize()
  get events(): readonly WorkEventUnion[] {
    return this.filterAndMapObjects(cms.event, term => mapTermToWorkEvent(this, term));
  }

  get label(): string {
    return this.title;
  }

  @Memoize()
  get location(): WorkLocation | null {
    const location = this.findAndMapObject(dcterms.spatial, term => mapTermToLocation(this, term));
    if (location) {
      return {
        label: this.title,
        location,
        role: "Current",
      };
    } else {
      return null;
    }
  }

  @Memoize()
  get propertyValues(): readonly PropertyValue[] {
    return this.modelSet.properties.flatMap(property => property.iris.flatMap(propertyIri => this.propertyValuesByProperty(property, propertyIri)));
  }

  private propertyValuesByProperty(property: Property, propertyIri: string): readonly PropertyValue[] {
    return createPropertyValuesFromQuadObjects({
      dataset: this.dataset,
      modelSet: this.modelSet,
      property,
      quads: [...this.dataset
          .match(
              this.identifier,
              DataFactory.namedNode(propertyIri),
              null,
              this.graph
          )]
    });
  }

  @Memoize()
  propertyValuesByPropertyIri(propertyIri: string): readonly PropertyValue[] {
    const property = this.modelSet.propertyByIri(propertyIri);
    if (!property) {
      return [];
    }
    return this.propertyValuesByProperty(property, propertyIri);
  }
}
