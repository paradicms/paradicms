import * as React from 'react';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import {Exception} from "dressdiscover/cms/gui/core/Exception";

interface Props {
    error?: Error;
    exception?: Exception;
    message?: string;
    onExit?: () => void;
}

export class FatalErrorModal extends React.Component<Props> {
    render() {
        let { message, onExit } = this.props;
        if (!onExit) {
            onExit = () => { return; };
        }
        const { error, exception } = this.props;
        if (!message) {
            if (error) {
                message = error.toString();
            } else if (exception) {
                message = exception.message;
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
    }
}
