import * as React from "react";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import {Exception} from "~/Exception";

export const FatalErrorModal: React.FunctionComponent<{
  error?: Error;
  exception?: Exception;
  message?: string;
  onExit?: () => void;
}> = ({error, exception, message, onExit}) => {
  if (!onExit) {
    onExit = () => {
      return;
    };
  }
  if (!message) {
    if (error) {
      message = error.toString();
    } else if (exception) {
      message = exception.toString();
    } else {
      message = "";
    }
  }

  return (
    <div>
      <Modal isOpen={true} onExit={onExit}>
        <ModalHeader>Fatal error</ModalHeader>
        <ModalBody>{message}</ModalBody>
      </Modal>
    </div>
  );
};
