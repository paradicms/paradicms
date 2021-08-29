import {Dataset} from "@paradicms/models";
import {DatasetRdfReader} from "@paradicms/rdf";

let _dataset: Dataset | undefined;

export const readDatasetFile = (
  // There are issues importing "fs" from a library, so pass in the function we need here
  // https://github.com/vercel/next.js/issues/7755
  readFileSync: (filePath: string) => string
): Dataset => {
  if (!_dataset) {
    const dataTtlFilePath: string | undefined = process.env.DATA_TTL_FILE_PATH;
    if (!dataTtlFilePath) {
      throw new EvalError("must specify a data .ttl (text/turtle) file path");
    }
    _dataset = DatasetRdfReader.parse(readFileSync(dataTtlFilePath).toString());
  }
  return _dataset;
};
