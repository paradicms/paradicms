import {Dataset} from "@paradicms/models";

let _dataset: Dataset | undefined;

export const readDatasetFile = (
  // There are issues importing "fs" from a library, so pass in the function we need here
  // https://github.com/vercel/next.js/issues/7755
  readFileSync: (filePath: string) => string
): Dataset => {
  if (!_dataset) {
    const dataFilePath: string | undefined = process.env.DATA_FILE_PATH;
    if (!dataFilePath) {
      throw new EvalError("must specify a data .ttl (text/turtle) file path");
    }
    _dataset = Dataset.parse(readFileSync(dataFilePath).toString());
  }
  return _dataset;
};
