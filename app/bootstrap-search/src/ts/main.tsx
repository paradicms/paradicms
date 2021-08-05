import * as React from "react";
import * as ReactDOM from "react-dom";
import {Application} from "~/Application";
import {HardCodedConfigurationQueryService} from "~/services/HardCodedConfigurationQueryService";
import {ConfigurationQueryService} from "~/services/ConfigurationQueryService";
import {VcccRdfObjectQueryService} from "~/services/VcccRdfObjectQueryService";
import {ObjectQueryServiceContext} from "~/contexts/ObjectQueryServiceContext";
import {ConfigurationContext} from "~/contexts/ConfigurationContext";
import {dom, library} from "@fortawesome/fontawesome-svg-core";
import {faImages, faList} from "@fortawesome/free-solid-svg-icons";

// Set up FontAwesome
library.add(faImages);
library.add(faList);
dom.watch();

const configurationQueryService: ConfigurationQueryService =
  new HardCodedConfigurationQueryService();

configurationQueryService.getConfiguration().then(
  (configuration) => {
    // TODO: choose the service implementations based on the configuration

    const objectQueryService = new VcccRdfObjectQueryService(configuration);

    ReactDOM.render(
      <ConfigurationContext.Provider value={configuration}>
        <ObjectQueryServiceContext.Provider value={objectQueryService}>
          <Application />
        </ObjectQueryServiceContext.Provider>
      </ConfigurationContext.Provider>,
      document.getElementById("root")
    );
  },
  (error) => {
    alert("Unable to retrieve configuration: " + error);
  }
);
