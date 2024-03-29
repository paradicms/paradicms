import {faPencilAlt, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {JsonAppConfiguration, ModelSetFactory} from "@paradicms/models";
import {getStaticApi} from "@paradicms/next";
import {createDataset} from "@paradicms/rdf";
import classnames from "classnames";
import {GetStaticProps} from "next";
import Link from "next/link";
import {useRouter} from "next/router";
import * as React from "react";
import {useCallback, useEffect, useState} from "react";
import Hammer from "react-hammerjs";
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
  Table,
} from "reactstrap";
import {Exception} from "~/Exception";
import {Hrefs} from "~/Hrefs";
import {Frame} from "~/components/Frame";
import {GenericErrorHandler} from "~/components/GenericErrorHandler";
import {Headline} from "~/components/Headline";
import {Spinner} from "~/components/Spinner";
import {useCurrentUser} from "~/hooks/useCurrentUser";
import {useUserSettingsService} from "~/hooks/useUserSettingsService";
import {useWorksheetStateService} from "~/hooks/useWorksheetStateService";
import {UserSettings} from "~/models/UserSettings";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetMode} from "~/models/WorksheetMode";
import {defaultUserSettings} from "~/models/defaultUserSettings";
import {defaultWorksheetConfiguration} from "~/models/defaultWorksheetConfiguration";

