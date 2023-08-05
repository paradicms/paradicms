import {ModelSet, ModelSetFactory} from "@paradicms/models";
import {
  anyRdfStringToDataset,
  createDataset,
  DataFactory,
  Store,
} from "@paradicms/rdf";
import {Api} from "@paradicms/api";
import {MemApi} from "@paradicms/mem-api";
import {ApiConfiguration} from "./ApiConfiguration";

interface GetStaticApiResult {
  readonly api: Api;
  readonly apiConfiguration: ApiConfiguration;
}

let _getStaticApiResult: GetStaticApiResult | undefined;

/**
 * Get an Api implementation for use in getStaticPath/getStaticProps.
 */
export const getStaticApi = async (kwds: {
  pathDelimiter: string;
  // There are issues importing "fs" from a library, so pass in the function we need here
  // https://github.com/vercel/next.js/issues/7755
  readFile: (filePath: string) => Promise<string>;
}): Promise<GetStaticApiResult> => {
  const {pathDelimiter, readFile} = kwds;

  if (typeof _getStaticApiResult !== "undefined") {
    return Promise.resolve(_getStaticApiResult);
  }

  let dataFilePaths: string[] = [];

  {
    const dataFilePath = process.env.DATA_FILE_PATH;
    if (dataFilePath) {
      dataFilePaths.push(dataFilePath);
    }
  }

  {
    const dataFilePathsString = process.env.DATA_FILE_PATHS;
    if (dataFilePathsString) {
      dataFilePaths = dataFilePaths.concat(
        dataFilePathsString.split(pathDelimiter)
      );
    }
  }

  let modelSet: ModelSet;
  if (dataFilePaths.length > 0) {
    const combinedStore = new Store();
    for (const filePath of dataFilePaths) {
      const fileContents = await readFile(filePath);
      const fileDataset = await anyRdfStringToDataset(fileContents, {
        path: filePath,
      });

      // Rename the default graph from each file
      const renamedDefaultGraph = DataFactory.blankNode();
      const defaultGraph = DataFactory.defaultGraph();
      for (const quad of fileDataset) {
        if (quad.graph.equals(defaultGraph)) {
          combinedStore.add(
            DataFactory.quad(
              quad.subject,
              quad.predicate,
              quad.object,
              renamedDefaultGraph
            )
          );
        } else {
          combinedStore.add(quad);
        }
      }
    }
    modelSet = ModelSetFactory.fromDataset(combinedStore);
  } else {
    modelSet = ModelSetFactory.fromDataset(createDataset());
  }

  _getStaticApiResult = {
    api: new MemApi({
      modelSet,
    }),
    apiConfiguration: {
      modelSetJsonLd: await modelSet.toJsonLd(),
      type: "mem",
    },
  };

  return _getStaticApiResult!;
};
