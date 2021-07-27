import {Parser, Store} from "n3";
import {Dataset} from "@paradicms/models";
import {CollectionRdfReader} from "./CollectionRdfReader";
import {InstitutionRdfReader} from "./InstitutionRdfReader";
import {RightsStatementRdfReader} from "./RightsStatementRdfReader";
import {LicenseRdfReader} from "./LicenseRdfReader";
import {ImageRdfReader} from "./ImageRdfReader";
import {ObjectRdfReader} from "./ObjectRdfReader";
import {PropertyDefinitionRdfReader} from "./PropertyDefinitionRdfReader";

export class DatasetRdfReader {
  static read(store: Store): Dataset {
    return {
      collections: CollectionRdfReader.readAll(store),
      images: ImageRdfReader.readAll(store),
      institutions: InstitutionRdfReader.readAll(store),
      licenses: LicenseRdfReader.readAll(store),
      objects: ObjectRdfReader.readAll(store),
      propertyDefinitions: PropertyDefinitionRdfReader.readAll(store),
      rightsStatements: RightsStatementRdfReader.readAll(store),
    }
  }

  static parseTurtle(ttl: string): Store {
    const parser = new Parser({format: "text/turtle"});
    const store = new Store();
    store.addQuads(parser.parse(ttl));
    return store;
  }
}