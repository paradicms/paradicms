import {Configuration, defaultConfiguration} from "@paradicms/models";

let _configuration: Configuration | undefined;

export const readConfigurationFile = (
  // There are issues importing "fs" from a library, so pass in the function we need here
  // https://github.com/vercel/next.js/issues/7755
  readFileSync: (filePath: string) => string
): Configuration => {
  if (!_configuration) {
    const configurationFilePath: string | undefined =
      process.env.CONFIGURATION_FILE_PATH;
    if (configurationFilePath) {
      _configuration = JSON.parse(
        readFileSync(configurationFilePath).toString()
      );
    } else {
      _configuration = defaultConfiguration;
    }
  }
  return _configuration!;
};
