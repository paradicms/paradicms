import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  FilterUnion,
  GetWorkAgentsResult,
  GetWorkEventsResult,
  GetWorkLocationsResult,
  GetWorksResult,
  WorkAgentsSort,
  WorkLocationSummary,
  Api,
  WorksQuery,
  WorksSort,
} from "@paradicms/api";
import {calculatePageMax} from "@paradicms/utilities";
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
import {useQueryParam} from "use-query-params";
import {AgentsGallery} from "./AgentsGallery";
import {FilterControlsContainer} from "./FilterControlsContainer";
import {Pagination} from "./Pagination";
import {WorkAgentsSortDropdown} from "./WorkAgentsSortDropdown";
import {WorkEventsTimeline} from "./WorkEventsTimeline";
import {WorksGallery} from "./WorksGallery";
import {WorksSortDropdown} from "./WorksSortDropdown";
import {createFilterControls} from "./createFilterControls";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";
import {valueThumbnailSelector} from "./valueThumbnailSelector";
import {workSearchWorkJoinSelector} from "./workSearchWorkJoinSelector";
import {Work} from "@paradicms/models";
import {workSearchWorkEventJoinSelector} from "./workSearchWorkEventJoinSelector";
import log from "loglevel";

type TabKey = "workAgents" | "workEvents" | "workLocations" | "works";

const workAgentsPageMax = (kwds: {
  getWorkAgentsResult: GetWorkAgentsResult;
  objectsPerPage: number;
}) =>
  calculatePageMax({
    objectsPerPage: kwds.objectsPerPage,
    totalObjects: kwds.getWorkAgentsResult.totalWorkAgentsCount,
  });

const worksPageMax = (kwds: {
  getWorksResult: GetWorksResult;
  objectsPerPage: number;
}) =>
  calculatePageMax({
    objectsPerPage: kwds.objectsPerPage,
    totalObjects: kwds.getWorksResult.totalWorksCount,
  });

