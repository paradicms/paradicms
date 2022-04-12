import * as React from "react";
import * as ReactDOM from "react-dom";
import Hammer from "hammerjs";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {QueryParamProvider} from "use-query-params";
import {WorksheetDefinitionDataset} from "~/models/WorksheetDefinitionDataset";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetDefinitionContext} from "./contexts/WorksheetDefinitionContext";

delete Hammer.defaults.cssProps.userSelect;

fetch("/data.ttl").then((response) => {
  response.text().then((responseText) => {
    const dataset = WorksheetDefinitionDataset.parse(responseText);
    // @ts-ignore
    const worksheetDefinition = new WorksheetDefinition(dataset);

    ReactDOM.render(
      <WorksheetDefinitionContext.Provider value={worksheetDefinition}>
        <Router>
          <QueryParamProvider ReactRouterRoute={Route}>
            <Routes>
              <div />
            </Routes>
          </QueryParamProvider>
        </Router>
      </WorksheetDefinitionContext.Provider>,
      document.getElementById("root")
    );
  });
});
