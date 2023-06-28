import {Mixin} from "ts-mixer";
import {SchemaModel} from "./SchemaModel";
import {requireNonNull} from "@paradicms/utilities";
import {Organization} from "../Organization";

export class SchemaOrganization extends Mixin(
  SchemaModel
) implements Organization {
  get homepage(): string | null {
    return this.urls.length > 0 ? this.urls[0] : null;
  }

  override get label(): string {
    return this.name;
  }

  override get name(): string {
    return requireNonNull(super.name);
  }

  readonly type: "Organization" = "Organization";

  get works() {
    return this.iri ? this.modelSet.worksByAgentIri(this.iri) : [];
  }
}
