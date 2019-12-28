import {RouteComponentProps} from "react-router";
import * as React from "react";
import {useState} from "react";
import * as searchResultsQuery from "paradicms/gui/core/api/queries/searchResultsQuery.graphql";
import {
    SearchResultsQuery,
    SearchResultsQuery_matchingObjects,
    SearchResultsQueryVariables
} from "paradicms/gui/core/api/queries/types/SearchResultsQuery";
import {ObjectsGallery} from "paradicms/gui/core/components/object/ObjectsGallery";
import {Frame} from "paradicms/gui/core/components/frame/Frame";
import {ObjectSummary} from "paradicms/gui/core/components/object/ObjectSummary";
import {useQuery} from "@apollo/react-hooks";
import * as ReactLoader from "react-loader";
import {BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";
import {Hrefs} from "paradicms/gui/core/Hrefs";

export const SearchResults: React.FunctionComponent<RouteComponentProps<{ text: string }>> = ({match}) => {
    const searchText = decodeURIComponent(match.params.text);

    const [state, setState] = useState<{ currentPage: number, maxPage: number, objects: ObjectSummary[] | null }>({
        currentPage: 0,
        maxPage: 0,
        objects: null
    });
    console.info("State is ", JSON.stringify(state));

    const setObjects = (objects: SearchResultsQuery_matchingObjects[], objectsCount: number) => {
        setState(prevState => Object.assign({}, prevState, ({
                maxPage: Math.ceil(objectsCount / 10),
                objects: objects.map(result => {
                    const {collection, institution, object} = result;
                    const {rights: objectRights, ...otherObjectProps} = object;
                    const rights = objectRights ? objectRights : (collection.rights ? collection.rights : institution.rights);
                    return {
                        collectionName: collection.name,
                        collectionUri: collection.uri,
                        institutionName: institution.name,
                        institutionUri: institution.uri,
                        rights: rights ? rights.text : undefined,
                        ...otherObjectProps
                    };
                })
            }))
        );
    }

    const {loading, data, refetch} = useQuery<SearchResultsQuery, SearchResultsQueryVariables>(searchResultsQuery, {
        variables: {
            limit: 10,
            offset: 0,
            text: searchText
        }
    });

    if (loading) {
        return <ReactLoader loaded={false}/>;
    }

    if (state.objects == null) {
        setObjects(data!.matchingObjects, data!.matchingObjectsCount);
    }

    const onPageRequest = (page: number) => {
        setState(prevState => ({...prevState, currentPage: page, objects: null}));
        refetch({limit: 10, offset: page * 10, text: searchText});
    }

    return (
        <Frame
            breadcrumbItems={<React.Fragment>
                <BreadcrumbItem><Link to={Hrefs.home}>Home</Link></BreadcrumbItem>
                <BreadcrumbItem><Link
                    to={Hrefs.search(searchText)}>Search: <i>{searchText}</i></Link></BreadcrumbItem>
            </React.Fragment>}
            cardTitle={<React.Fragment>Search: <i>{searchText}</i></React.Fragment>}
            documentTitle={"Search results: " + searchText}>
            <ObjectsGallery objects={state.objects!} currentPage={state.currentPage}
                            maxPage={state.maxPage!}
                            onPageRequest={onPageRequest}/>
        </Frame>
    );
}