const ExistingWorksheetStatesCard: React.FunctionComponent<{
  existingWorksheetStateIds: readonly string[];
  onDeleteWorksheet: (worksheetStateId: string) => Promise<void>;
  onRenameWorksheet: (kwds: {
    newWorksheetStateId: string;
    oldWorksheetStateId: string;
  }) => Promise<void>;
  setException: (exception: Exception) => void;
}> = ({
  existingWorksheetStateIds,
  onDeleteWorksheet,
  onRenameWorksheet,
  setException,
}) => (
  <Card>
    <CardHeader>
      <CardTitle className={classnames(["mb-0", "text-center"])}>
        <b>Existing worksheets</b> from <WorksheetStateConfigurationHeadline />
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Container fluid>
        <Row>
          <Col xs="12">
            <Table className="table table-bordered w-100 worksheet-states">
              <tbody>
                {existingWorksheetStateIds.map(worksheetStateId => (
                  <ExistingWorksheetStateTableRow
                    key={worksheetStateId}
                    onDeleteWorksheet={() =>
                      onDeleteWorksheet(worksheetStateId)
                    }
                    onRenameWorksheet={newWorksheetStateId =>
                      onRenameWorksheet({
                        newWorksheetStateId,
                        oldWorksheetStateId: worksheetStateId,
                      })
                    }
                    setException={setException}
                    worksheetStateId={worksheetStateId}
                  ></ExistingWorksheetStateTableRow>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </CardBody>
  </Card>
);

const ExistingWorksheetStateTableRow: React.FunctionComponent<{
  onDeleteWorksheet: () => Promise<void>;
  onRenameWorksheet: (newId: string) => Promise<void>;
  setException: (exception: Exception) => void;
  worksheetStateId: string;
}> = ({
  onDeleteWorksheet,
  onRenameWorksheet,
  setException,
  worksheetStateId,
}) => {
  const [deleting, setDeleting] = useState<boolean>(false);
  const [newWorksheetStateId, setNewWorksheetStateId] = useState<string>("");
  const [renaming, setRenaming] = useState<boolean>(false);

  const onRenameWorksheetWrapper = () => {
    onRenameWorksheet(newWorksheetStateId).then(() => {
      setNewWorksheetStateId("");
      setRenaming(false);
    }, setException);
  };

  if (deleting) {
    return (
      <tr>
        <td className="align-middle text-left w-90">{worksheetStateId}</td>
        <td className="align-middle text-center text-danger">
          <span>Delete?</span>
        </td>
        <td className="align-middle text-center">
          <Button color="primary" onClick={() => setDeleting(false)} size="sm">
            No
          </Button>
          <Button
            className="ms-4"
            color="danger"
            onClick={() =>
              onDeleteWorksheet().then(() => setDeleting(false), setException)
            }
            size="sm"
          >
            Yes
          </Button>
        </td>
      </tr>
    );
  } else if (renaming) {
    return (
      <tr>
        <td className="align-middle text-left w-90">
          <Input
            autoFocus
            className="form-control w-100"
            onChange={event => setNewWorksheetStateId(event.target.value)}
            onKeyPress={event => {
              if (event.key === "Enter") {
                event.stopPropagation();
                onRenameWorksheetWrapper();
              }
            }}
            placeholder="Rename"
            value={newWorksheetStateId}
            style={{display: "inline-block", width: "auto"}}
            type="text"
          />
        </td>
        <td className="align-middle text-center">
          <Button
            color="primary"
            onClick={() => {
              setNewWorksheetStateId("");
              setRenaming(false);
            }}
          >
            Cancel
          </Button>
        </td>
        <td className="align-middle text-center">
          <Button
            className={classnames({
              "confirm-rename-button": true,
              invisible: !newWorksheetStateId,
              visible: !!newWorksheetStateId,
            })}
            color="danger"
            onClick={onRenameWorksheetWrapper}
          >
            Confirm
          </Button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td className="align-middle text-left w-90">
          <Link
            href={Hrefs.worksheetMark({
              featureSetIri: null,
              featureIri: null,
              mode: WorksheetMode.BEGINNER,
              review: false,
              worksheetStateId,
            })}
            title="Open this worksheet"
          >
            {worksheetStateId}
          </Link>
        </td>
        <td className="align-middle text-center">
          <Button
            onClick={() => {
              setDeleting(true);
              setNewWorksheetStateId("");
              setRenaming(false);
            }}
            title="Delete this worksheet"
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </Button>
        </td>
        <td className="align-middle text-center">
          <Button
            onClick={() => {
              setDeleting(false);
              setNewWorksheetStateId("");
              setRenaming(true);
            }}
            title="Rename this worksheet"
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </Button>
        </td>
      </tr>
    );
  }
};

const NewWorksheetStateCard: React.FunctionComponent<{
  existingWorksheetStateIds: readonly string[];
  onSubmit: (newWorksheetStateId: string) => void;
}> = ({existingWorksheetStateIds, onSubmit}) => {
  const [
    newWorksheetStateIdInputValue,
    setNewWorksheetStateIdInputValue,
  ] = useState<string>("");

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
        existingWorksheetStateId =>
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
                    onChange={event => {
                      setNewWorksheetStateIdInputValue(event.target.value);
                    }}
                    onKeyPress={event => {
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
        .then(setUserSettings, () => setUserSettings(defaultUserSettings));
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
      {text} (<Link href={Hrefs.userSettings}>Change</Link>)
    </>
  );
};

interface StaticProps {
  readonly configuration: JsonAppConfiguration | null;
}

const emptyWorksheetDefinition = new WorksheetDefinition(
  ModelSetFactory.fromDataset(createDataset())
);

const IndexPage: React.FunctionComponent<StaticProps> = ({configuration}) => {
  const [exception, setException] = useState<Exception | null>(null);
  const [existingWorksheetStateIds, setExistingWorksheetStateIds] = useState<
    string[] | null
  >(null);
  const router = useRouter();
  const worksheetStateService = useWorksheetStateService({
    worksheetDefinition: emptyWorksheetDefinition,
  });

  useEffect(() => {
    if (!worksheetStateService) {
      return;
    }
    worksheetStateService
      .getWorksheetStateIds()
      .then(setExistingWorksheetStateIds, setException);
  }, [worksheetStateService]);

  const onDeleteWorksheet = useCallback(
    (worksheetStateId: string) => {
      return worksheetStateService!
        .deleteWorksheetState(worksheetStateId)
        .then(
          () =>
            worksheetStateService!
              .getWorksheetStateIds()
              .then(setExistingWorksheetStateIds, setException),
          setException
        );
    },
    [worksheetStateService]
  );

  const onRenameWorksheet = useCallback(
    (kwds: {newWorksheetStateId: string; oldWorksheetStateId: string}) => {
      const {newWorksheetStateId, oldWorksheetStateId} = kwds;
      return worksheetStateService!
        .renameWorksheetState({
          newId: newWorksheetStateId,
          oldId: oldWorksheetStateId,
        })
        .then(
          () =>
            worksheetStateService!
              .getWorksheetStateIds()
              .then(setExistingWorksheetStateIds, setException),
          setException
        );
    },
    [worksheetStateService]
  );

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
          router.push(
            Hrefs.worksheetMark({
              featureSetIri: null,
              featureIri: null,
              mode: WorksheetMode.BEGINNER,
              review: false,
              worksheetStateId: newWorksheetStateId,
            })
          );
        }, setException);
    },
    [router, worksheetStateService]
  );

  if (exception) {
    return <GenericErrorHandler exception={exception} />;
  } else if (!existingWorksheetStateIds || !worksheetStateService) {
    return <Spinner />;
  }

  return (
    <Frame configuration={configuration}>
      <Container fluid>
        <Row>
          <Col xs="12">
            <Headline>Worksheet</Headline>
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
              <img className="img-fluid" src="img/start-cropped.jpg"></img>
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
                      <ExistingWorksheetStatesCard
                        existingWorksheetStateIds={existingWorksheetStateIds}
                        onDeleteWorksheet={onDeleteWorksheet}
                        onRenameWorksheet={onRenameWorksheet}
                        setException={setException}
                      />
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

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const api = await getStaticApi();

  return {
    props: {
      configuration: await api.getAppConfiguration(),
    },
  };
};
