import {Configuration, defaultConfiguration} from "@paradicms/models";

let _configuration: Configuration | undefined;

export const readConfigurationFile = (
  // There are issues importing "fs" from a library, so pass in the function we need here
  // https://github.com/vercel/next.js/issues/7755
  readFileSync: (filePath: string) => string
): Configuration => {
  if (!_configuration) {
    const configurationJsonFilePath: string | undefined =
      process.env.CONFIGURATION_JSON_FILE_PATH;
    if (configurationJsonFilePath) {
      _configuration = JSON.parse(
        readFileSync(configurationJsonFilePath).toString()
      );
    } else {
      _configuration = defaultConfiguration;
    }
  }
  return _configuration!;
};
