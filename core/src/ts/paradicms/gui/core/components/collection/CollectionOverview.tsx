import {RouteComponentProps} from "react-router";
import * as React from "react";
import {useState} from "react";
import * as collectionOverviewQuery from "paradicms/gui/core/api/queries/collectionOverviewQuery.graphql";
import {
    CollectionOverviewQuery,
    CollectionOverviewQuery_collectionByUri_objects,
    CollectionOverviewQueryVariables
} from "paradicms/gui/core/api/queries/types/CollectionOverviewQuery";
import {ObjectsGallery} from "paradicms/gui/core/components/object/ObjectsGallery";
import {
    CollectionOverviewObjectsPaginationQuery,
    CollectionOverviewObjectsPaginationQueryVariables
} from "paradicms/gui/core/api/queries/types/CollectionOverviewObjectsPaginationQuery";
import * as collectionOverviewObjectsPaginationQuery
    from "paradicms/gui/core/api/queries/collectionOverviewObjectsPaginationQuery.graphql";
import {useLazyQuery, useQuery} from "@apollo/react-hooks";
import {ObjectSummary} from "paradicms/gui/core/components/object/ObjectSummary";
import * as ReactLoader from "react-loader";
import {InstitutionCollectionObjectOverview} from "paradicms/gui/core/components/frame/InstitutionCollectionObjectOverview";
import {RightsTable} from "paradicms/gui/core/components/rights/RightsTable";
import {Container, Row} from "reactstrap";

export const CollectionOverview: React.FunctionComponent<RouteComponentProps<{ collectionUri: string; institutionUri: string; }>> = ({match}) => {
    const collectionUri = decodeURIComponent(match.params.collectionUri);
    const institutionUri = decodeURIComponent(match.params.institutionUri);

    const [state, setState] = useState<{ currentObjectsPage: number, objects: ObjectSummary[] | null }>({
        currentObjectsPage: 0,
        objects: null
    });

    const setObjects = (objects: CollectionOverviewQuery_collectionByUri_objects[]) => {
        setState(prevState => Object.assign({}, prevState, ({
            objects: objects.map(object_ => ({
                collectionUri,
                institutionUri, ...object_
            }))
        })));
    }

    const {loading: initialLoading, data: initialData} = useQuery<CollectionOverviewQuery, CollectionOverviewQueryVariables>(collectionOverviewQuery, {
        variables: {
            collectionUri,
            institutionUri
        }
    });

    const [getMoreObjects, {loading: moreObjectsLoading, data: moreObjectsData}] = useLazyQuery<CollectionOverviewObjectsPaginationQuery, CollectionOverviewObjectsPaginationQueryVariables>(collectionOverviewObjectsPaginationQuery);

    if (initialLoading || moreObjectsLoading) {
        return <ReactLoader loaded={false}/>;
    } else if (state.objects === null) {
        if (moreObjectsData) {
            console.info("setting objects from more objects data");
            setObjects(moreObjectsData.collectionByUri.objects);
        } else if (initialData) {
            console.info("setting objects from initial data");
            setObjects(initialData.collectionByUri.objects);
        }
        return <ReactLoader loaded={false}/>;
    }

    const onObjectsPageRequest = (page: number) => {
        console.info("request page " + page);
        setState(prevState => Object.assign({}, prevState, {currentObjectsPage: page, objects: null}));
        getMoreObjects({variables: {collectionUri: collectionUri, limit: 20, offset: page * 20}});
    }

    const rights = initialData ? (initialData.collectionByUri.rights ? initialData.collectionByUri.rights : initialData.institutionByUri.rights) : undefined;

    return (
        <InstitutionCollectionObjectOverview
            collectionName={initialData!.collectionByUri.name} collectionUri={collectionUri}
            institutionName={initialData!.institutionByUri.name} institutionUri={institutionUri}
            title={initialData!.collectionByUri.name}
        >
            <Container fluid>
                {rights ? <Row className="pb-4"><RightsTable rights={rights}/></Row> : null}
                <Row>
                    <ObjectsGallery
                        currentPage={state.currentObjectsPage}
                        maxPage={Math.ceil(initialData!.collectionByUri.objectsCount / 20)}
                        objects={state.objects}
                        onPageRequest={onObjectsPageRequest}
                    />
                </Row>
            </Container>
        </InstitutionCollectionObjectOverview>
    );
}
