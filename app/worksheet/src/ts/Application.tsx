import {useEffect, useState} from "react";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {Exception} from "~/Exception";
import {loadGapiClient} from "~/loadGapiClient";
import {FatalErrorModal} from "~/components/FatalErrorModal";
import React = require("react");
import {WorksheetDefinitionDataset} from "~/models/WorksheetDefinitionDataset";
import {WorksheetDefinitionContext} from "~/contexts/WorksheetDefinitionContext";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Hrefs} from "~/Hrefs";
import {LoginPage} from "~/pages/LoginPage";
import {PrivacyPage} from "~/pages/PrivacyPage";

export const Application: React.FunctionComponent = () => {
  const [error, setError] = useState<any>(null);
  const [exception, setException] = useState<Exception | null>(null);
  const [gapiClientLoaded, setGapiClientLoaded] = useState<boolean>(false);
  const [worksheetDefinition, setWorksheetDefinition] =
    useState<WorksheetDefinition | null>(null);

  useEffect(() => {
    console.info("loading GAPI client");
    loadGapiClient().then(() => setGapiClientLoaded(true), setException);
  }, []);

  useEffect(() => {
    console.info("fetching worksheet definition");
    fetch("/data.ttl").then(
      (response) =>
        response.text().then((responseText) => {
          let worksheetDefinitionDataset: WorksheetDefinitionDataset;
          try {
            worksheetDefinitionDataset =
              WorksheetDefinitionDataset.parse(responseText);
          } catch (e) {
            setError(e);
            return;
          }
          setWorksheetDefinition(
            new WorksheetDefinition(worksheetDefinitionDataset)
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
        <Routes>
          <Route path={Hrefs.login} element={<LoginPage />} />
          <Route path={Hrefs.privacy} element={<PrivacyPage />} />
        </Routes>
      </Router>
    </WorksheetDefinitionContext.Provider>
  );
};
