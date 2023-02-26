import {ModelSet} from "@paradicms/models";
import {anyStringToDataset, createDataset} from "@paradicms/rdf";

let _modelSet: ModelSet | undefined;

export const readModelSetFile = (
  // There are issues importing "fs" from a library, so pass in the function we need here
  // https://github.com/vercel/next.js/issues/7755
  readFile: (filePath: string) => Promise<string>
): Promise<ModelSet | null> => {
  if (typeof _modelSet !== "undefined") {
    return Promise.resolve(_modelSet);
  }

  const dataFilePath: string | undefined = process.env.DATA_FILE_PATH;
  if (!dataFilePath) {
    _modelSet = new ModelSet(createDataset());
    return Promise.resolve(_modelSet!);
  }

  return readFile(dataFilePath).then(dataString =>
    anyStringToDataset(dataString, {
      path: dataFilePath,
    }).then(dataset => {
      _modelSet = new ModelSet(dataset);
      return _modelSet!;
    })
  );
};
