const AppConfiguration = require("@paradicms/configuration").AppConfiguration;
const readConfigurationFile = require("@paradicms/next").readConfigurationFile;
const fs = require("fs");

module.exports = async () => {
  const result = {
    trailingSlash: true,
  };

  const configurationFilePath = process.env.CONFIGURATION_FILE_PATH;
  if (configurationFilePath) {
    const configurationDataset = await readConfigurationFile(filePath =>
      fs.promises.readFile(filePath).then(contents => contents.toString())
    );
    if (configurationDataset) {
      console.info("read configuration from", configurationFilePath);
      const configuration = AppConfiguration.fromDataset(configurationDataset);
      if (configuration) {
        if (configuration.basePath) {
          console.info("configured base path:", configuration.basePath);
          result.basePath = configuration.basePath;
        }
      } else {
        console.info("no configuration parseable from", configurationFilePath);
      }
    } else {
      console.info("no configuration found at", configurationFilePath);
    }
  } else {
    console.info("no configuration file specified");
  }

  return result;
};
