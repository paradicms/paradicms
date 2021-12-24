import * as React from "react";
import * as ReactDOM from "react-dom";
import {Application} from "~/Application";
// import {dom, library} from "@fortawesome/fontawesome-svg-core";
// import {faImages, faList} from "@fortawesome/free-solid-svg-icons";
import {LunrWorkQueryService} from "@paradicms/lunr";
import {Dataset} from "@paradicms/models";
import {QueryParamProvider} from "use-query-params";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {thumbnailTargetDimensions} from "@paradicms/bootstrap";
import {
  AppConfiguration,
  defaultAppConfiguration,
} from "@paradicms/configuration";

const fetchAppConfiguration = (): Promise<AppConfiguration> => {
  return fetch("./configuration.json").then(
    response =>
      response.json().then(
        configuration => configuration,
        () => Promise.resolve(defaultAppConfiguration)
      ),
    () => Promise.resolve(defaultAppConfiguration)
  );
};

const fetchDataset = (): Promise<Dataset> =>
  fetch("./data.trig").then(response =>
    response.text().then(trig => Dataset.parse(trig, {format: "TriG"}))
  );

Promise.all([fetchAppConfiguration(), fetchDataset()]).then(
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
