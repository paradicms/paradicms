import {ModelSet, ModelSetFactory} from "@paradicms/models";
import {
  DataFactory,
  Store,
  anyRdfStringToDataset,
  createDataset,
} from "@paradicms/rdf";

let _modelSet: ModelSet | undefined;

export const readModelSetFile = async (
  // There are issues importing "fs" from a library, so pass in the function we need here
  // https://github.com/vercel/next.js/issues/7755
  readFile: (filePath: string) => Promise<string>
): Promise<ModelSet> => {
  if (typeof _modelSet !== "undefined") {
    return Promise.resolve(_modelSet);
  }

  const filePaths: string[] = [];

  const configurationFilePath: string | undefined =
    process.env.CONFIGURATION_FILE_PATH;
  if (configurationFilePath) {
    filePaths.push(configurationFilePath);
  }

  const dataFilePath: string | undefined = process.env.DATA_FILE_PATH;
  if (dataFilePath) {
    filePaths.push(dataFilePath);
  }

  if (filePaths.length === 0) {
    _modelSet = ModelSetFactory.fromDataset(createDataset());
    return Promise.resolve(_modelSet!);
  }

  const combinedStore = new Store();
  for (const filePath of filePaths) {
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

  _modelSet = ModelSetFactory.fromDatasetCore(combinedStore);
  return _modelSet!;
};
