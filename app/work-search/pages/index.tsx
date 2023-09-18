import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  AgentsSort,
  EventsSort,
  GetModelsResult,
  GetWorkLocationsResult,
  GetWorksResult,
  WorksQuery,
  WorksSort,
  defaultAgentsSort,
  defaultEventsSort,
  defaultWorksSort,
} from "@paradicms/api";
import {JsonAppConfiguration} from "@paradicms/models";
import {
  ApiConfiguration,
  ApiProvider,
  getAbsoluteImageSrc,
  getClientApiConfiguration,
  getStaticApi,
  useApi,
} from "@paradicms/next";
import {
  AgentsGallery,
  FilterControlsContainer,
  Pagination,
  WorkAgentsSortDropdown,
  WorkEventsTimeline,
  WorksGallery,
  WorksSortDropdown,
  createWorksFilterControls,
  galleryThumbnailSelector,
  getWorkLocationIcon,
  getWorkLocationLabel,
  valueThumbnailSelector,
} from "@paradicms/react-dom-components";
import {
  usePageQueryParam,
  useSortQueryParams,
  useWorksQueryParam,
} from "@paradicms/react-dom-hooks";
import {calculatePageMax} from "@paradicms/utilities";
import {Layout} from "components/Layout";
import equal from "fast-deep-equal";
import log from "loglevel";
import {GetStaticProps} from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import {useRouter} from "next/router";
import * as React from "react";
import {useEffect, useState} from "react";
import {
  Button,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import {LocationsMapLocation} from "single-page-exhibition/components/LocationsMap";
import {useQueryParam} from "use-query-params";
import {Hrefs} from "../lib/Hrefs";
import {JsonProperty} from "../lib/JsonProperty";
import {getDefaultWorksQueryFilters} from "../lib/getDefaultWorksQueryFilters";
import {workSearchWorkEventJoinSelector} from "../lib/workSearchWorkEventJoinSelector";
import {workSearchWorkJoinSelector} from "../lib/workSearchWorkJoinSelector";

const LocationsMap = dynamic<{
  readonly locations: readonly LocationsMapLocation[];
}>(
  () =>
    import("../components/LocationsMap").then(module => module.LocationsMap),
  {ssr: false}
);

interface GetWorkAgentsState {
  readonly result: GetModelsResult & {modelKeysSet: Set<string>};
  readonly worksQuery: WorksQuery;
  readonly workAgentsPage: number;
  readonly workAgentsSort: AgentsSort;
}

interface GetWorkEventsState {
  readonly result: GetModelsResult & {modelKeysSet: Set<string>};
  readonly worksQuery: WorksQuery;
  readonly workEventsPage: number;
  readonly workEventsSort: EventsSort;
}

interface GetWorkLocationsState {
  readonly result: GetWorkLocationsResult;
  readonly worksQuery: WorksQuery;
}

interface GetWorksState {
  readonly result: GetWorksResult;
  readonly worksQuery: WorksQuery;
  readonly worksPage: number;
  readonly worksSort: WorksSort;
}

interface StaticProps {
  readonly apiConfiguration: ApiConfiguration;
  readonly collectionLabel: string | null;
  readonly configuration: JsonAppConfiguration | null;
  readonly properties: readonly JsonProperty[];
}

type TabKey = "workAgents" | "workEvents" | "workLocations" | "works";

const workAgentsPageMax = (kwds: {
  getWorkAgentsResult: GetModelsResult;
  objectsPerPage: number;
}) =>
  calculatePageMax({
    objectsPerPage: kwds.objectsPerPage,
    totalObjects: kwds.getWorkAgentsResult.totalModelsCount,
  });

const worksPageMax = (kwds: {
  getWorksResult: GetWorksResult;
  objectsPerPage: number;
}) =>
  calculatePageMax({
    objectsPerPage: kwds.objectsPerPage,
    totalObjects: kwds.getWorksResult.totalModelsCount,
  });

const IndexPageImpl: React.FunctionComponent<Omit<
  StaticProps,
  "apiConfiguration"
>> = ({collectionLabel, configuration, properties}) => {
  const api = useApi();
  const router = useRouter();

  const [activeTabKeyQueryParam, setActiveTabKey] = useQueryParam<TabKey>(
    "tab"
  );
  const activeTabKey: TabKey = activeTabKeyQueryParam ?? "works";

  const [
    getWorkAgentsState,
    setGetWorkAgentsState,
  ] = useState<GetWorkAgentsState | null>(null);

  const [
    getWorkEventsState,
    setGetWorkEventsState,
  ] = useState<GetWorkEventsState | null>(null);

  const [
    // @ts-ignore
    getWorkLocationsState,
    setGetWorkLocationsState,
  ] = useState<GetWorkLocationsState | null>(null);

  const [getWorksState, setGetWorksState] = useState<GetWorksState | null>(
    null
  );

  const objectsPerPage = configuration?.objectsPerPage ?? 10;

  const [workAgentsPage, setWorkAgentsPage] = usePageQueryParam(
    "workAgentsPage"
  );
  const [workAgentsSort, setWorkAgentsSort] = useSortQueryParams<AgentsSort>(
    defaultAgentsSort,
    "workAgentsSort"
  );

  const [workEventsPage, setWorkEventsPage] = usePageQueryParam(
    "workEventsPage"
  );
  const [workEventsSort, setWorkEventsSort] = useSortQueryParams<EventsSort>(
    defaultEventsSort,
    "workEventsSort"
  );

  const [worksPage, setWorksPage] = usePageQueryParam("worksPage");
  const [worksQuery, setWorksQuery] = useWorksQueryParam(
    {
      filters: getDefaultWorksQueryFilters(properties),
    },
    "query"
  );
  const [worksSort, setWorksSort] = useSortQueryParams<WorksSort>(
    defaultWorksSort,
    "worksSort"
  );

  log.trace("Work query:", JSON.stringify(worksQuery));
  log.trace("Works page:", worksPage);
  log.trace("Work agents page:", workAgentsPage);

  useEffect(() => {
    if (getWorksState !== null) {
      if (
        getWorksState.worksPage === worksPage &&
        equal(getWorksState.worksQuery, worksQuery) &&
        equal(getWorksState.worksSort, worksSort)
      ) {
        log.trace("duplicate getWorks");
        return;
      }
    }
    log.trace("invoking getWorks");
    api
      .getWorks({
        joinSelector: workSearchWorkJoinSelector,
        limit: objectsPerPage,
        offset: worksPage * objectsPerPage,
        query: worksQuery,
        sort: worksSort,
        valueFacetValueThumbnailSelector: valueThumbnailSelector,
      })
      .then(result => {
        log.debug("getWorks result:", result.totalModelsCount);
        setGetWorksState({
          result,
          worksPage,
          worksQuery,
          worksSort,
        });
      });
  }, [api, worksPage, worksQuery, worksSort]);

  useEffect(() => {
    if (getWorkAgentsState !== null) {
      if (
        getWorkAgentsState.workAgentsPage === workAgentsPage &&
        equal(getWorkAgentsState.workAgentsSort, workAgentsSort) &&
        equal(getWorkAgentsState.worksQuery, worksQuery)
      ) {
        log.trace("duplicate getWorkAgents");
        return;
      }
    }
    log.trace("invoking getWorkAgents");
    api
      .getWorkAgents({
        joinSelector: {
          thumbnail: galleryThumbnailSelector,
        },
        limit: objectsPerPage,
        offset: workAgentsPage * objectsPerPage,
        sort: workAgentsSort,
        worksQuery,
      })
      .then(result => {
        log.debug("getWorkAgents result:", result.totalModelsCount);
        setGetWorkAgentsState({
          result: {
            ...result,
            modelKeysSet: new Set(result.modelKeys),
          },
          workAgentsPage,
          workAgentsSort,
          worksQuery,
        });
      });
  }, [api, workAgentsPage, workAgentsSort, worksQuery]);

  useEffect(() => {
    if (getWorkEventsState !== null) {
      if (
        getWorkEventsState.workEventsPage === workEventsPage &&
        equal(getWorkEventsState.workEventsSort, workEventsSort) &&
        equal(getWorkEventsState.worksQuery, worksQuery)
      ) {
        log.trace("duplicate getWorkEvents");
        return;
      }
    }

    log.trace("invoking getWorkEvents");
    api
      .getWorkEvents({
        eventsQuery: {
          filters: [
            {
              exists: true,
              type: "EventSortDateExistence",
            },
          ],
        },
        joinSelector: workSearchWorkEventJoinSelector,
        limit: (workEventsPage + 1) * objectsPerPage,
        offset: 0,
        sort: workEventsSort,
        worksQuery,
      })
      .then(result => {
        log.debug("getWorkEvents result:", result.totalModelsCount);
        setGetWorkEventsState({
          result: {...result, modelKeysSet: new Set(result.modelKeys)},
          workEventsPage,
          workEventsSort,
          worksQuery,
        });
      });
  }, [api, workEventsPage, workEventsSort, worksQuery]);

  useEffect(() => {
    if (
      getWorkLocationsState !== null &&
      equal(getWorkLocationsState.worksQuery, worksQuery)
    ) {
      log.trace("duplicate getWorkLocations");
      return;
    }

    log.trace("invoking getWorkLocations");
    api
      .getWorkLocations({
        locationsQuery: {
          filters: [
            {
              exists: true,
              type: "LocationCentroidExistence",
            },
          ],
        },
        worksQuery,
      })
      .then(result => {
        log.debug("getWorkLocations result:", result.workLocations.length);
        setGetWorkLocationsState({
          result,
          worksQuery,
        });
      });
  }, [api, worksQuery]);

  const [showFilters, setShowFilters] = useState<boolean>(false);

  if (getWorksState === null) {
    return null;
  }

  // if (works.length === 0) {
  //   return <h3>No matching works found.</h3>;
  // }

  const filterControls = createWorksFilterControls({
    facets: getWorksState.result.facets,
    filters: worksQuery.filters ?? [],
    getAbsoluteImageSrc: relativeImageSrc =>
      getAbsoluteImageSrc(relativeImageSrc, router),
    onChangeFilters: filters => {
      setWorkAgentsPage(undefined);
      setWorkAgentsSort(undefined);
      setWorkEventsPage(undefined);
      setWorkEventsSort(undefined);
      setWorksPage(undefined);
      setWorksQuery({...worksQuery, filters});
      setWorksSort(undefined);
    },
  });

  const renderWorkLink = (work: {key: string}, children: React.ReactNode) => (
    <Link href={Hrefs.work(work)}>{children}</Link>
  );

  const tabs: {content: React.ReactNode; key: TabKey; title: string}[] = [];
  tabs.push({
    key: "works",
    title: "Works",
    content: (
      <Container fluid>
        <Row className="mb-4">
          <Col className="d-flex justify-content-end px-0">
            <div className="d-flex flex-column justify-content-center pe-4">
              <div>
                <span>{getWorksState.result.totalModelsCount}</span>&nbsp;
                <span>
                  {getWorksState.result.totalModelsCount === 1
                    ? "work"
                    : "works"}
                </span>
                &nbsp;
                {worksQuery.text ? (
                  <span>
                    matching <i>{worksQuery.text}</i>
                  </span>
                ) : (
                  <span>matched</span>
                )}
              </div>
            </div>
            <span className="d-inline-block pe-4">
              <WorksSortDropdown onChange={setWorksSort} value={worksSort} />
            </span>
            {filterControls.length > 0 ? (
              <>
                <Button onClick={() => setShowFilters(true)} variant="primary">
                  <span>
                    <span className="d-inline-block pe-2">Filter</span>
                    <FontAwesomeIcon icon={faFilter} style={{width: "1rem"}} />
                  </span>
                </Button>
                <Offcanvas
                  direction="end"
                  isOpen={showFilters}
                  toggle={() => setShowFilters(!showFilters)}
                >
                  <OffcanvasHeader toggle={() => setShowFilters(!showFilters)}>
                    <strong>Filter works</strong>
                  </OffcanvasHeader>
                  <OffcanvasBody className="p-4">
                    <FilterControlsContainer filterControls={filterControls} />
                  </OffcanvasBody>
                </Offcanvas>
              </>
            ) : null}
          </Col>
        </Row>
        <Row>
          <WorksGallery
            getAbsoluteImageSrc={relativeImageSrc =>
              getAbsoluteImageSrc(relativeImageSrc, router)
            }
            renderWorkLink={renderWorkLink}
            works={getWorksState.result.modelSet.works}
          />
        </Row>
        {worksPageMax({getWorksResult: getWorksState.result, objectsPerPage}) >
        0 ? (
          <Row style={{marginTop: "-25px"}}>
            <Col className="d-flex justify-content-center" xs={12}>
              <Pagination
                count={
                  worksPageMax({
                    getWorksResult: getWorksState.result,
                    objectsPerPage,
                  }) + 1
                }
                page={worksPage + 1}
                onChange={(_, newPage) => setWorksPage(newPage - 1)}
              />
            </Col>
          </Row>
        ) : null}
      </Container>
    ),
  });
  if (
    getWorkLocationsState &&
    getWorkLocationsState.result.workLocations.length > 0
  ) {
    tabs.push({
      key: "workLocations",
      title: "Map",
      content: (
        <LocationsMap
          locations={getWorkLocationsState.result.workLocations.map(
            workLocation => ({
              centroid: workLocation.location.centroid!,
              icon: getWorkLocationIcon(workLocation),
              label: getWorkLocationLabel(workLocation),
            })
          )}
        />
      ),
    });
  }
  if (getWorkAgentsState && getWorkAgentsState.result.modelKeys.length > 0) {
    tabs.push({
      key: "workAgents",
      title: "People",
      content: (
        <Container fluid>
          <Row className="mb-4">
            <Col className="d-flex justify-content-end">
              <WorkAgentsSortDropdown
                onChange={setWorkAgentsSort}
                value={workAgentsSort}
              />
            </Col>
          </Row>
          <Row>
            <AgentsGallery
              agents={getWorkAgentsState.result.modelSet.works
                .flatMap(work =>
                  work.agents.filter(agent =>
                    getWorkAgentsState.result.modelKeysSet.has(agent.agent.key)
                  )
                )
                .map(agent => agent.agent)}
              getAbsoluteImageSrc={relativeImageSrc =>
                getAbsoluteImageSrc(relativeImageSrc, router)
              }
            />
          </Row>
          {workAgentsPageMax({
            getWorkAgentsResult: getWorkAgentsState.result,
            objectsPerPage,
          }) > 0 ? (
            <Row className="mt-4">
              <Col className="d-flex justify-content-center" xs={12}>
                <Pagination
                  count={
                    workAgentsPageMax({
                      getWorkAgentsResult: getWorkAgentsState.result,
                      objectsPerPage,
                    }) + 1
                  }
                  page={workAgentsPage + 1}
                  onChange={(_, newPage) => setWorkAgentsPage(newPage - 1)}
                />
              </Col>
            </Row>
          ) : null}
        </Container>
      ),
    });
  }
  if (getWorkEventsState && getWorkEventsState.result.modelKeys.length > 0) {
    tabs.push({
      key: "workEvents",
      title: "Timeline",
      content: (
        <WorkEventsTimeline
          getAbsoluteImageSrc={relativeImageSrc =>
            getAbsoluteImageSrc(relativeImageSrc, router)
          }
          page={workEventsPage}
          pageMax={calculatePageMax({
            objectsPerPage,
            totalObjects: getWorkEventsState.result.totalModelsCount,
          })}
          renderWorkLink={renderWorkLink}
          setPage={setWorkEventsPage}
          workEvents={getWorkEventsState.result.modelSet.works.flatMap(work =>
            work.events
              .filter(workEvent =>
                getWorkEventsState.result.modelKeysSet.has(workEvent.key)
              )
              .map(workEvent => ({work, workEvent}))
          )}
        />
      ),
    });
  }

  return (
    <Layout
      collectionLabel={collectionLabel ?? undefined}
      configuration={configuration}
      onSearch={text => {
        setWorkAgentsPage(undefined);
        setWorkAgentsSort(undefined);
        setWorkEventsPage(undefined);
        setWorkEventsSort(undefined);
        setWorksPage(undefined);
        setWorksQuery({text});
        setWorksSort(undefined);
      }}
      properties={properties}
    >
      <>
        {tabs.length === 1 ? (
          tabs[0].content
        ) : (
          <>
            <Nav tabs>
              {tabs.map(tab => (
                <NavItem key={tab.key}>
                  <NavLink
                    className={activeTabKey === tab.key ? "active" : undefined}
                    onClick={() => setActiveTabKey(tab.key)}
                    style={{cursor: "pointer", fontSize: "small"}}
                  >
                    {tab.title}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
            <TabContent activeTab={activeTabKey}>
              {tabs.map(tab => (
                <TabPane key={tab.key} tabId={tab.key}>
                  <div className="mt-2">{tab.content}</div>
                </TabPane>
              ))}
            </TabContent>
          </>
        )}
      </>
    </Layout>
  );
};

// (IndexPageImpl as any).whyDidYouRender = true;

const IndexPage: React.FunctionComponent<StaticProps> = ({
  apiConfiguration,
  ...otherProps
}) => (
  <ApiProvider apiConfiguration={apiConfiguration}>
    <IndexPageImpl {...otherProps} />
  </ApiProvider>
);

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const api = await getStaticApi();

  const collections = (
    await api.getCollections({
      limit: 1,
    })
  ).modelSet.collections;

  return {
    props: {
      apiConfiguration: await getClientApiConfiguration(),
      collectionLabel: collections.length === 1 ? collections[0].label : null,
      configuration: await api.getAppConfiguration(),
      properties: (await api.getProperties()).modelSet.properties.map(
        property => ({
          filterable: property.filterable,
          iris: property.iris,
          label: property.label,
        })
      ),
    },
  };
};
