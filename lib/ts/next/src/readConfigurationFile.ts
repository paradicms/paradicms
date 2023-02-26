import {Dataset} from "@rdfjs/types";
import {anyStringToDataset} from "@paradicms/rdf";

let _configurationDataset: Dataset | null | undefined;

export const readConfigurationFile = (
  // There are issues importing "fs" from a library, so pass in the function we need here
  // https://github.com/vercel/next.js/issues/7755
  readFile: (filePath: string) => Promise<string>
): Promise<Dataset | null> => {
  if (typeof _configurationDataset !== "undefined") {
    return Promise.resolve(_configurationDataset!);
  }

  const configurationFilePath: string | undefined =
    process.env.CONFIGURATION_FILE_PATH;
  if (!configurationFilePath) {
    _configurationDataset = null;
    return Promise.resolve(_configurationDataset);
  }

  return readFile(configurationFilePath).then(configurationString =>
    anyStringToDataset(configurationString, {
      path: configurationFilePath,
    }).then(dataset => {
      _configurationDataset = dataset;
      return dataset;
    })
  );
};
