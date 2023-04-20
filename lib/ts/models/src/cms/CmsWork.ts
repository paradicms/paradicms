import { DataFactory } from "@paradicms/rdf";
import { cms, dcterms } from "@paradicms/vocabularies";
import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { Collection } from "../Collection";
import { PropertyValue } from "../PropertyValue";
import { ResourceBackedNamedModel } from "../ResourceBackedNamedModel";
import { RightsMixin } from "../RightsMixin";
import { Text } from "../Text";
import { Work } from "../Work";
import { WorkAgent } from "../WorkAgent";
import { WorkEventUnion } from "../WorkEventUnion";
import { WorkLocation } from "../WorkLocation";
import { createPropertyValuesFromQuadObjects } from "../createPropertyValuesFromQuadObjects";
import { mapLocationObject } from "../mapLocationObject";
import { mapTextObject } from "../mapTextObject";
import { CmsDescriptionMixin } from "./CmsDescriptionMixin";
import { CmsImagesMixin } from "./CmsImagesMixin";
import { CmsRelationsMixin } from "./CmsRelationsMixin";
import { CmsRightsMixin } from "./CmsRightsMixin";
import { CmsTitleMixin } from "./CmsTitleMixin";

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
  ResourceBackedNamedModel,
  CmsDescriptionMixin,
  CmsImagesMixin,
  CmsTitleMixin,
  CmsRelationsMixin,
  CmsRightsMixin
) implements Work {
  @Memoize()
  get agents(): readonly WorkAgent[] {
    const result: WorkAgent[] = [];

    result.push(...getRightsWorkAgents(this, "Work"));

    if (this.description && typeof this.description !== "string") {
      result.push(...getRightsWorkAgents(this.description, "Text"));
    }

    for (const image of this.originalImages) {
      result.push(...getRightsWorkAgents(image, "Image"));
    }

    return result;
  }

  get collections(): readonly Collection[] {
    return this.filterAndMapObjects(cms.collection, collection => collection.termType === "NamedNode" ? this.modelSet.collectionByUri(collection.value) : null);
  }

  @Memoize()
  override get description(): Text | null {
    return this.findAndMapObject(dcterms.description, term =>
      mapTextObject(this, term)
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
    return this.modelSet.workEventsByWorkUri(this.uri);
  }

  get label(): string {
    return this.title;
  }

  @Memoize()
  get location(): WorkLocation | null {
    const location = this.findAndMapObject(dcterms.spatial, term => mapLocationObject(this, term));
    if (location && typeof location !== "string") {
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
  propertyValues(propertyUri: string): readonly PropertyValue[] {
    return createPropertyValuesFromQuadObjects({
      dataset: this.dataset, 
      modelSet: this.modelSet,
      quads: this.dataset
        .match(
          this.node,
          DataFactory.namedNode(propertyUri),
          null,
          this.graphNode
        )
        .toArray()
        });
  }
}
