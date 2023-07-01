import {Mixin} from "ts-mixer";
import {SchemaThingMixin} from "./SchemaThingMixin";
import {RightsMixin} from "../RightsMixin";
import {AgentUnion} from "../AgentUnion";
import {Memoize} from "typescript-memoize";
import {schema} from "@paradicms/vocabularies";
import {mapTermToAgent} from "../mapTermToAgent";
import {License} from "../License";
import {mapTermToLicense} from "../mapTermToLicense";
import {RightsStatement} from "../RightsStatement";
import {mapTermToRightsStatement} from "../mapTermToRightsStatement";
import {Location} from "../Location";
import {mapTermToLocation} from "../mapTermToLocation";
import {DateTimeDescription} from "../DateTimeDescription";
import {mapTermToDateTimeDescription} from "../mapTermToDateTimeDescription";
import {Image} from "../Image";
import {mapTermToImage} from "../mapTermToImage";

export abstract class SchemaCreativeWorkMixin extends Mixin(SchemaThingMixin)
  implements RightsMixin {
  @Memoize()
  get contributors(): readonly AgentUnion[] {
    return this.filterAndMapObjects(schema.contributor, term =>
      mapTermToAgent(this, term)
    );
  }

  @Memoize()
  get creators(): readonly AgentUnion[] {
    return this.filterAndMapObjects(schema.creator, term =>
      mapTermToAgent(this, term)
    );
  }

  @Memoize()
  get dateCreated(): DateTimeDescription | null {
    return this.findAndMapObject(schema.dateCreated, term =>
      mapTermToDateTimeDescription(this, term)
    );
  }

  @Memoize()
  get dateModified(): DateTimeDescription | null {
    return this.findAndMapObject(schema.dateModified, term =>
      mapTermToDateTimeDescription(this, term)
    );
  }

  @Memoize()
  get licenses(): readonly License[] {
    return this.filterAndMapObjects(schema.license, term =>
      mapTermToLicense(this, term)
    );
  }

  get requiresAttribution(): boolean {
    if (this.licenses.length === 0) {
      return true;
    } else if (!this.licenses.some(license => license.requiresAttribution)) {
      // If some license does not require attribution, then don't do attribution
      return false;
    } else {
      return true;
    }
  }

  @Memoize()
  get rightsHolders(): readonly AgentUnion[] {
    return this.filterAndMapObjects(schema.copyrightHolder, term =>
      mapTermToAgent(this, term)
    );
  }

  @Memoize()
  get rightsStatements(): readonly RightsStatement[] {
    return this.filterAndMapObjects(schema.usageInfo, term =>
      mapTermToRightsStatement(this, term)
    );
  }

  @Memoize()
  get spatial(): readonly Location[] {
    return this.filterAndMapObjects(schema.spatial, term =>
      mapTermToLocation(this, term)
    );
  }

  @Memoize()
  get thumbnails(): readonly Image[] {
    return this.filterAndMapObjects(schema.thumbnail, term =>
      mapTermToImage(this, term)
    );
  }
}
