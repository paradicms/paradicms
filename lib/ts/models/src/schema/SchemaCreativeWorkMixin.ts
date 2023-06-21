import {Mixin} from "ts-mixer";
import {SchemaThingMixin} from "./SchemaThingMixin";
import {RightsMixin} from "../RightsMixin";
import {AgentUnion} from "../AgentUnion";
import {Memoize} from "typescript-memoize";
import {schema} from "@paradicms/vocabularies";
import {mapAgentObject} from "../mapAgentObject";
import {License} from "../License";
import {mapLicenseObject} from "../mapLicenseObject";
import {RightsStatement} from "../RightsStatement";
import {mapRightsStatementObject} from "../mapRightsStatementObject";

export abstract class SchemaCreativeWorkMixin extends Mixin(SchemaThingMixin)
  implements RightsMixin {
  @Memoize()
  get contributors(): readonly AgentUnion[] {
    return this.filterAndMapObjects(schema.contributor, term =>
      mapAgentObject(this, term)
    );
  }

  @Memoize()
  get creators(): readonly AgentUnion[] {
    return this.filterAndMapObjects(schema.creator, term =>
      mapAgentObject(this, term)
    );
  }

  get license(): License | null {
    return this.findAndMapObject(schema.license, term =>
      mapLicenseObject(this, term)
    );
  }

  get requiresAttribution(): boolean {
    return this.license?.requiresAttribution ?? true;
  }

  get rightsHolders(): readonly AgentUnion[] {
    return this.filterAndMapObjects(schema.copyrightHolder, term =>
      mapAgentObject(this, term)
    );
  }

  get rightsStatement(): RightsStatement | null {
    return this.findAndMapObject(schema.usageInfo, term =>
      mapRightsStatementObject(this, term)
    );
  }
}
