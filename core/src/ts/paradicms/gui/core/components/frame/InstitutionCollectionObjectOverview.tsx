import {BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";
import {Hrefs} from "paradicms/gui/core/Hrefs";
import * as React from "react";
import {Frame} from "paradicms/gui/core/components/frame/Frame";
import {stripHtml} from "paradicms/gui/core/util/stripHtml";

export const InstitutionCollectionObjectOverview: React.FunctionComponent<{
    children: React.ReactNode;
    description?: string;
    institutionName: string;
    institutionUri: string;
    collectionName?: string;
    collectionUri?: string;
    objectTitle?: string;
    objectUri?: string;
    title: string
}> = (props) => (
    <Frame
        breadcrumbItems={<React.Fragment>
            <BreadcrumbItem><Link to={Hrefs.home}>Home</Link></BreadcrumbItem>
            <BreadcrumbItem>Institutions</BreadcrumbItem>
            <BreadcrumbItem><Link
                to={Hrefs.institution(props.institutionUri)}>{props.institutionName}</Link></BreadcrumbItem>
            {props.collectionName && props.collectionUri ?
                <React.Fragment>
                    <BreadcrumbItem>Collections</BreadcrumbItem>
                    <BreadcrumbItem><Link
                        to={Hrefs.collection({
                            collectionUri: props.collectionUri,
                            institutionUri: props.institutionUri
                        })}>{props.collectionName}</Link></BreadcrumbItem>
                    {props.objectTitle && props.objectUri ?
                        <React.Fragment>
                            <BreadcrumbItem>Objects</BreadcrumbItem>
                            <BreadcrumbItem><Link
                                to={Hrefs.object({
                                    collectionUri: props.collectionUri,
                                    institutionUri: props.institutionUri,
                                    objectUri: props.objectUri
                                })}>{props.objectTitle}</Link></BreadcrumbItem>
                        </React.Fragment> : null}
                </React.Fragment> : null}
        </React.Fragment>}
        documentTitle={[props.institutionName, props.collectionName, props.objectTitle].filter(name => !!name).join(" - ")}
        cardTitle={props.title}
    >
        {props.description ?
            <p>{stripHtml(props.description)}</p> : null}
        {props.children}
    </Frame>
);
