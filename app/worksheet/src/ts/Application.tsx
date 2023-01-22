import {useEffect, useState} from "react";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {Exception} from "~/Exception";
import {loadGapiClient} from "~/loadGapiClient";
import {FatalErrorModal} from "~/components/FatalErrorModal";
import {WorksheetDefinitionModelSet} from "~/models/WorksheetDefinitionModelSet";
import {WorksheetDefinitionContext} from "~/contexts/WorksheetDefinitionContext";
import {BrowserRouter as Router, Route, Routes, useNavigate,} from "react-router-dom";
import {Hrefs} from "~/Hrefs";
import {LoginPage} from "~/pages/LoginPage";
import {LoginCallbackPage} from "~/pages/LoginCallbackPage";
import {LogoutPage} from "~/pages/LogoutPage";
import {LogoutCallbackPage} from "~/pages/LogoutCallbackPage";
import {WorksheetStartPage} from "~/pages/WorksheetStartPage";
import {WorksheetEditPage} from "~/pages/WorksheetEditPage";
import {WorksheetFeatureSetEditPage} from "~/pages/WorksheetFeatureSetEditPage";
import {WorksheetFeatureEditPage} from "~/pages/WorksheetFeatureEditPage";
import {WorksheetReviewPage} from "~/pages/WorksheetReviewPage";
import {UserSettingsPage} from "~/pages/UserSettingsPage";
import {useLocation} from "react-router";
import {QueryParamProvider} from "use-query-params";
import {parseIntoDataset} from "@paradicms/rdf";
import React = require("react");

const RouteAdapter: React.FunctionComponent<{children?: any}> = ({
  children,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const adaptedHistory = React.useMemo(
    () => ({
      replace(location: any) {
        navigate(location, {replace: true, state: location.state});
      },
      push(location: any) {
        navigate(location, {replace: false, state: location.state});
      },
    }),
    [navigate]
  );
  return children({history: adaptedHistory, location});
};

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
    fetch("/data.ttl").then(
      response =>
        response.text().then(responseText => {
          let worksheetDefinitionModelSet: WorksheetDefinitionModelSet;
          try {
            worksheetDefinitionModelSet = new WorksheetDefinitionModelSet(
              parseIntoDataset(responseText)
            );
          } catch (e) {
            setError(e);
            return;
          }
          setWorksheetDefinition(
            new WorksheetDefinition(worksheetDefinitionModelSet)
          );
        }, setError),
      setError
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
        <QueryParamProvider adapter={RouteAdapter}>
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
