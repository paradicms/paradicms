import {NamedModel} from "./NamedModel";
import {Collection} from "./Collection";
import {Rights} from "./Rights";
import {Text} from "./Text";
import {Memoize} from "typescript-memoize";
import {PropertyValue} from "./PropertyValue";
import {WorkAgent} from "./WorkAgent";
import {Mixin} from "ts-mixer";
import {DataFactory} from "@paradicms/rdf";
import {HasDescription, HasImages, HasPage, HasRelations, HasRights, HasTitle,} from "./mixins";
import {WorkEvent} from "./WorkEvent";
import {WorkLocation} from "./WorkLocation";
import {cms, dcterms} from "@paradicms/vocabularies";
import {mapTextObject} from "./mapTextObject";
import {createPropertyValuesFromQuadObjects} from "./createPropertyValuesFromQuadObjects";
import {mapLocationObject} from "./mapLocationObject";
import {Location} from "./Location";

const getRightsWorkAgents = (
  rights: Rights | null,
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

  for (const holderAgent of rights.holderAgents) {
    result.push({
      agent: holderAgent,
      role: rolePrefix + " holder",
    });
  }

  return result;
};

export class Work extends Mixin(
  NamedModel,
  HasDescription,
  HasImages,
  HasPage,
  HasTitle,
  HasRelations,
  HasRights
) {
  @Memoize()
  get agents(): readonly WorkAgent[] {
    const result: WorkAgent[] = [];

    result.push(...getRightsWorkAgents(this.rights, "Work"));

    if (this.description && this.description instanceof Text) {
      result.push(...getRightsWorkAgents(this.description.rights, "Text"));
    }

    for (const image of this.originalImages) {
      result.push(...getRightsWorkAgents(image.rights, "Image"));
    }

    return result;
  }

  @Memoize()
  get agentUris(): readonly string[] {
    const result: string[] = [];

    if (this.rights) {
      result.push(...this.rights.agentUris);
    }

    if (
      this.description &&
      this.description instanceof Text &&
      this.description.rights
    ) {
      result.push(...this.description.rights.agentUris);
    }

    for (const image of this.originalImages) {
      if (image.rights) {
        result.push(...image.rights.agentUris);
      }
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
  get events(): readonly WorkEvent[] {
    return this.modelSet.workEventsByWork(this.uri);
  }

  @Memoize()
  get location(): WorkLocation | null {
    const location = this.findAndMapObject(dcterms.spatial, term => mapLocationObject(this, term));
    if (location && location instanceof Location) {
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
