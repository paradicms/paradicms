import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import * as React from "react";
import {useEffect, useState} from "react";
import {FiltersBadges} from "./FiltersBadges";
import {WorksGallery} from "./WorksGallery";
import {Pagination} from "./Pagination";
import {
  Filter,
  GetWorkAgentsResult,
  GetWorkEventsResult,
  GetWorkLocationsResult,
  GetWorksResult,
  WorkLocationSummary,
  WorkQueryService,
  WorksQuery,
} from "@paradicms/services";
import {smallThumbnailTargetDimensions} from "./smallThumbnailTargetDimensions";
import {useQueryParam} from "use-query-params";
import {AgentsGallery} from "./AgentsGallery";
import {WorkEventsTimeline} from "./WorkEventsTimeline";
import {FiltersControlsAccordion} from "./FiltersControlsAccordion";
import {workSearchWorkJoinSelector} from "./workSearchWorkJoinSelector";
import {createFilterControls} from "./createFilterControls";
import {calculatePageMax} from "@paradicms/utilities";

type TabKey = "workAgents" | "workEvents" | "workLocations" | "works";

export const WorkSearchPage: React.FunctionComponent<{
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  objectsPerPage: number;
  onChangeFilters: (filters: readonly Filter[]) => void;
  renderWorkLink: (
    workUri: string,
    children: React.ReactNode
  ) => React.ReactElement;
  renderWorkLocationsMap?: (
    workLocations: readonly WorkLocationSummary[]
  ) => React.ReactElement;
  setWorkAgentsPage: (page: number | undefined) => void;
  setWorkEventsPage: (page: number | undefined) => void;
  setWorksPage: (page: number | undefined) => void;
  setWorkQuery: (workQuery: WorksQuery) => void;
  workAgentsPage: number;
  workEventsPage: number;
  workQuery: WorksQuery;
  workQueryService: WorkQueryService;
  worksPage: number;
}> = ({
  getAbsoluteImageSrc,
  objectsPerPage,
  onChangeFilters,
  renderWorkLink,
  renderWorkLocationsMap,
  setWorkAgentsPage,
  setWorkEventsPage,
  setWorksPage,
  workAgentsPage,
  workEventsPage,
  workQuery,
  workQueryService,
  worksPage,
}) => {
  const [activeTabKeyQueryParam, setActiveTabKey] = useQueryParam<TabKey>(
    "tab"
  );
  const activeTabKey: TabKey = activeTabKeyQueryParam ?? "works";

  const [
    getWorkAgentsResult,
    setGetWorkAgentsResult,
  ] = useState<GetWorkAgentsResult | null>(null);

  const [
    getWorkEventsResult,
    setGetWorkEventsResult,
  ] = useState<GetWorkEventsResult | null>(null);

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

  // console.debug("Work query:", JSON.stringify(workQuery));
  // console.debug("Works page:", worksPage);
  // console.debug("Work agents page:", workAgentsPage);

  // Effect that responds to switching to the works tab
  useEffect(() => {
    if (
      (activeTabKey === "works" || getWorksResult === null) &&
      !loadingWorks
    ) {
      // console.debug("getWorks");
      setLoadingWorks(true);
      workQueryService
        .getWorks(
          {
            limit: objectsPerPage,
            offset: worksPage * objectsPerPage,
            valueFacetValueThumbnailSelector: {
              targetDimensions: smallThumbnailTargetDimensions,
            },
            workJoinSelector: workSearchWorkJoinSelector(
              smallThumbnailTargetDimensions
            ),
          },
          workQuery
        )
        .then(getWorksResult => {
          // console.debug("getWorks result:", getWorksResult.totalWorksCount);
          setGetWorksResult(getWorksResult);
          setLoadingWorks(false);
        });
    }
  }, [activeTabKeyQueryParam, workQuery, workQueryService, worksPage]);

  // Effect that responds to switching to the work agents tab
  useEffect(() => {
    if (activeTabKey === "workAgents" && !loadingWorkAgents) {
      // console.debug("getWorkAgents");
      setLoadingWorkAgents(true);
      workQueryService
        .getWorkAgents(
          {
            agentJoinSelector: {
              thumbnail: {targetDimensions: smallThumbnailTargetDimensions},
              works: {},
            },
            limit: objectsPerPage,
            offset: workAgentsPage * objectsPerPage,
          },
          workQuery
        )
        .then(getWorkAgentsResult => {
          // console.debug(
          //   "getWorkAgents result:",
          //   getWorkAgentsResult.totalWorkAgentsCount
          // );
          setGetWorkAgentsResult(getWorkAgentsResult);
          setLoadingWorkAgents(false);
        });
    }
  }, [activeTabKeyQueryParam, workQuery, workQueryService, workAgentsPage]);

  // Effect that responds to switching to the work events tab
  useEffect(() => {
    if (activeTabKey === "workEvents" && !loadingWorkEvents) {
      // console.debug("getWorkEvents");
      setLoadingWorkEvents(true);
      // "Paging" the timeline loads more events rather than typical pagination.
      workQueryService
        .getWorkEvents(
          {
            limit: (workEventsPage + 1) * objectsPerPage,
            offset: 0,
            requireDate: true,
            workEventJoinSelector: {
              work: {},
            },
          },
          workQuery
        )
        .then(getWorkEventsResult => {
          // console.info(
          //   "getWorkEvents result:",
          //   getWorkEventsResult.totalWorkEventsCount
          // );
          setGetWorkEventsResult(getWorkEventsResult);
          setLoadingWorkEvents(false);
        });
    }
  }, [activeTabKeyQueryParam, workQuery, workQueryService, workEventsPage]);

  // Effect that responds to switching to the work locations tab
  useEffect(() => {
    if (activeTabKey === "workLocations" && !loadingWorkLocations) {
      // console.debug("getWorkLocations");
      setLoadingWorkLocations(true);
      workQueryService
        .getWorkLocations({}, workQuery)
        .then(getWorkLocationsResult => {
          // console.debug(
          //   "getWorkLocations result:",
          //   getWorkLocationsResult.workLocations.length
          // );
          setGetWorkLocationsResult(getWorkLocationsResult);
          setLoadingWorkLocations(false);
        });
    }
  }, [activeTabKeyQueryParam, workQuery, workQueryService, workAgentsPage]);

  if (getWorksResult === null) {
    return null;
  }

  // if (works.length === 0) {
  //   return <h3>No matching works found.</h3>;
  // }

  const filtersControls = createFilterControls({
    facets: getWorksResult.facets,
    filters: workQuery.filters,
    getAbsoluteImageSrc,
    onChangeFilters,
  });

  const tabs: {content: React.ReactNode; key: TabKey; title: string}[] = [];
  tabs.push({
    key: "works",
    title: "Works",
    content: (
      <Container fluid>
        <Row>
          <WorksGallery
            getAbsoluteImageSrc={getAbsoluteImageSrc}
            renderWorkLink={renderWorkLink}
            works={getWorksResult.modelSet.works}
          />
        </Row>
        <Row className="mt-4">
          <Col className="d-flex justify-content-center" xs={12}>
            <Pagination
              count={
                calculatePageMax({
                  objectsPerPage,
                  totalObjects: getWorksResult.totalWorksCount,
                }) + 1
              }
              page={worksPage + 1}
              onChange={(_, newPage) => setWorksPage(newPage - 1)}
            />
          </Col>
        </Row>
      </Container>
    ),
  });
  tabs.push({
    key: "workAgents",
    title: "People",
    content: getWorkAgentsResult ? (
      <Container fluid>
        <Row>
          <AgentsGallery
            agents={getWorkAgentsResult.workAgentUris.map(workAgentUri =>
              getWorkAgentsResult.modelSet.agentByUri(workAgentUri)
            )}
            getAbsoluteImageSrc={getAbsoluteImageSrc}
          />
        </Row>
        <Row className="mt-4">
          <Col className="d-flex justify-content-center" xs={12}>
            <Pagination
              count={
                calculatePageMax({
                  objectsPerPage,
                  totalObjects: getWorkAgentsResult.totalWorkAgentsCount,
                }) + 1
              }
              page={workAgentsPage + 1}
              onChange={(_, newPage) => setWorkAgentsPage(newPage - 1)}
            />
          </Col>
        </Row>
      </Container>
    ) : null,
  });
  tabs.push({
    key: "workEvents",
    title: "Timeline",
    content: getWorkEventsResult ? (
      <WorkEventsTimeline
        page={workEventsPage}
        pageMax={calculatePageMax({
          objectsPerPage,
          totalObjects: getWorkEventsResult.totalWorkEventsCount,
        })}
        setPage={setWorkEventsPage}
        workEvents={getWorkEventsResult.workEventUris.map(workEventUri =>
          getWorkEventsResult.modelSet.workEventByUri(workEventUri)
        )}
      />
    ) : null,
  });
  if (renderWorkLocationsMap) {
    tabs.push({
      key: "workLocations",
      title: "Map",
      content:
        getWorkLocationsResult &&
        getWorkLocationsResult.workLocations.length > 0
          ? renderWorkLocationsMap(getWorkLocationsResult.workLocations)
          : null,
    });
  }

  return (
    <Container className="px-0" fluid>
      <>
        <Row>
          <Col className="d-flex justify-content-between" xs={12}>
            <h6 className="mb-0">
              <span>{getWorksResult.totalWorksCount}</span>&nbsp;
              <span>
                {getWorksResult.totalWorksCount === 1 ? "work" : "works"}
              </span>
              &nbsp;
              {workQuery.text ? (
                <span>
                  matching <i>{workQuery.text}</i>
                </span>
              ) : (
                <span>matched</span>
              )}
            </h6>
            {workQuery.filters.length > 0 ? (
              <div>
                <FiltersBadges
                  facets={getWorksResult.facets}
                  filters={workQuery.filters}
                  onChangeFilters={onChangeFilters}
                />
              </div>
            ) : null}
          </Col>
        </Row>
      </>
      {getWorksResult.totalWorksCount > 0 ? (
        <Row>
          {filtersControls.length > 0 ? (
            <Col xs={3}>
              <FiltersControlsAccordion filtersControls={filtersControls} />
            </Col>
          ) : null}
          <Col xs={filtersControls.length > 0 ? 9 : 12}>
            {tabs.length === 1 ? (
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
            )}
          </Col>
        </Row>
      ) : null}
    </Container>
  );
};
