import * as React from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import {Hrefs} from "paradicms/gui/core/Hrefs";
import {Link} from "react-router-dom";

interface Collection {
    institutionUri: string;
    name: string;
    uri: string;
}

export const CollectionsList: React.FunctionComponent<{ collections: Collection[] }> = ({collections}) => (
    <ListGroup>
        {collections.map(collection =>
            <ListGroupItem key={collection.uri}><Link
                to={Hrefs.collection({
                    collectionUri: collection.uri,
                    institutionUri: collection.institutionUri
                })}>{collection.name}</Link></ListGroupItem>
        )}
    </ListGroup>);
