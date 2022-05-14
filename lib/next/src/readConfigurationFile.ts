import {Parser, Store} from "n3";

let _configurationStore: Store | null | undefined;

export const readConfigurationFile = (
  // There are issues importing "fs" from a library, so pass in the function we need here
  // https://github.com/vercel/next.js/issues/7755
  readFileSync: (filePath: string) => string
): Store | null => {
  if (typeof _configurationStore === "undefined") {
    const configurationFilePath: string | undefined =
      process.env.CONFIGURATION_FILE_PATH;
    if (configurationFilePath) {
      const parser = new Parser();
      _configurationStore = new Store();
      _configurationStore.addQuads(
        parser.parse(readFileSync(configurationFilePath).toString())
      );
    } else {
      _configurationStore = null;
    }
  }

  return _configurationStore!;
};
