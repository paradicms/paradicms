import {Dataset} from "@rdfjs/types";
import {parseIntoDataset} from "@paradicms/rdf";

let _configurationDataset: Dataset | null | undefined;

export const readConfigurationFile = (
  // There are issues importing "fs" from a library, so pass in the function we need here
  // https://github.com/vercel/next.js/issues/7755
  readFileSync: (filePath: string) => string
): Dataset | null => {
  if (typeof _configurationDataset === "undefined") {
    const configurationFilePath: string | undefined =
      process.env.CONFIGURATION_FILE_PATH;
    if (configurationFilePath) {
      _configurationDataset = parseIntoDataset(
        readFileSync(configurationFilePath).toString()
      );
    } else {
      _configurationDataset = null;
    }
  }

  return _configurationDataset!;
};
