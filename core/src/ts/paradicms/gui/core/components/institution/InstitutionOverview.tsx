import {RouteComponentProps} from "react-router";
import * as React from "react";
import {CollectionsList} from "paradicms/gui/core/components/collection/CollectionsList";
import {ApolloQueryWrapper} from "paradicms/gui/core/api/ApolloQueryWrapper";
import * as institutionOverviewQuery from "paradicms/gui/core/api/queries/institutionOverviewQuery.graphql";
import {
    InstitutionOverviewQuery,
    InstitutionOverviewQueryVariables
} from "paradicms/gui/core/api/queries/types/InstitutionOverviewQuery";
import {InstitutionCollectionObjectOverview} from "paradicms/gui/core/components/frame/InstitutionCollectionObjectOverview";

export const InstitutionOverview: React.FunctionComponent<RouteComponentProps<{ institutionUri: string; }>> = ({match}) => {
    const institutionUri = decodeURIComponent(match.params.institutionUri);
    return (
        <ApolloQueryWrapper<InstitutionOverviewQuery, InstitutionOverviewQueryVariables>
            query={institutionOverviewQuery}
            variables={{institutionUri}}>
            {({data}) =>
                <InstitutionCollectionObjectOverview institutionName={data.institutionByUri.name}
                                                     institutionUri={institutionUri}
                                                     title={data.institutionByUri.name + " - Collections"}>
                    <CollectionsList
                        collections={data.institutionByUri.collections.map(collection => ({institutionUri, ...collection}))}/>
                </InstitutionCollectionObjectOverview>
            }
        </ApolloQueryWrapper>);
}
