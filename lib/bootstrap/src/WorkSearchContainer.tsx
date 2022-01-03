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
  GetWorksResult,
  WorkQuery,
  WorkQueryService,
} from "@paradicms/services";
import {thumbnailTargetDimensions} from "./thumbnailTargetDimensions";
import {calculatePageMax} from "@paradicms/react-search";
import {Filter} from "@paradicms/filters";
import {useQueryParam} from "use-query-params";
import {workSearchWorkJoinSelector} from "./workSearchWorkJoinSelector";
import {AgentCard} from "./AgentCard";
import {FiltersControls} from "./FiltersControls";

const OBJECTS_PER_PAGE = 10;

type TabKey = "works" | "workAgents";

export const WorkSearchContainer: React.FunctionComponent<{
  onChangeFilters: (filters: readonly Filter[]) => void;
  renderInstitutionLink?: (
    institution: Institution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderWorkLink: (work: Work, children: React.ReactNode) => React.ReactNode;
  setWorkAgentsPage: (page: number | undefined) => void;
  setWorksPage: (page: number | undefined) => void;
  setWorkQuery: (workQuery: WorkQuery) => void;
  workAgentsPage: number;
  workQuery: WorkQuery;
  workQueryService: WorkQueryService;
  worksPage: number;
}> = ({
  onChangeFilters,
  renderInstitutionLink,
  renderWorkLink,
  setWorkAgentsPage,
  setWorksPage,
  workAgentsPage,
  workQuery,
  workQueryService,
  worksPage,
}) => {
  const [activeTabKeyQueryParam, setActiveTabKey] = useQueryParam<TabKey>(
    "tab"
  );
  const activeTabKey: TabKey = activeTabKeyQueryParam ?? "works";

  const [getWorksResult, setGetWorksResult] = useState<GetWorksResult | null>(
    null
  );

  const [
    getWorkAgentsResult,
    setGetWorkAgentsResult,
  ] = useState<GetWorkAgentsResult | null>(null);

  const [loadingWorks, setLoadingWorks] = useState<boolean>(false);
  const [loadingWorkAgents, setLoadingWorkAgents] = useState<boolean>(false);

  // console.debug("Work query:", JSON.stringify(workQuery));
  // console.debug("Works page:", worksPage);
  // console.debug("Work agents page:", workAgentsPage);

  // Effect that responds to switching to the works tab
  useEffect(() => {
    if (activeTabKey === "works" && !loadingWorks) {
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
            workJoinSelector: workSearchWorkJoinSelector,
          },
          workQuery
        )
        .then(getWorksResult => {
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
          setGetWorkAgentsResult(getWorkAgentsResult);
          setLoadingWorkAgents(false);
        });
    }
  }, [activeTabKeyQueryParam, workQuery, workQueryService, workAgentsPage]);

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
          <Container fluid>
            {getWorkAgentsResult.dataset.agents.map((agent, agentIndex) => (
              <Row
                className={agentIndex > 0 ? "mt-4" : "mt-2"}
                key={agentIndex}
              >
                <Col xs={12} className="p-0">
                  <AgentCard agent={agent} />
                </Col>
              </Row>
            ))}
          </Container>
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
              page={worksPage + 1}
              onChange={(_, newPage) => setWorkAgentsPage(newPage - 1)}
            />
          </Col>
        </Row>
      </Container>
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
