import * as React from "react";
import * as ReactDOM from "react-dom";
// import Hammer from "hammerjs";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {WorksheetDefinitionDataset} from "~/models/WorksheetDefinitionDataset";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetDefinitionContext} from "./contexts/WorksheetDefinitionContext";
import {loadGapiClient} from "~/loadGapiClient";
import {Hrefs} from "~/Hrefs";
import {LoginPage} from "~/pages/LoginPage";
import {PrivacyPage} from "~/pages/PrivacyPage";

// delete Hammer.defaults.cssProps.userSelect;

loadGapiClient().then(() =>
  fetch("/data.ttl").then((response) =>
    response.text().then((responseText) => {
      const dataset = WorksheetDefinitionDataset.parse(responseText);
      const worksheetDefinition = new WorksheetDefinition(dataset);

      ReactDOM.render(
        <WorksheetDefinitionContext.Provider value={worksheetDefinition}>
          <Router>
            <Routes>
              <Route path={Hrefs.login} element={<LoginPage />} />
              <Route path={Hrefs.privacy} element={<PrivacyPage />} />
            </Routes>
          </Router>
        </WorksheetDefinitionContext.Provider>,
        document.getElementById("root")
      );
    })
  )
);
