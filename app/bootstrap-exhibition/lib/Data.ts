import fs from "fs";
import {Collection, Image, Institution, Object} from "@paradicms/models";
import {RdfData} from "@paradicms/rdf";
import {graph, parse} from "rdflib";

export class Data {
  constructor() {
    const dataTtlFilePath: string | undefined = process.env.DATA_TTL_FILE_PATH;
    if (!dataTtlFilePath) {
      throw new EvalError("must specify a data .ttl (text/turtle) file path");
    }
    const store = graph();
    parse(
      fs.readFileSync(dataTtlFilePath).toString(),
      store,
      "http://example.org",
      "text/turtle",
    );
    const allData = new RdfData(store);

    const institutions = allData.institutions;
    if (institutions.length === 0) {
      throw new EvalError("no institutions");
    }
    this.institution = institutions[0];

    const collections = allData.institutionCollections(this.institution.uri);
    if (collections.length === 0) {
      throw new EvalError(
        "no collection for institution " + this.institution.uri,
      );
    }
    this.collection = collections[0];

    this.objects = allData.collectionObjects(this.collection.uri);
    if (this.objects.length === 0) {
      throw new EvalError("no objects for collection " + this.collection.uri);
    }

    const objectUris = new Set<string>(this.objects.map(object => object.uri));
    this.images = allData.images.filter(image =>
      objectUris.has(image.depictsUri)
    );

    this.licenseTitlesByUri = allData.licenseTitlesByUri;
    
    this.rightsStatementPrefLabelsByUri =
      allData.rightsStatementPrefLabelsByUri;
  }

  readonly collection: Collection;
  readonly images: readonly Image[];
  readonly institution: Institution;
  readonly licenseTitlesByUri: {[index: string]: string};
  readonly objects: readonly Object[];
  readonly rightsStatementPrefLabelsByUri: {[index: string]: string};
}
