import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  AgentsSort,
  EventsSort,
  GetModelsResult,
  GetWorkLocationsResult,
  GetWorksResult,
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

  const [getWorkAgentsResult, setGetWorkAgentsResult] = useState<
    (GetModelsResult & {modelKeysSet: Set<string>}) | null
  >(null);

  const [getWorkEventsResult, setGetWorkEventsResult] = useState<
    (GetModelsResult & {modelKeysSet: Set<string>}) | null
  >(null);

  const [
    // @ts-ignore
    getWorkLocationsResult,
    setGetWorkLocationsResult,
  ] = useState<GetWorkLocationsResult | null>(null);

  const [getWorksResult, setGetWorksResult] = useState<GetWorksResult | null>(
    null
  );

  const [loadingWorkAgents, setLoadingWorkAgents] = useState<boolean>(false);
  const [loadingWorkEvents, setLoadingWorkEvents] = useState<boolean>(false);
  const [loadingWorkLocations, setLoadingWorkLocations] = useState<boolean>(
    false
  );
  const [loadingWorks, setLoadingWorks] = useState<boolean>(false);

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

  console.info("Work query:", JSON.stringify(worksQuery));
  log.trace("Work query:", JSON.stringify(worksQuery));
  log.trace("Works page:", worksPage);
  log.trace("Work agents page:", workAgentsPage);

  useEffect(() => {
    if (loadingWorks) {
      return;
    }
    console.info("loading works");
    log.trace("invoking getWorks");
    setLoadingWorks(true);
    api
      .getWorks({
        joinSelector: workSearchWorkJoinSelector,
        limit: objectsPerPage,
        offset: worksPage * objectsPerPage,
        query: worksQuery,
        sort: worksSort,
        valueFacetValueThumbnailSelector: valueThumbnailSelector,
      })
      .then(getWorksResult => {
        log.debug("getWorks result:", getWorksResult.totalModelsCount);
        setGetWorksResult(getWorksResult);
        setLoadingWorks(false);
      });
  }, [api, worksPage, worksQuery, worksSort]);

  // Effect that responds to switching to the work agents tab
  useEffect(() => {
    if (loadingWorkAgents) {
      return;
    }
    log.trace("invoking getWorkAgents");
    setLoadingWorkAgents(true);
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
      .then(getWorkAgentsResult => {
        log.debug(
          "getWorkAgents result:",
          getWorkAgentsResult.totalModelsCount
        );
        setGetWorkAgentsResult({
          ...getWorkAgentsResult,
          modelKeysSet: new Set(getWorkAgentsResult.modelKeys),
        });
        setLoadingWorkAgents(false);
      });
  }, [api, workAgentsPage, workAgentsSort, worksQuery]);

  // Effect that responds to switching to the work events tab
  useEffect(() => {
    if (loadingWorkEvents) {
      return;
    }
    log.trace("invoking getWorkEvents");
    setLoadingWorkEvents(true);
    // "Paging" the timeline loads more events rather than typical pagination.
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
      .then(getWorkEventsResult => {
        log.debug(
          "getWorkEvents result:",
          getWorkEventsResult.totalModelsCount
        );
        setGetWorkEventsResult({
          ...getWorkEventsResult,
          modelKeysSet: new Set(getWorkEventsResult.modelKeys),
        });
        setLoadingWorkEvents(false);
      });
  }, [api, workEventsPage, workEventsSort, worksQuery]);

  useEffect(() => {
    if (loadingWorkLocations) {
      return;
    }
    log.trace("invoking getWorkLocations");
    setLoadingWorkLocations(true);
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
      .then(getWorkLocationsResult => {
        log.debug(
          "getWorkLocations result:",
          getWorkLocationsResult.workLocations.length
        );
        setGetWorkLocationsResult(getWorkLocationsResult);
        setLoadingWorkLocations(false);
      });
  }, [api, worksQuery]);

  const [showFilters, setShowFilters] = useState<boolean>(false);

  if (getWorksResult === null) {
    return null;
  }

  // if (works.length === 0) {
  //   return <h3>No matching works found.</h3>;
  // }

  const filterControls = createWorksFilterControls({
    facets: getWorksResult.facets,
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
    <Link href={Hrefs.work(work)}>
      <a>{children}</a>
    </Link>
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
                <span>{getWorksResult.totalModelsCount}</span>&nbsp;
                <span>
                  {getWorksResult.totalModelsCount === 1 ? "work" : "works"}
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
            works={getWorksResult.modelSet.works}
          />
        </Row>
        {worksPageMax({getWorksResult, objectsPerPage}) > 0 ? (
          <Row style={{marginTop: "-25px"}}>
            <Col className="d-flex justify-content-center" xs={12}>
              <Pagination
                count={worksPageMax({getWorksResult, objectsPerPage}) + 1}
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
    getWorkLocationsResult &&
    getWorkLocationsResult.workLocations.length > 0
  ) {
    tabs.push({
      key: "workLocations",
      title: "Map",
      content: (
        <LocationsMap
          locations={getWorkLocationsResult.workLocations.map(workLocation => ({
            centroid: workLocation.location.centroid!,
            icon: getWorkLocationIcon(workLocation),
            label: getWorkLocationLabel(workLocation),
          }))}
        />
      ),
    });
  }
  if (getWorkAgentsResult && getWorkAgentsResult.modelKeys.length > 0) {
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
              agents={getWorkAgentsResult.modelSet.works
                .flatMap(work =>
                  work.agents.filter(agent =>
                    getWorkAgentsResult.modelKeysSet.has(agent.agent.key)
                  )
                )
                .map(agent => agent.agent)}
              getAbsoluteImageSrc={relativeImageSrc =>
                getAbsoluteImageSrc(relativeImageSrc, router)
              }
            />
          </Row>
          {workAgentsPageMax({getWorkAgentsResult, objectsPerPage}) > 0 ? (
            <Row className="mt-4">
              <Col className="d-flex justify-content-center" xs={12}>
                <Pagination
                  count={
                    workAgentsPageMax({getWorkAgentsResult, objectsPerPage}) + 1
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
  if (getWorkEventsResult && getWorkEventsResult.modelKeys.length > 0) {
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
            totalObjects: getWorkEventsResult.totalModelsCount,
          })}
          renderWorkLink={renderWorkLink}
          setPage={setWorkEventsPage}
          workEvents={getWorkEventsResult.modelSet.works.flatMap(work =>
            work.events
              .filter(workEvent =>
                getWorkEventsResult.modelKeysSet.has(workEvent.key)
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
        {getWorksResult.totalModelsCount > 0 ? (
          tabs.length === 1 ? (
            tabs[0].content
          ) : (
            <>
              <Nav tabs>
                {tabs.map(tab => (
                  <NavItem key={tab.key}>
                    <NavLink
                      className={
                        activeTabKey === tab.key ? "active" : undefined
                      }
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
          )
        ) : null}
      </>
    </Layout>
  );
};

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
