import {ModelSet, ModelSetFactory} from "@paradicms/models";
import {
  anyRdfStringToDataset,
  createDataset,
  DataFactory,
  Store,
} from "@paradicms/rdf";
import {ApiConfiguration} from "./ApiConfiguration";
import * as path from "path";
import fs from "fs";

let _staticApiConfiguration: ApiConfiguration | undefined;

/**
 * Get an ApiConfiguration for use in getStaticPath/getStaticProps.
 */
export const getStaticApiConfiguration = async (): Promise<ApiConfiguration> => {
  if (typeof _staticApiConfiguration !== "undefined") {
    return Promise.resolve(_staticApiConfiguration);
  }

  let dataFilePaths: string[] = [];
  for (const environmentVariableName of [
    "DATA_FILE_PATH",
    "DATA_FILE_PATHS",
    "PARADICMS_DATA_FILE_PATH",
    "PARADICMS_DATA_FILE_PATHS",
  ]) {
    const dataFilePathsString = process.env[environmentVariableName];
    if (dataFilePathsString) {
      dataFilePaths = dataFilePaths.concat(
        dataFilePathsString.split(path.delimiter)
      );
    }
  }

  let modelSet: ModelSet;
  if (dataFilePaths.length > 0) {
    const combinedStore = new Store();
    for (const filePath of dataFilePaths) {
      const fileContents = await fs.promises.readFile(filePath);
      const fileDataset = await anyRdfStringToDataset(fileContents.toString(), {
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

  _staticApiConfiguration = {
    modelSetJsonLd: await modelSet.toJsonLd(),
    type: "mem",
  };

  return _staticApiConfiguration!;
};
