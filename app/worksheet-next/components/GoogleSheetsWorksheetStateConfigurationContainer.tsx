import {CurrentUser} from "~/models/CurrentUser";
import {GoogleSheetsWorksheetStateConfiguration} from "~/models/GoogleSheetsWorksheetStateConfiguration";
import {useCallback, useEffect, useState} from "react";
import {
  convertGapiErrorToException,
  GapiException,
} from "~/services/GapiException";
import {GenericErrorHandler} from "~/components/GenericErrorHandler";
import {Spinner} from "~/components/Spinner";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";
import classnames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Secrets} from "~/Secrets";
import React = require("react");

export const GoogleSheetsWorksheetStateConfigurationContainer: React.FunctionComponent<{
  currentUser: CurrentUser;
  onChange: (
    newWorksheetStateConfiguration: GoogleSheetsWorksheetStateConfiguration
  ) => void;
  worksheetStateConfiguration: GoogleSheetsWorksheetStateConfiguration | null;
}> = ({currentUser, onChange, worksheetStateConfiguration}) => {
  const [exception, setException] = useState<GapiException | null>(null);
  const [
    deletingExistingFile,
    setDeletingExistingFile,
  ] = useState<gapi.client.drive.File | null>(null);
  const [existingFiles, setExistingFiles] = useState<
    gapi.client.drive.File[] | null
  >(null);
  const [newSheetName, setNewSheetName] = useState<string>("");

  const loadGapiClient = useCallback(
    () =>
      new Promise<void>(resolve => {
        gapi.load("client", () => {
          gapi.client.load("drive", "v3", () => {
            resolve();
          });
        });
      })
        .then(
          () =>
            gapi.client.init({
              apiKey: Secrets.GOOGLE_API_KEY,
            }),
          reason => convertGapiErrorToException(reason)
        )
        .then(() => {
          gapi.client.setToken({
            access_token: currentUser.session.accessToken,
          });
        }),
    [currentUser]
  );

  const refreshExistingFiles = useCallback(() => {
    loadGapiClient().then(() =>
      gapi.client.drive.files.list({}).then(
        response => setExistingFiles(response.result.files ?? []),
        reason => setException(convertGapiErrorToException(reason))
      )
    );
  }, [loadGapiClient]);

  useEffect(() => {
    refreshExistingFiles();
  }, [refreshExistingFiles]);

  const onClickConfirmDeleteExistingFile = useCallback(() => {
    if (!deletingExistingFile) {
      return;
    }
    loadGapiClient().then(
      () =>
        gapi.client.drive.files
          .delete({fileId: deletingExistingFile.id as string})
          .then(
            () => {
              setDeletingExistingFile(null);
              refreshExistingFiles();
            },
            reason => {
              setDeletingExistingFile(null);
              setException(convertGapiErrorToException(reason));
            }
          ),
      setException
    );
  }, [deletingExistingFile, refreshExistingFiles]);

  const onClickNewSheetButton = useCallback(() => {
    if (newSheetName.length === 0) {
      return;
    }
    loadGapiClient().then(
      () =>
        gapi.client.drive.files
          .create({
            resource: {
              mimeType: "application/vnd.google-apps.spreadsheet",
              name: newSheetName,
            },
          })
          .then(
            () => {
              setExistingFiles(null);
              setNewSheetName("");
              refreshExistingFiles();
            },
            reason => setException(convertGapiErrorToException(reason))
          ),
      setException
    );
  }, [newSheetName, refreshExistingFiles]);

  if (exception) {
    return <GenericErrorHandler exception={exception} />;
  }

  if (deletingExistingFile) {
    console.info("Showing modal");
    return (
      <Modal isOpen={true}>
        <ModalHeader>
          Are you sure you want to delete the sheet '{deletingExistingFile.name}
          '?
        </ModalHeader>
        <ModalBody>
          <Container fluid>
            <Row>
              <Col className="text-center" xs="6">
                <Button
                  color="danger"
                  onClick={onClickConfirmDeleteExistingFile}
                >
                  Delete
                </Button>
              </Col>
              <Col className="text-center" xs="6">
                <Button
                  color="default"
                  onClick={() => setDeletingExistingFile(null)}
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </Container>
        </ModalBody>
      </Modal>
    );
  }

  if (!existingFiles) {
    return <Spinner />;
  }

  return (
    <Container fluid>
      {existingFiles.length ? (
        <>
          <Row className="mb-4">
            <Col xs="6">
              <Card>
                <CardHeader>
                  <CardTitle className={classnames(["mb-0", "text-center"])}>
                    Select an existing Sheet
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="table table-bordered w-100">
                    <tbody>
                      {existingFiles.map(existingFile => {
                        const selected: boolean =
                          !!worksheetStateConfiguration &&
                          worksheetStateConfiguration.spreadsheetId ===
                            existingFile.id;
                        const tdStyle:
                          | React.CSSProperties
                          | undefined = selected
                          ? {borderWidth: "4px"}
                          : undefined;
                        return (
                          <tr key={existingFile.id}>
                            <td
                              className={classnames({
                                "border-success": selected,
                              })}
                              style={tdStyle}
                            >
                              <Button
                                className="w-100"
                                color="secondary"
                                onClick={() =>
                                  onChange({spreadsheetId: existingFile.id!})
                                }
                              >
                                {existingFile.name}
                              </Button>
                            </td>
                            <td
                              className="align-middle text-center"
                              style={{width: "10%"}}
                            >
                              <Button
                                onClick={() =>
                                  setDeletingExistingFile(existingFile)
                                }
                                title="Delete this Sheet"
                              >
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </>
      ) : null}
      <Row>
        <Col xs="6">
          <Form
            onSubmit={event => {
              onClickNewSheetButton();
              event.preventDefault();
            }}
          >
            <Input
              type="text"
              onChange={event => setNewSheetName(event.target.value)}
              placeholder="New sheet name"
              style={{width: "32em"}}
              value={newSheetName}
            ></Input>
            <Button
              className="mt-2"
              disabled={!newSheetName.length}
              color="primary"
              onClick={onClickNewSheetButton}
            >
              Create a new Sheet
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