export const WorkSearchPage: React.FunctionComponent<{
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  objectsPerPage: number;
  onChangeFilters: (filters: readonly FilterUnion[]) => void;
  renderWorkLink: (work: Work, children: React.ReactNode) => React.ReactElement;
  renderWorkLocationsMap?: (
    workLocations: readonly WorkLocationSummary[]
  ) => React.ReactElement;
  setWorkAgentsPage: (page: number | undefined) => void;
  setWorkAgentsSort: (sort: WorkAgentsSort | undefined) => void;
  setWorkEventsPage: (page: number | undefined) => void;
  setWorksPage: (page: number | undefined) => void;
  setWorksQuery: (worksQuery: WorksQuery) => void;
  setWorksSort: (sort: WorksSort | undefined) => void;
  workAgentsPage: number;
  workAgentsSort: WorkAgentsSort;
  workEventsPage: number;
  worksQuery: WorksQuery;
  api: Api;
  worksPage: number;
  worksSort: WorksSort;
}> = ({
  getAbsoluteImageSrc,
  objectsPerPage,
  onChangeFilters,
  renderWorkLink,
  renderWorkLocationsMap,
  setWorkAgentsPage,
  setWorkAgentsSort,
  setWorkEventsPage,
  setWorksPage,
  setWorksSort,
  workAgentsPage,
  workAgentsSort,
  workEventsPage,
  worksQuery,
  api,
  worksPage,
  worksSort,
}) => {
  const [activeTabKeyQueryParam, setActiveTabKey] = useQueryParam<TabKey>(
    "tab"
  );
  const activeTabKey: TabKey = activeTabKeyQueryParam ?? "works";

  const [getWorkAgentsResult, setGetWorkAgentsResult] = useState<
    (GetWorkAgentsResult & {workAgentKeysSet: Set<string>}) | null
  >(null);

  const [getWorkEventsResult, setGetWorkEventsResult] = useState<
    (GetWorkEventsResult & {workEventKeysSet: Set<string>}) | null
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

  log.trace("Work query:", JSON.stringify(worksQuery));
  log.trace("Works page:", worksPage);
  log.trace("Work agents page:", workAgentsPage);

  // Effect that responds to switching to the works tab
  useEffect(() => {
    if (
      (activeTabKey === "works" || getWorksResult === null) &&
      !loadingWorks
    ) {
      log.trace("invoking getWorks");
      setLoadingWorks(true);
      api
        .getWorks(
          {
            limit: objectsPerPage,
            offset: worksPage * objectsPerPage,
            sort: worksSort,
            valueFacetValueThumbnailSelector: valueThumbnailSelector,
            workJoinSelector: workSearchWorkJoinSelector,
          },
          worksQuery
        )
        .then(getWorksResult => {
          log.debug("getWorks result:", getWorksResult.totalWorksCount);
          setGetWorksResult(getWorksResult);
          setLoadingWorks(false);
        });
    }
  }, [activeTabKeyQueryParam, worksQuery, api, worksPage, worksSort]);

  // Effect that responds to switching to the work agents tab
  useEffect(() => {
    if (activeTabKey === "workAgents" && !loadingWorkAgents) {
      log.trace("invoking getWorkAgents");
      setLoadingWorkAgents(true);
      api
        .getWorkAgents(
          {
            agentJoinSelector: {
              thumbnail: galleryThumbnailSelector,
              works: {},
            },
            limit: objectsPerPage,
            offset: workAgentsPage * objectsPerPage,
            sort: workAgentsSort,
          },
          worksQuery
        )
        .then(getWorkAgentsResult => {
          log.debug(
            "getWorkAgents result:",
            getWorkAgentsResult.totalWorkAgentsCount
          );
          setGetWorkAgentsResult({
            ...getWorkAgentsResult,
            workAgentKeysSet: new Set(getWorkAgentsResult.workAgentKeys),
          });
          setLoadingWorkAgents(false);
        });
    }
  }, [activeTabKeyQueryParam, worksQuery, api, workAgentsPage, workAgentsSort]);

  // Effect that responds to switching to the work events tab
  useEffect(() => {
    if (activeTabKey === "workEvents" && !loadingWorkEvents) {
      log.trace("invoking getWorkEvents");
      setLoadingWorkEvents(true);
      // "Paging" the timeline loads more events rather than typical pagination.
      api
        .getWorkEvents(
          {
            limit: (workEventsPage + 1) * objectsPerPage,
            offset: 0,
            requireDate: true,
            workEventJoinSelector: workSearchWorkEventJoinSelector,
          },
          worksQuery
        )
        .then(getWorkEventsResult => {
          log.debug(
            "getWorkEvents result:",
            getWorkEventsResult.totalWorkEventsCount
          );
          setGetWorkEventsResult({
            ...getWorkEventsResult,
            workEventKeysSet: new Set(getWorkEventsResult.workEventKeys),
          });
          setLoadingWorkEvents(false);
        });
    }
  }, [activeTabKeyQueryParam, worksQuery, api, workEventsPage]);

  // Effect that responds to switching to the work locations tab
  useEffect(() => {
    if (activeTabKey === "workLocations" && !loadingWorkLocations) {
      log.trace("invoking getWorkLocations");
      setLoadingWorkLocations(true);
      api
        .getWorkLocations({requireCentroids: true}, worksQuery)
        .then(getWorkLocationsResult => {
          log.debug(
            "getWorkLocations result:",
            getWorkLocationsResult.workLocations.length
          );
          setGetWorkLocationsResult(getWorkLocationsResult);
          setLoadingWorkLocations(false);
        });
    }
  }, [activeTabKeyQueryParam, worksQuery, api, workAgentsPage]);

  const [showFilters, setShowFilters] = useState<boolean>(false);

  if (getWorksResult === null) {
    return null;
  }

  // if (works.length === 0) {
  //   return <h3>No matching works found.</h3>;
  // }

  const filterControls = createFilterControls({
    facets: getWorksResult.facets,
    filters: worksQuery.filters,
    getAbsoluteImageSrc,
    onChangeFilters,
  });

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
                <span>{getWorksResult.totalWorksCount}</span>&nbsp;
                <span>
                  {getWorksResult.totalWorksCount === 1 ? "work" : "works"}
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
            getAbsoluteImageSrc={getAbsoluteImageSrc}
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
  if (renderWorkLocationsMap) {
    tabs.push({
      key: "workLocations",
      title: "Map",
      content:
        getWorkLocationsResult &&
        getWorkLocationsResult.workLocations.length > 0 ? (
          renderWorkLocationsMap(getWorkLocationsResult.workLocations)
        ) : (
          <h4 className="text-center text-secondary">
            No mappable work locations.
          </h4>
        ),
    });
  }
  tabs.push({
    key: "workAgents",
    title: "People",
    content: getWorkAgentsResult ? (
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
                  getWorkAgentsResult.workAgentKeysSet.has(agent.agent.key)
                )
              )
              .map(agent => agent.agent)}
            getAbsoluteImageSrc={getAbsoluteImageSrc}
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
    ) : null,
  });
  tabs.push({
    key: "workEvents",
    title: "Timeline",
    content:
      getWorkEventsResult && getWorkEventsResult.workEventKeys.length > 0 ? (
        <WorkEventsTimeline
          getAbsoluteImageSrc={getAbsoluteImageSrc}
          page={workEventsPage}
          pageMax={calculatePageMax({
            objectsPerPage,
            totalObjects: getWorkEventsResult.totalWorkEventsCount,
          })}
          renderWorkLink={renderWorkLink}
          setPage={setWorkEventsPage}
          workEvents={getWorkEventsResult.modelSet.works.flatMap(work =>
            work.events
              .filter(workEvent =>
                getWorkEventsResult.workEventKeysSet.has(workEvent.key)
              )
              .map(workEvent => ({work, workEvent}))
          )}
        />
      ) : (
        <h4 className="text-center text-secondary">No work events.</h4>
      ),
  });

  return (
    <>
      {getWorksResult.totalWorksCount > 0 ? (
        tabs.length === 1 ? (
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
        )
      ) : null}
    </>
  );
};
