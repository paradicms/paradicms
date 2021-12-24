import {
  AppConfiguration,
  defaultAppConfiguration,
} from "@paradicms/configuration";

let _configuration: AppConfiguration | undefined;

export const readConfigurationFile = (
  // There are issues importing "fs" from a library, so pass in the function we need here
  // https://github.com/vercel/next.js/issues/7755
  readFileSync: (filePath: string) => string
): AppConfiguration => {
  if (!_configuration) {
    const configurationFilePath: string | undefined =
      process.env.CONFIGURATION_FILE_PATH;
    if (configurationFilePath) {
      _configuration = JSON.parse(
        readFileSync(configurationFilePath).toString()
      );
    } else {
      _configuration = defaultAppConfiguration;
    }
  }
  return _configuration!;
};
