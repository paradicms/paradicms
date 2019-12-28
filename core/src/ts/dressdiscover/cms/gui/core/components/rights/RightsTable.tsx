import {CollectionOverviewQuery_collectionByUri_rights} from "dressdiscover/cms/gui/core/api/queries/types/CollectionOverviewQuery";
import {Uris} from "dressdiscover/cms/gui/core/util/Uris";
import * as React from "react";

type Rights = CollectionOverviewQuery_collectionByUri_rights;

export const RightsTable: React.FunctionComponent<{ rights: Rights }> = ({rights}) => (
    <table className="table-bordered w-100">
        <tbody>
        <tr>
            <td className="px-2"><strong>Rights</strong></td>
            <td className="px-2">{rights.text}</td>
        </tr>
        {rights.holder ?
            <tr>
                <td className="px-2"><strong>Holder</strong></td>
                <td className="px-2">{rights.holder}</td>
            </tr>
            : null}
        {rights.license ?
            <tr>
                <td className="px-2"><strong>License</strong></td>
                <td className="px-2">{Uris.isUrl(rights.license) ?
                    <a href={rights.license}>{rights.license}</a> :
                    <React.Fragment>{rights.license}</React.Fragment>}</td>
            </tr>
            : null}
        </tbody>
    </table>);
    
