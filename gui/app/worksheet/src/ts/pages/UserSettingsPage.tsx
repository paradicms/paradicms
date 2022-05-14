import React = require("react");
import {Navigate} from "react-router-dom";
import {useCurrentUser} from "~/hooks/useCurrentUser";
import {Hrefs} from "~/Hrefs";
import {WorksheetConfiguration} from "~/models/WorksheetConfiguration";
import {useCallback, useEffect, useState} from "react";
import {useUserSettingsService} from "~/hooks/useUserSettingsService";
import {Spinner} from "~/components/Spinner";
import {UserSettings} from "~/models/UserSettings";
import {defaultUserSettings} from "~/models/defaultUserSettings";
import {NoSuchUserSettingsException} from "~/services/NoSuchUserSettingsException";
import {Exception} from "~/Exception";
import {GenericErrorHandler} from "~/components/GenericErrorHandler";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import {Frame} from "~/components/Frame";
import {Headline} from "~/components/Headline";
import {WorksheetStateConfiguration} from "~/models/WorksheetStateConfiguration";
import {CurrentUser} from "~/models/CurrentUser";
import {UserIdentityProvider} from "~/models/UserIdentityProvider";
import {GoogleSheetsWorksheetStateConfigurationContainer} from "~/components/GoogleSheetsWorksheetStateConfigurationContainer";

export const UserSettingsPage: React.FunctionComponent = () => {
  const currentUser = useCurrentUser();
  const [currentUserSettings, setCurrentUserSettings] =
    useState<UserSettings | null>(null);
  const [exception, setException] = useState<Exception | null>(null);
  const userSettingsService = useUserSettingsService();
  const [unsavedWorksheetConfiguration, setUnsavedWorksheetConfiguration] =
    useState<WorksheetConfiguration | null>(null);

  const onClickSaveButton = useCallback(() => {
    if (!unsavedWorksheetConfiguration) {
      return;
    }
    userSettingsService
      .putUserSettings({
        userId: currentUser!.id,
        userSettings: {worksheetConfiguration: unsavedWorksheetConfiguration},
      })
      .then(() => setUnsavedWorksheetConfiguration(null), setException);
  }, [unsavedWorksheetConfiguration, userSettingsService]);

  useEffect(() => {
    if (!currentUser) {
      return;
    }
    userSettingsService
      .getUserSettings(currentUser.id)
      .then(setCurrentUserSettings, (reason) => {
        if (reason instanceof NoSuchUserSettingsException) {
          setCurrentUserSettings(defaultUserSettings);
        } else {
          setException(reason);
        }
      });
  }, [currentUser, userSettingsService]);

  if (!currentUser) {
    return <Navigate to={Hrefs.index} />;
  }

  if (exception) {
    return <GenericErrorHandler exception={exception} />;
  }

  if (!currentUserSettings) {
    return <Spinner />;
  }

  let currentWorksheetConfiguration = unsavedWorksheetConfiguration;
  if (!currentWorksheetConfiguration) {
    currentWorksheetConfiguration = currentUserSettings.worksheetConfiguration;
  }
  console.info(
    "Unsaved worksheet configuration:",
    unsavedWorksheetConfiguration
  );
  console.info(
    "Current worksheet configuration:",
    currentWorksheetConfiguration
  );

  return (
    <Frame>
      <Container fluid>
        <Row>
          <Col xs="12">
            <Headline>Settings</Headline>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Nav tabs>
              <NavItem>
                <NavLink className="active">Worksheet Settings</NavLink>
              </NavItem>
            </Nav>
            <br />
            <TabContent activeTab="worksheet">
              <TabPane tabId="worksheet">
                <WorksheetStateConfigurationForm
                  currentUser={currentUser}
                  onChange={(newWorksheetStateConfiguration) =>
                    setUnsavedWorksheetConfiguration({
                      state: newWorksheetStateConfiguration,
                    })
                  }
                  worksheetStateConfiguration={
                    currentWorksheetConfiguration.state
                  }
                />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
        {unsavedWorksheetConfiguration ? (
          <>
            <hr />
            <Row>
              <Col xs="12">
                <div className="float-left">
                  <Button color="primary" onClick={onClickSaveButton} size="lg">
                    Save
                  </Button>
                </div>
              </Col>
            </Row>
          </>
        ) : null}
      </Container>
    </Frame>
  );
};

const WorksheetStateConfigurationForm: React.FunctionComponent<{
  currentUser: CurrentUser;
  onChange: (
    newWorksheetStateConfiguration: WorksheetStateConfiguration
  ) => void;
  worksheetStateConfiguration: WorksheetStateConfiguration;
}> = ({currentUser, onChange, worksheetStateConfiguration}) => {
  const [selectedType, setSelectedType] =
    useState<WorksheetStateConfigurationType>(() => {
      if (worksheetStateConfiguration.googleSheets) {
        return WorksheetStateConfigurationType.GOOGLE_SHEETS;
      } else {
        return WorksheetStateConfigurationType.LOCAL_STORAGE;
      }
    });

  const onChangeType = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedType(event.target.value as WorksheetStateConfigurationType);
      switch (event.target.value) {
        case WorksheetStateConfigurationType.GOOGLE_SHEETS:
          // Don't call onChange until the sub-configuration is valid.
          break;
        case WorksheetStateConfigurationType.LOCAL_STORAGE:
          onChange({googleSheets: null, localStorage: {}});
          break;
        default:
          throw new RangeError();
      }
    },
    []
  );

  return (
    <>
      <Form>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              checked={
                selectedType === WorksheetStateConfigurationType.LOCAL_STORAGE
              }
              onChange={onChangeType}
              name="type"
              value={WorksheetStateConfigurationType.LOCAL_STORAGE}
            />{" "}
            Local storage (tied to the browser / machine)
          </Label>
        </FormGroup>
        {currentUser.identityProvider === UserIdentityProvider.GOOGLE_OAUTH2 ? (
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                checked={
                  selectedType === WorksheetStateConfigurationType.GOOGLE_SHEETS
                }
                onChange={onChangeType}
                name="type"
                value={WorksheetStateConfigurationType.GOOGLE_SHEETS}
              />{" "}
              Google Sheets
            </Label>
          </FormGroup>
        ) : null}
      </Form>
      {currentUser.identityProvider === UserIdentityProvider.GOOGLE_OAUTH2 &&
      selectedType === WorksheetStateConfigurationType.GOOGLE_SHEETS ? (
        <>
          <br />
          <GoogleSheetsWorksheetStateConfigurationContainer
            currentUser={currentUser}
            onChange={(newWorksheetStateConfiguration) =>
              onChange({
                googleSheets: newWorksheetStateConfiguration,
                localStorage: null,
              })
            }
            worksheetStateConfiguration={
              worksheetStateConfiguration.googleSheets
            }
          />
        </>
      ) : null}
    </>
  );
};

enum WorksheetStateConfigurationType {
  GOOGLE_SHEETS = "googleSheets",
  LOCAL_STORAGE = "localStorage",
}
