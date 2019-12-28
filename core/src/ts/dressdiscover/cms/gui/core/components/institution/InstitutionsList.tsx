import * as React from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import {Hrefs} from "dressdiscover/cms/gui/core/Hrefs";
import {Link} from "react-router-dom";

interface Institution {
    name: string;
    uri: string;
}

export const InstitutionsList: React.FunctionComponent<{ institutions: Institution[] }> = ({institutions}) =>
    <ListGroup>
        {institutions.map(institution =>
            <ListGroupItem key={institution.uri}>
                <Link to={Hrefs.institution(institution.uri)}>{institution.name}</Link>
            </ListGroupItem>
        )}
    </ListGroup>
