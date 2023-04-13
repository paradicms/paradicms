import {Collection} from "./Collection";
import {Text} from "./Text";
import {Memoize} from "typescript-memoize";
import {PropertyValue} from "./PropertyValue";
import {WorkAgent} from "./WorkAgent";
import {Mixin} from "ts-mixer";
import {DataFactory} from "@paradicms/rdf";
import {WorkEvent} from "./WorkEvent";
import {WorkLocation} from "./WorkLocation";
import {cms, dcterms} from "@paradicms/vocabularies";
import {mapTextObject} from "./mapTextObject";
import {createPropertyValuesFromQuadObjects} from "./createPropertyValuesFromQuadObjects";
import {mapLocationObject} from "./mapLocationObject";
import {WorkClosing} from "./WorkClosing";
import {WorkOpening} from "./WorkOpening";
import {WorkCreation} from "./WorkCreation";
import {CmsDescriptionMixin} from "./CmsDescriptionMixin";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {CmsPageMixin} from "./CmsPageMixin";
import {CmsTitleMixin} from "./CmsTitleMixin";
import {CmsRelationsMixin} from "./CmsRelationsMixin";
import {CmsRightsMixin} from "./CmsRightsMixin";
import {RightsMixin} from "./RightsMixin";
import {ResourceBackedNamedModel} from "./ResourceBackedNamedModel";
import {Work} from "./Work";
import {CmsText} from "./CmsText";
import {CmsLocation} from "CmsLocation";

const getRightsAgentUris = (
    rights: RightsMixin | null
): readonly string[] => {
  const result: string[] = [];

  if (!rights) {
    return result;
  }

  result.push(...rights.contributorAgentUris);
  result.push(...rights.creatorAgentUris);
  result.push(...rights.rightsHolderAgentUris);

  return result;
};

const getRightsWorkAgents = (
  rights: RightsMixin | null,
  rolePrefix: string
): readonly WorkAgent[] => {
  const result: WorkAgent[] = [];

  if (!rights) {
    return result;
  }

  for (const contributorAgent of rights.contributorAgents) {
    result.push({
      agent: contributorAgent,
      role: rolePrefix + " contributor",
    });
  }

  for (const creatorAgent of rights.creatorAgents) {
    result.push({
      agent: creatorAgent,
      role: rolePrefix + " creator",
    });
  }

  for (const holderAgent of rights.rightsHolderAgents) {
    result.push({
      agent: holderAgent,
      role: rolePrefix + " holder",
    });
  }

  return result;
};

export class CmsWork extends Mixin(
  ResourceBackedNamedModel,
  CmsDescriptionMixin,
  CmsImagesMixin,
  CmsPageMixin,
  CmsTitleMixin,
  CmsRelationsMixin,
  CmsRightsMixin
) implements Work {
  @Memoize()
  get agents(): readonly WorkAgent[] {
    const result: WorkAgent[] = [];

    result.push(...getRightsWorkAgents(this, "Work"));

    if (this.description && this.description instanceof CmsText) {
      result.push(...getRightsWorkAgents(this.description, "Text"));
    }

    for (const image of this.originalImages) {
      result.push(...getRightsWorkAgents(image, "Image"));
    }

    return result;
  }

  @Memoize()
  get agentUris(): readonly string[] {
    const result: string[] = [];
    result.push(...getRightsAgentUris(this));

    if (
      this.description &&
      this.description instanceof CmsText
    ) {
      result.push(...getRightsAgentUris(this.description));
    }

    for (const image of this.originalImages) {
      result.push(...getRightsAgentUris(image));
    }

    return result;
  }

  get collections(): readonly Collection[] {
    return this.collectionUris.map(collectionUri =>
      this.modelSet.collectionByUri(collectionUri)
    );
  }

  @Memoize()
  get collectionUris(): readonly string[] {
    return this.filterAndMapObjects(cms.collection, this.mapUriObject);
  }

  @Memoize()
  override get description(): string | Text | null {
    return this.findAndMapObject(dcterms.description, term =>
      mapTextObject(this, term)
    );
  }

  @Memoize()
  get displayDate(): string | null {
    let startDisplayDate: string | undefined;
    let endDisplayDate: string | undefined;
    for (const event of this.events) {
      event.accept({
        visitWorkClosing(workClosing: WorkClosing): void {
          if (!endDisplayDate && workClosing.displayDate) {
            endDisplayDate = workClosing.displayDate;
          }
        },
        visitWorkCreation(workCreation: WorkCreation): void {
          if (!startDisplayDate && workCreation.displayDate) {
            startDisplayDate = workCreation.displayDate;
          }
        },
        visitWorkOpening(workOpening: WorkOpening): void {
          if (!startDisplayDate && workOpening.displayDate) {
            startDisplayDate = workOpening.displayDate;
          }
        }
      });
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
  get events(): readonly WorkEvent[] {
    return this.modelSet.workEventsByWork(this.uri);
  }

  @Memoize()
  get location(): WorkLocation | null {
    const location = this.findAndMapObject(dcterms.spatial, term => mapLocationObject(this, term));
    if (location && location instanceof CmsLocation) {
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
    return createPropertyValuesFromQuadObjects(
      this.modelSet,
      this.dataset
        .match(
          this.node,
          DataFactory.namedNode(propertyUri),
          null,
          this.graphNode
        )
        .toArray()
    );
  }
}
