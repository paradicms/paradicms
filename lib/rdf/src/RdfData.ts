import {
  Collection,
  Configuration,
  defaultConfiguration,
  Image,
  Institution,
  License,
  Object,
  PropertyDefinition,
  RightsStatement,
} from "@paradicms/models";
import {CollectionRdfReader} from "./CollectionRdfReader";
import {ConfigurationRdfReader} from "ConfigurationRdfReader";
import {ImageRdfReader} from "./ImageRdfReader";
import {InstitutionRdfReader} from "./InstitutionRdfReader";
import {ObjectRdfReader} from "./ObjectRdfReader";
import {PropertyDefinitionRdfReader} from "./PropertyDefinitionRdfReader";
import {RightsStatementRdfReader} from "./RightsStatementRdfReader";
import {
  indexImagesByDepictsUri,
  indexLicenseTitlesByUri,
  indexModelsByInstitutionUri,
  indexModelsByUri,
  indexObjectsByCollectionUri,
  indexRightsStatementPrefLabelsByUri,
} from "@paradicms/model-utils";
import {LicenseRdfReader} from "./LicenseRdfReader";
import {Parser, Store} from "n3";

/**
 * Class that aggregates models read from an RDF store.
 *
 * Each gui/ instantiates one instance of this class.
 *
 * The members of the class are intended to support getStaticProps implementations.
 * Some redundancy is intentionally introduced in order to do that. For example,
 * a GUI that has one object per page needs a quick objectByUri lookup in getStaticProps.
 * It is worth indexing objects ahead of time, since the cost of the indexing is amortized
 * across all object pages.
 *
 * getStaticProps does NOT pass redundant data to a page, in order to minimize the data Next.js serializes
 * to JSON between getStaticProps and the page.
 * That's why the indexed members (*By*) are marked private.
 * Instead of receiving redundant data, should create its own redundancy by e.g.,
 * indexing non-redundant models it receives or joining models.
 */
export class RdfData {
  readonly collections: readonly Collection[];
  private readonly collectionsByInstitutionUri: {
    [index: string]: readonly Collection[];
  };
  private readonly collectionsByUri: {[index: string]: Collection};
  readonly configuration: Configuration;
  readonly images: readonly Image[];
  // @ts-ignore
  private readonly imagesByDepictsUri: {[index: string]: readonly Image[]};
  // @ts-ignore
  private readonly imagesByInstitutionUri: {[index: string]: readonly Image[]};
  readonly institutions: readonly Institution[];
  private readonly institutionsByUri: {[index: string]: Institution};
  readonly licenses: readonly License[];
  readonly licenseTitlesByUri: {[index: string]: string};
  readonly objects: readonly Object[];
  // @ts-ignore
  private readonly objectsByCollectionUri: {[index: string]: readonly Object[]};
  // @ts-ignore
  private readonly objectsByInstitutionUri: {
    [index: string]: readonly Object[];
  };
  private readonly objectsByUri: {[index: string]: Object};
  readonly propertyDefinitions: readonly PropertyDefinition[];
  readonly rightsStatements: readonly RightsStatement[];
  readonly rightsStatementPrefLabelsByUri: {[index: string]: string};

  constructor(store: Store) {
    this.collections = CollectionRdfReader.readAll(store);
    this.collectionsByUri = indexModelsByUri(this.collections);
    this.collectionsByInstitutionUri = indexModelsByInstitutionUri(
      this.collections,
    );

    const configuration = ConfigurationRdfReader.readAll(store);
    this.configuration = configuration.length > 0 ? configuration[0] : defaultConfiguration;

    this.images = ImageRdfReader.readAll(store);
    this.imagesByDepictsUri = indexImagesByDepictsUri(this.images);
    this.imagesByInstitutionUri = indexModelsByInstitutionUri(this.images);

    this.institutions = InstitutionRdfReader.readAll(store);
    this.institutionsByUri = indexModelsByUri(this.institutions);

    this.licenses = LicenseRdfReader.readAll(store);
    this.licenseTitlesByUri = indexLicenseTitlesByUri(this.licenses);

    this.propertyDefinitions = PropertyDefinitionRdfReader.readAll(store);

    this.objects = ObjectRdfReader.readAll(store);
    this.objectsByUri = indexModelsByUri(this.objects);
    this.objectsByCollectionUri = indexObjectsByCollectionUri(this.objects);
    this.objectsByInstitutionUri = indexModelsByInstitutionUri(this.objects);

    this.rightsStatements = RightsStatementRdfReader.readAll(store);
    this.rightsStatementPrefLabelsByUri = indexRightsStatementPrefLabelsByUri(
      this.rightsStatements
    );
  }

  collectionByUri(uri: string): Collection {
    return this.modelByUri(this.collectionsByUri, uri);
  }

  collectionObjects(collectionUri: string): readonly Object[] {
    return this.objectsByCollectionUri[collectionUri] ?? [];
  }

  imagesDepictingUri(depictsUri: string): readonly Image[] {
    return this.imagesByDepictsUri[depictsUri] ?? [];
  }

  institutionCollections(institutionUri: string): readonly Collection[] {
    return this.collectionsByInstitutionUri[institutionUri] ?? [];
  }

  institutionImages(institutionUri: string): readonly Image[] {
    return this.imagesByInstitutionUri[institutionUri] ?? [];
  }

  institutionObjects(institutionUri: string): readonly Object[] {
    return this.objectsByInstitutionUri[institutionUri] ?? [];
  }

  institutionByUri(uri: string): Institution {
    return this.modelByUri(this.institutionsByUri, uri);
  }

  private modelByUri<ModelT>(
    modelsByUri: {[index: string]: ModelT},
    modelUri: string
  ): ModelT {
    const model = modelsByUri[modelUri];
    if (!model) {
      throw new EvalError("no such model " + modelUri);
    }
    return model;
  }

  objectByUri(uri: string): Object {
    return this.modelByUri(this.objectsByUri, uri);
  }

  static parseTurtle(ttl: string): Store {
    const parser = new Parser({format: "text/turtle"});
    const store = new Store();
    store.addQuads(parser.parse(ttl));
    return store;
  }
}
