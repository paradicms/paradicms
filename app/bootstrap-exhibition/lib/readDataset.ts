import fs from "fs";
import {Dataset} from "@paradicms/models";
import {DatasetRdfReader} from "@paradicms/rdf";

let _dataset: Dataset | undefined;

export const readDataset = (): Dataset => {
  if (!_dataset) {
    const dataTtlFilePath: string | undefined = process.env.DATA_TTL_FILE_PATH;
    if (!dataTtlFilePath) {
      throw new EvalError("must specify a data .ttl (text/turtle) file path");
    }
    _dataset = DatasetRdfReader.parse(fs.readFileSync(dataTtlFilePath).toString());
  }
  return _dataset;
};
