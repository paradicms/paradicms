import {foaf} from "@paradicms/vocabularies";
import {DatasetModelReader} from "../DatasetModelReader";
import {ModelSet} from "../ModelSet";
import {Organization} from "../Organization";
import {Person} from "../Person";
import {FoafOrganization} from "./FoafOrganization";
import {FoafPerson} from "./FoafPerson";

export class FoafModelReader extends DatasetModelReader {
  override readNamedOrganizations(kwds: {modelSet: ModelSet}): readonly Organization[] {
    return this.readNamedModels({
      class_: foaf.Organization,
      factory: FoafOrganization,
      ...kwds,
    });
  }

  override readNamedPeople(kwds: {modelSet: ModelSet}): readonly Person[] {
    return this.readNamedModels({
      class_: foaf.Person,
      factory: FoafPerson,
      ...kwds,
    });
  }
}
