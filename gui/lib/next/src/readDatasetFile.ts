import {Dataset} from "@paradicms/models";
import {ParserOptions} from "n3";

let _dataset: Dataset | undefined;

export const readDatasetFile = (
  // There are issues importing "fs" from a library, so pass in the function we need here
  // https://github.com/vercel/next.js/issues/7755
  readFileSync: (filePath: string) => string
): Dataset => {
  if (!_dataset) {
    const dataFilePath: string | undefined = process.env.DATA_FILE_PATH;
    if (!dataFilePath) {
      throw new EvalError("must specify a data file path");
    }

    const dataFilePathLowerCase = dataFilePath.toLowerCase();
    const parserOptions: ParserOptions = {};
    if (dataFilePathLowerCase.endsWith(".nq")) {
      parserOptions.format = "N-Quads";
    } else if (dataFilePathLowerCase.endsWith(".trig")) {
      parserOptions.format = "TriG";
    } else {
      throw new EvalError(
        "data file has unexpected extension: " + dataFilePath
      );
    }

    _dataset = Dataset.parse(
      readFileSync(dataFilePath).toString(),
      parserOptions
    );
  }
  return _dataset;
};
