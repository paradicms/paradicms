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

  get license(): License | null {
    return this.findAndMapObject(schema.license, term =>
      mapTermToLicense(this, term)
    );
  }

  get requiresAttribution(): boolean {
    return this.license?.requiresAttribution ?? true;
  }

  get rightsHolders(): readonly AgentUnion[] {
    return this.filterAndMapObjects(schema.copyrightHolder, term =>
      mapTermToAgent(this, term)
    );
  }

  get rightsStatement(): RightsStatement | null {
    return this.findAndMapObject(schema.usageInfo, term =>
      mapTermToRightsStatement(this, term)
    );
  }
}
