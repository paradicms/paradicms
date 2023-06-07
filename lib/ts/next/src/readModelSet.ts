import {ModelSet, ModelSetFactory} from "@paradicms/models";
import {
  anyRdfStringToDataset,
  createDataset,
  DataFactory,
  Store,
} from "@paradicms/rdf";

let _modelSet: ModelSet | undefined;

export const readModelSet = async (kwds: {
  pathDelimiter: string;
  // There are issues importing "fs" from a library, so pass in the function we need here
  // https://github.com/vercel/next.js/issues/7755
  readFile: (filePath: string) => Promise<string>;
}): Promise<ModelSet> => {
  const {pathDelimiter, readFile} = kwds;

  if (typeof _modelSet !== "undefined") {
    return Promise.resolve(_modelSet);
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

  if (dataFilePaths.length === 0) {
    _modelSet = ModelSetFactory.fromDataset(createDataset());
    return Promise.resolve(_modelSet!);
  }

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

  _modelSet = ModelSetFactory.fromDataset(combinedStore);
  return _modelSet!;
};
