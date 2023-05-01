import {AuthorizationException} from "~/services/AuthorizationException";
import {Hrefs} from "~/Hrefs";
import * as React from "react";
import {useCallback} from "react";
import {
  Button,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import {useNavigate} from "react-router-dom";
import {useCurrentUserService} from "~/hooks/useCurrentUserService";

export const AuthorizationExceptionModal: React.FunctionComponent<{
  exception: AuthorizationException;
}> = ({exception}) => {
  const currentUserService = useCurrentUserService();
  const navigate = useNavigate();

  const onClickAnonymous = useCallback(
    () => () => {
      currentUserService.deleteCurrentUser();
      navigate(Hrefs.index);
    },
    [currentUserService, navigate]
  );

  return (
    <div>
      <Modal backdrop="static" centered={true} keyboard={false} isOpen={true}>
        <ModalHeader>Authorization exception</ModalHeader>
        <ModalBody>
          <Container fluid>
            <Row>
              <Col xs="12">
                <p>
                  You have configured the application to use access-controlled
                  storage, such as Google Sheets, but you are currently logged
                  out. Please login to continue.
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <Button
                  className=""
                  color="primary"
                  onClick={() => navigate(Hrefs.login)}
                >
                  Login
                </Button>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs="12">
                <Button
                  className="w-100"
                  color="danger"
                  onClick={onClickAnonymous}
                >
                  Continue without logging in, storing worksheets locally
                </Button>
              </Col>
            </Row>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
};
