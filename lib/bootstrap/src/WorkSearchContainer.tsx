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
import {Institution, Work} from "@paradicms/models";
import {Pagination} from "./Pagination";
import {
  GetWorkAgentsResult,
  GetWorkEventsResult,
  GetWorksResult,
  WorkQuery,
  WorkQueryService,
} from "@paradicms/services";
import {thumbnailTargetDimensions} from "./thumbnailTargetDimensions";
import {
  calculatePageMax,
  workSearchWorkJoinSelector,
} from "@paradicms/react-search";
import {Filter} from "@paradicms/filters";
import {useQueryParam} from "use-query-params";
import {FiltersControls} from "./FiltersControls";
import {AgentsGallery} from "./AgentsGallery";
import {WorkEventsTimeline} from "./WorkEventsTimeline";

const OBJECTS_PER_PAGE = 4;

type TabKey = "workAgents" | "workEvents" | "works";

export const WorkSearchContainer: React.FunctionComponent<{
  onChangeFilters: (filters: readonly Filter[]) => void;
  renderInstitutionLink?: (
    institution: Institution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderWorkLink: (work: Work, children: React.ReactNode) => React.ReactNode;
  setWorkAgentsPage: (page: number | undefined) => void;
  setWorkEventsPage: (page: number | undefined) => void;
  setWorksPage: (page: number | undefined) => void;
  setWorkQuery: (workQuery: WorkQuery) => void;
  workAgentsPage: number;
  workEventsPage: number;
  workQuery: WorkQuery;
  workQueryService: WorkQueryService;
  worksPage: number;
}> = ({
  onChangeFilters,
  renderInstitutionLink,
  renderWorkLink,
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

  const [getWorksResult, setGetWorksResult] = useState<GetWorksResult | null>(
    null
  );

  const [loadingWorkAgents, setLoadingWorkAgents] = useState<boolean>(false);
  const [loadingWorkEvents, setLoadingWorkEvents] = useState<boolean>(false);
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
      console.debug("getWorks");
      setLoadingWorks(true);
      workQueryService
        .getWorks(
          {
            limit: OBJECTS_PER_PAGE,
            offset: worksPage * OBJECTS_PER_PAGE,
            valueFacetValueThumbnailSelector: {
              targetDimensions: thumbnailTargetDimensions,
            },
            workJoinSelector: workSearchWorkJoinSelector(
              thumbnailTargetDimensions
            ),
          },
          workQuery
        )
        .then(getWorksResult => {
          console.debug("getWorks result:", getWorksResult.totalWorksCount);
          setGetWorksResult(getWorksResult);
          setLoadingWorks(false);
        });
    }
  }, [activeTabKeyQueryParam, workQuery, workQueryService, worksPage]);

  // Effect that responds to switching to the work agents tab
  useEffect(() => {
    if (activeTabKey === "workAgents" && !loadingWorkAgents) {
      console.debug("getWorkAgents");
      setLoadingWorkAgents(true);
      workQueryService
        .getWorkAgents(
          {
            agentJoinSelector: {
              works: {},
            },
            limit: OBJECTS_PER_PAGE,
            offset: workAgentsPage * OBJECTS_PER_PAGE,
          },
          workQuery
        )
        .then(getWorkAgentsResult => {
          console.debug(
            "getWorkAgents result:",
            getWorkAgentsResult.totalWorkAgentsCount
          );
          setGetWorkAgentsResult(getWorkAgentsResult);
          setLoadingWorkAgents(false);
        });
    }
  }, [activeTabKeyQueryParam, workQuery, workQueryService, workAgentsPage]);

  // Effect that responds to switching to the work events tab
  useEffect(() => {
    if (activeTabKey === "workEvents" && !loadingWorkEvents) {
      console.debug("getWorkEvents");
      setLoadingWorkEvents(true);
      // "Paging" the timeline loads more events rather than typical pagination.
      workQueryService
        .getWorkEvents(
          {
            limit: (workEventsPage + 1) * OBJECTS_PER_PAGE,
            offset: 0,
            requireDate: true,
            workEventJoinSelector: {
              work: {},
            },
          },
          workQuery
        )
        .then(getWorkEventsResult => {
          console.info(
            "getWorkEvents result:",
            getWorkEventsResult.totalWorkEventsCount
          );
          setGetWorkEventsResult(getWorkEventsResult);
          setLoadingWorkEvents(false);
        });
    }
  }, [activeTabKeyQueryParam, workQuery, workQueryService, workEventsPage]);

  if (getWorksResult === null) {
    return null;
  }

  // if (works.length === 0) {
  //   return <h3>No matching works found.</h3>;
  // }

  const tabs: {content: React.ReactNode; key: TabKey; title: string}[] = [];
  tabs.push({
    key: "works",
    title: "Works",
    content: (
      <Container fluid>
        <Row>
          <WorksGallery
            works={getWorksResult.dataset.works}
            renderInstitutionLink={renderInstitutionLink}
            renderWorkLink={renderWorkLink}
          />
        </Row>
        <Row className="mt-4">
          <Col className="d-flex justify-content-center" xs={12}>
            <Pagination
              count={
                calculatePageMax({
                  objectsPerPage: OBJECTS_PER_PAGE,
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
              getWorkAgentsResult.dataset.agentByUri(workAgentUri)
            )}
          />
        </Row>
        <Row className="mt-4">
          <Col className="d-flex justify-content-center" xs={12}>
            <Pagination
              count={
                calculatePageMax({
                  objectsPerPage: OBJECTS_PER_PAGE,
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
          objectsPerPage: OBJECTS_PER_PAGE,
          totalObjects: getWorkEventsResult.totalWorkEventsCount,
        })}
        setPage={setWorkEventsPage}
        workEvents={getWorkEventsResult.workEventUris.map(workEventUri =>
          getWorkEventsResult.dataset.workEventByUri(workEventUri)
        )}
      />
    ) : null,
  });

  return (
    <Container fluid>
      {getWorksResult.totalWorksCount > 0 ? (
        <>
          <Row>
            <Col className="d-flex justify-content-between" xs={12}>
              <h4>
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
              </h4>
              {workQuery.filters.length > 0 ? (
                <div>
                  <FiltersBadges
                    facets={getWorksResult.facets}
                    filters={workQuery.filters}
                  />
                </div>
              ) : null}
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <hr />
            </Col>
          </Row>
        </>
      ) : null}
      <Row>
        <Col xs="2">
          <FiltersControls
            facets={getWorksResult.facets}
            filters={workQuery.filters}
            onChange={onChangeFilters}
          />
        </Col>
        <Col xs="10">
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
    </Container>
  );
};
