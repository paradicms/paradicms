import * as React from "react";
import * as ReactDOM from "react-dom";
import {Application} from "~/Application";
// import {dom, library} from "@fortawesome/fontawesome-svg-core";
// import {faImages, faList} from "@fortawesome/free-solid-svg-icons";
import {LunrWorkQueryService} from "@paradicms/lunr";
import {Configuration, Dataset, defaultConfiguration} from "@paradicms/models";
import {QueryParamProvider} from "use-query-params";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {thumbnailTargetDimensions} from "@paradicms/bootstrap";

const fetchConfiguration = (): Promise<Configuration> => {
  return fetch("./configuration.json").then(
    response =>
      response.json().then(
        configuration => configuration,
        () => Promise.resolve(defaultConfiguration)
      ),
    () => Promise.resolve(defaultConfiguration)
  );
};

const fetchDataset = (): Promise<Dataset> =>
  fetch("./data.ttl").then(response =>
    response.text().then(ttl => Dataset.parse(ttl))
  );

Promise.all([fetchConfiguration(), fetchDataset()]).then(
  ([configuration, dataset]) => {
    console.info("configuration:\n", JSON.stringify(configuration));

    const workQueryService = new LunrWorkQueryService({
      configuration: configuration.workSearch,
      dataset,
      workJoinSelector: {
        collections: {
          thumbnail: {targetDimensions: thumbnailTargetDimensions},
        },
        institution: {
          thumbnail: {targetDimensions: thumbnailTargetDimensions},
        },
        propertyDefinitions: {
          values: {
            thumbnail: {targetDimensions: thumbnailTargetDimensions},
          },
        },
        thumbnail: {targetDimensions: thumbnailTargetDimensions},
      },
    });

    ReactDOM.render(
      <Router>
        <QueryParamProvider ReactRouterRoute={Route}>
          <Application
            configuration={configuration}
            workQueryService={workQueryService}
          />
        </QueryParamProvider>
      </Router>,
      document.getElementById("root")
    );
  }
);
