import fs from "fs";
import {Dataset} from "@paradicms/models";
import {DatasetRdfReader} from "@paradicms/rdf";

export const readDataset = (): Dataset => {
  const dataTtlFilePath: string | undefined = process.env.DATA_TTL_FILE_PATH;
  if (!dataTtlFilePath) {
    throw new EvalError("must specify a data .ttl (text/turtle) file path");
  }
  return DatasetRdfReader.parse(fs.readFileSync(dataTtlFilePath).toString());
};
