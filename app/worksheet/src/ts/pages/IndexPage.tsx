import * as React from "react";
import {useCallback, useEffect, useState} from "react";
import {Exception} from "~/Exception";
import {GenericErrorHandler} from "~/components/GenericErrorHandler";
import {Frame} from "~/components/Frame";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Input,
  Row,
} from "reactstrap";
import classnames from "classnames";
import {useWorksheetStateService} from "~/hooks/useWorksheetStateService";
import Hammer from "react-hammerjs";
import {useCurrentUser} from "~/hooks/useCurrentUser";
import {useUserSettingsService} from "~/hooks/useUserSettingsService";
import {UserSettings} from "~/models/UserSettings";
import {defaultWorksheetConfiguration} from "~/models/defaultWorksheetConfiguration";
import {Hrefs} from "~/Hrefs";
import {Link, useNavigate} from "react-router-dom";
import {Spinner} from "~/components/Spinner";

export const IndexPage: React.FunctionComponent = () => {
  const [exception, setException] = useState<Exception | null>(null);
  const [existingWorksheetStateIds, setExistingWorksheetStateIds] = useState<
    string[] | null
  >(null);
  const worksheetStateService = useWorksheetStateService();

  const navigate = useNavigate();

  useEffect(() => {
    if (!worksheetStateService) {
      return;
    }
    worksheetStateService
      .getWorksheetStateIds()
      .then(setExistingWorksheetStateIds, setException);
  }, [worksheetStateService]);

  const onStartNewWorksheet = useCallback(
    (newWorksheetStateId: string) => {
      const mtime = new Date();
      worksheetStateService!
        .putWorksheetState({
          ctime: mtime,
          featureSets: [],
          id: newWorksheetStateId,
          mtime: mtime,
          text: undefined,
        })
        .then(() => {
          navigate(
            Hrefs.worksheetState({worksheetStateId: newWorksheetStateId})
          );
        }, setException);
    },
    [navigate, worksheetStateService]
  );

  if (exception) {
    return <GenericErrorHandler exception={exception} />;
  } else if (!existingWorksheetStateIds || !worksheetStateService) {
    return <Spinner />;
  }

  return (
    <Frame>
      <Container fluid>
        <Row>
          <Col md="12">
            <h4 className="mt-2 pb-2 pl-4 pt-2 text-center">Worksheet</h4>
          </Col>
        </Row>
        <Row>
          <Col
            className={classnames([
              "d-lg-block",
              "d-md-none",
              "d-sm-none",
              "d-xs-none",
              "d-xl-block",
            ])}
            lg={{offset: 1, size: 4}}
          >
            <p className="lead">
              The worksheet consists of a series of screens, with different
              features depending on the type of object. For example, clothing
              can be described in terms of material, neckline, sleeve type, and
              so on.
            </p>
            <p>
              Each feature option is represented by an image in a grid. Each
              image represents a concept from the Art and Architecture Thesaurus
              (AAT), Europeana Fashion Thesaurus, or CostumeCore vocabularies,
              with images primarily from Wikimedia Commons.
            </p>
            <hr />
            <br />
            <div className="w-100 text-center">
              <img className="img-fluid" src="../img/start-cropped.jpg"></img>
            </div>
          </Col>
          <Col className="text-left" lg="7" xs="12">
            <Container fluid>
              <Row>
                <Col xs="12">
                  <NewWorksheetStateCard
                    existingWorksheetStateIds={existingWorksheetStateIds}
                    onSubmit={onStartNewWorksheet}
                  ></NewWorksheetStateCard>
                  <div className="w-100 text-center">
                    <p>
                      Select <b>Worksheets</b> from the top navigation to return
                      to this page at any time.
                    </p>
                  </div>
                </Col>
              </Row>
              {existingWorksheetStateIds.length > 0 ? (
                <>
                  <Row className="mb-5"></Row>
                  <Row>
                    <Col xs="12">
                      {/*<ExistingWorksheetStates*/}
                      {/*  onDeleteWorksheetState={this.onDeleteWorksheetState}*/}
                      {/*  onRenameWorksheetState={this.onRenameWorksheetState}*/}
                      {/*  worksheetStateIds={existingWorksheetStateIds}*/}
                      {/*/>*/}
                    </Col>
                  </Row>
                </>
              ) : null}
            </Container>
          </Col>
        </Row>
      </Container>
    </Frame>
  );
};

const NewWorksheetStateCard: React.FunctionComponent<{
  existingWorksheetStateIds: readonly string[];
  onSubmit: (newWorksheetStateId: string) => void;
}> = ({existingWorksheetStateIds, onSubmit}) => {
  const [newWorksheetStateIdInputValue, setNewWorksheetStateIdInputValue] =
    useState<string>("");

  const onSubmitWrapper = () => {
    let newWorksheetStateIdStem = newWorksheetStateIdInputValue;
    if (!newWorksheetStateIdStem) {
      const currentDate = new Date();
      newWorksheetStateIdStem =
        "New object " +
        currentDate.getFullYear() +
        "-" +
        (currentDate.getMonth() + 1) +
        "-" +
        currentDate.getDate();
    }
    let newWorksheetStateIdSuffix = 0;
    let newWorksheetStateId = newWorksheetStateIdStem;
    while (
      existingWorksheetStateIds.some(
        (existingWorksheetStateId) =>
          existingWorksheetStateId === newWorksheetStateId
      )
    ) {
      newWorksheetStateId =
        newWorksheetStateIdStem + " (" + ++newWorksheetStateIdSuffix + ")";
    }

    onSubmit(newWorksheetStateId);
  };

  return (
    <Hammer onSwipeRight={onSubmitWrapper}>
      <div>
        <Card>
          <CardHeader>
            <CardTitle className={classnames(["mb-0", "text-center"])}>
              <b>Start a new worksheet</b> in{" "}
              <WorksheetStateConfigurationHeadline />
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Container fluid>
              <Row>
                <Col xs="10">
                  <Input
                    autoFocus
                    className="form-control"
                    onChange={(event) =>
                      setNewWorksheetStateIdInputValue(event.target.value)
                    }
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        event.stopPropagation();
                        onSubmitWrapper();
                      }
                    }}
                    placeholder="Object id or accession number (optional)"
                    type="text"
                    value={newWorksheetStateIdInputValue}
                  />
                </Col>
                <Col xs="2">
                  <Button color="primary" onClick={onSubmitWrapper}>
                    Create
                  </Button>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </div>
    </Hammer>
  );
};

const WorksheetStateConfigurationHeadline: React.FunctionComponent = () => {
  const currentUser = useCurrentUser();
  const [userSettings, setUserSettings] = useState<UserSettings | null>(null);
  const userSettingsService = useUserSettingsService();

  useEffect(() => {
    if (currentUser) {
      userSettingsService
        .getUserSettings(currentUser.id)
        .then(setUserSettings, () =>
          setUserSettings({
            worksheetConfiguration: defaultWorksheetConfiguration,
          })
        );
    } else {
      setUserSettings({worksheetConfiguration: defaultWorksheetConfiguration});
    }
  }, [currentUser, userSettingsService]);

  if (!userSettings) {
    return null;
  }

  let text: string;
  if (userSettings.worksheetConfiguration.state.googleSheets) {
    text = "Google Sheet";
  } else if (userSettings.worksheetConfiguration.state.localStorage) {
    text = "storage on this browser / machine";
  } else {
    throw new EvalError();
  }

  return (
    <>
      {text} (<Link to={Hrefs.userSettings}>Change</Link>)
    </>
  );
};
