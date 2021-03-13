import fs from "fs";
import {
  Collection,
  Image,
  Institution,
  Object,
  PropertyDefinition,
} from "@paradicms/models";
import {RdfData} from "@paradicms/rdf";

export class Data {
  constructor() {
    const dataTtlFilePath: string | undefined = process.env.DATA_TTL_FILE_PATH;
    if (!dataTtlFilePath) {
      throw new EvalError("must specify a data .ttl (text/turtle) file path");
    }
    const allData = RdfData.parse(
      fs.readFileSync(dataTtlFilePath).toString(),
      "text/turtle"
    );

    const institutions = allData.institutions;
    if (institutions.length === 0) {
      throw new EvalError("no institutions");
    }
    // Ignore all but the first institution

    // In production there should only be one institution.
    // The test data has more than one institution.
    this.institution = institutions[0];

    const collections = allData.collections;
    // Ignore all but the first collection. See above.
    const collection = collections.find(
      collection => collection.institutionUri === this.institution.uri
    );
    if (!collection) {
      throw new EvalError(
        "no collection for institution " + this.institution.uri
      );
    }
    this.collection = collection;

    this.objects = allData.objects.filter(object =>
      object.collectionUris.some(
        collectionUri => collectionUri === this.collection.uri
      )
    );
    if (this.objects.length === 0) {
      throw new EvalError("no objects for collection " + this.collection.uri);
    }

    const objectUris = new Set<string>(this.objects.map(object => object.uri));
    this.images = allData.images.filter(image =>
      objectUris.has(image.depictsUri)
    );

    this.propertyDefinitions = allData.propertyDefinitions;
  }

  readonly collection: Collection;
  readonly images: readonly Image[];
  readonly institution: Institution;
  readonly objects: readonly Object[];
  readonly propertyDefinitions: readonly PropertyDefinition[];
}
