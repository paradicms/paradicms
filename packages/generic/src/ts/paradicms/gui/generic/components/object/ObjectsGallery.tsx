import * as React from "react";
import {ObjectCard} from "paradicms/gui/generic/components/object/ObjectCard";
import {Col, Container, Row} from "reactstrap";
import {ObjectSummary} from "paradicms/gui/generic/components/object/ObjectSummary";
import {DefaultPagination, DefaultPaginationProps} from "paradicms-gui-lib";

interface Props extends DefaultPaginationProps {
    objects: ObjectSummary[];
}

export const ObjectsGallery: React.FunctionComponent<Props> = ({objects, ...paginationProps}) => (
    <Container fluid>
        <Row>
            {objects.map(object =>
                <div className="mr-4 mb-4" key={object.uri}>
                    <ObjectCard object={object}/>
                </div>)}
        </Row>
        <Row>
            <Col className="p-0" xs="12">
                <DefaultPagination {...paginationProps}/>
            </Col>
        </Row>
    </Container>);
