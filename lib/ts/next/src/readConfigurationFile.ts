import {Dataset, Parser} from "n3";

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
      const parser = new Parser();
      _configurationDataset = new Dataset();
      _configurationDataset.addQuads(
        parser.parse(readFileSync(configurationFilePath).toString())
      );
    } else {
      _configurationDataset = null;
    }
  }

  return _configurationDataset!;
};
