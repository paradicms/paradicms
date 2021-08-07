import * as React from "react";
import * as ReactDOM from "react-dom";
import {Application} from "~/Application";
import {ObjectQueryServiceContext} from "~/contexts/ObjectQueryServiceContext";
import {ConfigurationContext} from "~/contexts/ConfigurationContext";
// import {dom, library} from "@fortawesome/fontawesome-svg-core";
// import {faImages, faList} from "@fortawesome/free-solid-svg-icons";
import {
  ConfigurationQueryService,
  HardCodedConfigurationQueryService,
} from "@paradicms/services";
import {LunrObjectQueryService} from "@paradicms/lunr";
// @ts-ignore
import vcccTtl from "../data/vccc.ttl";
import {DatasetRdfReader} from "@paradicms/rdf";
import {IndexedDataset} from "@paradicms/models";
import {QueryParamProvider} from "use-query-params";

const configurationQueryService: ConfigurationQueryService = new HardCodedConfigurationQueryService();

configurationQueryService.getConfiguration().then(
  configuration => {
    const dataset = DatasetRdfReader.parse(vcccTtl);

    const objectQueryService = new LunrObjectQueryService({
      configuration: configuration.objectSearch,
      dataset: new IndexedDataset(dataset),
      objectJoinSelector: {},
    });

    ReactDOM.render(
      <ConfigurationContext.Provider value={configuration}>
        <ObjectQueryServiceContext.Provider value={objectQueryService}>
          <QueryParamProvider>
            <Application />
          </QueryParamProvider>
        </ObjectQueryServiceContext.Provider>
      </ConfigurationContext.Provider>,
      document.getElementById("root")
    );
  },
  error => {
    alert("Unable to retrieve configuration: " + error);
  }
);
