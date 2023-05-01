import {ModelSet, ModelSetFactory} from "@paradicms/models";
import {anyRdfStringToDataset} from "@paradicms/rdf";
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {QueryParamProvider} from "use-query-params";
import {ReactRouter6Adapter} from "use-query-params/adapters/react-router-6";
import {Exception} from "~/Exception";
import {Hrefs} from "~/Hrefs";
import {FatalErrorModal} from "~/components/FatalErrorModal";
import {WorksheetDefinitionContext} from "~/contexts/WorksheetDefinitionContext";
import {loadGapiClient} from "~/loadGapiClient";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {LoginCallbackPage} from "~/pages/LoginCallbackPage";
import {LoginPage} from "~/pages/LoginPage";
import {LogoutCallbackPage} from "~/pages/LogoutCallbackPage";
import {LogoutPage} from "~/pages/LogoutPage";
import {UserSettingsPage} from "~/pages/UserSettingsPage";
import {WorksheetEditPage} from "~/pages/WorksheetEditPage";
import {WorksheetFeatureEditPage} from "~/pages/WorksheetFeatureEditPage";
import {WorksheetFeatureSetEditPage} from "~/pages/WorksheetFeatureSetEditPage";
import {WorksheetReviewPage} from "~/pages/WorksheetReviewPage";
import {WorksheetStartPage} from "~/pages/WorksheetStartPage";
import React = require("react");

export const Application: React.FunctionComponent = () => {
  const [error, setError] = useState<any>(null);
  const [exception, setException] = useState<Exception | null>(null);
  const [gapiClientLoaded, setGapiClientLoaded] = useState<boolean>(false);
  const [
    worksheetDefinition,
    setWorksheetDefinition,
  ] = useState<WorksheetDefinition | null>(null);

  useEffect(() => {
    console.info("loading GAPI client");
    loadGapiClient().then(() => setGapiClientLoaded(true), setException);
  }, []);

  useEffect(() => {
    console.info("fetching worksheet definition");
    fetch("/data.trig").then(response =>
      response.text().then(responseText => {
        anyRdfStringToDataset(responseText, {
          contentType: "application/trig",
        }).then(responseDataset => {
          let worksheetDefinitionModelSet: ModelSet;
          try {
            worksheetDefinitionModelSet = ModelSetFactory.fromDataset(
              responseDataset
            );
          } catch (e) {
            setError(e);
            return;
          }
          setWorksheetDefinition(
            new WorksheetDefinition(worksheetDefinitionModelSet)
          );
        }, setError);
      }, setError)
    );
  }, []);

  if (error) {
    return <FatalErrorModal error={error} />;
  } else if (exception) {
    return <FatalErrorModal exception={exception} />;
  }

  if (!gapiClientLoaded) {
    return null;
  }
  if (!worksheetDefinition) {
    return null;
  }

  return (
    <WorksheetDefinitionContext.Provider value={worksheetDefinition}>
      <Router>
        <QueryParamProvider
          adapter={ReactRouter6Adapter}
          options={{enableBatching: true}}
        >
          <Routes>
            <Route path={Hrefs.login} element={<LoginPage />} />
            <Route path={Hrefs.loginCallback} element={<LoginCallbackPage />} />
            <Route path={Hrefs.logout} element={<LogoutPage />} />
            <Route
              path={Hrefs.logoutCallback}
              element={<LogoutCallbackPage />}
            />
            <Route path={Hrefs.userSettings} element={<UserSettingsPage />} />
            <Route
              path={Hrefs.worksheetStart}
              element={<WorksheetStartPage />}
            />
            <Route
              path="/:worksheetStateId/edit"
              element={<WorksheetEditPage />}
            />
            <Route
              path="/:worksheetStateId/featureSet/:featureSetUri/edit"
              element={<WorksheetFeatureSetEditPage />}
            />
            <Route
              path="/:worksheetStateId/featureSet/:featureSetUri/feature/:featureUri/edit"
              element={<WorksheetFeatureEditPage />}
            />
            <Route
              path="/:worksheetStateId/featureSet/:featureSetUri/review"
              element={<WorksheetFeatureSetEditPage />}
            />
            <Route
              path="/:worksheetStateId/review"
              element={<WorksheetReviewPage />}
            />
          </Routes>
        </QueryParamProvider>
      </Router>
    </WorksheetDefinitionContext.Provider>
  );
};
