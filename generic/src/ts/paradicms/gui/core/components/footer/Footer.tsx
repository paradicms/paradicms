import {Hrefs} from 'paradicms/gui/generic/Hrefs';
import * as React from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Row} from 'reactstrap';

export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <Container fluid>
                    <Row>
                        <Col className="text-center" xs="12">
                            <a href={Hrefs.contact}>Contact</a>&nbsp;|&nbsp;
                            <Link to={Hrefs.privacy}>Privacy</Link>
                        </Col>
                    </Row>
                    <Row>&nbsp;</Row>
                    <Row>
                        <Col className="text-center" xs="12">
                            <p className="muted">&copy; Copyright 2019,&nbsp;
                        <a href="https://minorgordon.net">Minor Gordon</a>. All rights reserved</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}
