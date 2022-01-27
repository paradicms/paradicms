import {Image, Rights, Text, Work, WorkAgent} from "@paradicms/models";
import {
  Card,
  CardBody,
  CardFooter,
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
import {ComponentType, useMemo, useState} from "react";
import {WorkImagesCarousel} from "./WorkImagesCarousel";
import {RightsParagraph} from "./RightsParagraph";
import {AgentCard} from "./AgentCard";
import {WorkLocationSummary} from "@paradicms/services";
import {WorkEventsTimeline} from "./WorkEventsTimeline";

const RIGHTS_STYLE: React.CSSProperties = {
  fontSize: "x-small",
  marginBottom: 0,
};

export const WorkContainer: React.FunctionComponent<{
  work: Work;
  workLocationsMapComponent?: ComponentType<{
    readonly workLocations: readonly WorkLocationSummary[];
  }>;
}> = ({work, workLocationsMapComponent}) => {
  const workAbstract: string | Text | null = useMemo(
    () => work.abstract ?? work.description ?? null,
    [work]
  );

  const workAbstractRights: Rights | null = useMemo(() => {
    if (workAbstract && workAbstract instanceof Text && workAbstract.rights) {
      return workAbstract.rights;
    } else if (work.rights) {
      return work.rights;
    } else {
      return work.institution.rights;
    }
  }, [work, workAbstract]);

  const workAgents: WorkAgent[] = [];
  for (const workAgent of work.agents) {
    if (
      !workAgents.find(
        uniqueWorkAgent => uniqueWorkAgent.agent.uri === workAgent.agent.uri
      )
    ) {
      workAgents.push(workAgent);
    }
  }

  const [
    workImagesCarouselImage,
    setCurrentWorkImagesCarouselImage,
  ] = useState<Image | null>(null);

  const [activeLeftColTabIndex, setActiveLeftColTabIndex] = useState(0);

  const leftColTabs: {content: React.ReactNode; title: string}[] = [];
  if (work.images.length > 0) {
    leftColTabs.push({
      title: "Images",
      content: (
        <Card className="border-0">
          <CardBody className="text-center">
            <WorkImagesCarousel
              hideImageRights={true}
              key={leftColTabs.length}
              onShowImage={setCurrentWorkImagesCarouselImage}
              work={work}
            />
          </CardBody>
          {workImagesCarouselImage && workImagesCarouselImage.rights ? (
            <CardFooter className="text-center">
              <RightsParagraph
                material="Image"
                rights={workImagesCarouselImage.rights}
                style={RIGHTS_STYLE}
              />
            </CardFooter>
          ) : null}
        </Card>
      ),
    });
  }
  if (workAgents.length > 0) {
    leftColTabs.push({
      title: "People",
      content: (
        <Container fluid key={leftColTabs.length}>
          {workAgents.map((workAgent, workAgentIndex) => (
            <Row
              className={workAgentIndex > 0 ? "mt-4" : "mt-2"}
              key={workAgentIndex}
            >
              <Col xs={12} className="p-0">
                <AgentCard agent={workAgent.agent} role={workAgent.role} />
              </Col>
            </Row>
          ))}
        </Container>
      ),
    });
  }
  if (work.events.length > 0) {
    leftColTabs.push({
      title: "Timeline",
      content: (
        <WorkEventsTimeline
          page={0}
          pageMax={0}
          setPage={() => {}}
          workEvents={work.events}
        />
      ),
    });
  }
  if (workLocationsMapComponent && work.locations.length > 0) {
    leftColTabs.push({
      title: "Map",
      content: React.createElement(workLocationsMapComponent, {
        workLocations: work.locations.map(workLocation => ({
          location: workLocation.location,
          role: workLocation.role,
          title: workLocation.title,
          work: {
            title: work.title,
            uri: work.uri,
          },
        })),
      }),
    });
  }

  let leftCol: React.ReactNode;
  if (leftColTabs.length === 1) {
    leftCol = leftColTabs[0].content;
  } else if (leftColTabs.length > 1) {
    leftCol = (
      <>
        <Nav tabs>
          {leftColTabs.map((navTab, navTabIndex) => (
            <NavItem key={navTabIndex}>
              <NavLink
                className={
                  activeLeftColTabIndex === navTabIndex ? "active" : undefined
                }
                onClick={() => setActiveLeftColTabIndex(navTabIndex)}
              >
                {navTab.title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <TabContent activeTab={activeLeftColTabIndex.toString()}>
          {leftColTabs.map((navTab, navTabIndex) => (
            <TabPane key={navTabIndex} tabId={navTabIndex.toString()}>
              <div className="mt-2">{navTab.content}</div>
            </TabPane>
          ))}
        </TabContent>
      </>
    );
  }

  const rightCol = workAbstract ? (
    <Container fluid>
      <Row>&nbsp;</Row>
      <Row className="mt-4">
        <Col
          className="text-wrap"
          xs={12}
          dangerouslySetInnerHTML={{
            __html: workAbstract.toString(),
          }}
        ></Col>
      </Row>
    </Container>
  ) : null;

  return (
    <Container fluid>
      <Row>
        {leftCol ? (
          <Col
            xs={12}
            sm={12}
            lg={rightCol ? 8 : 12}
            xl={rightCol ? 6 : 12}
            style={{minHeight: 600, minWidth: 600}}
          >
            {leftCol}
          </Col>
        ) : null}
        <Col
          className="d-flex justify-content-center px-0"
          xs={12}
          sm={12}
          lg={leftCol ? 4 : 12}
          xl={leftCol ? 6 : 12}
        >
          {rightCol}
        </Col>
      </Row>
      {workAbstract && workAbstractRights ? (
        <Row className="mt-2">
          <Col style={{textAlign: "center"}} xs={12}>
            <RightsParagraph
              material="Text"
              rights={workAbstractRights}
              style={RIGHTS_STYLE}
            />
          </Col>
        </Row>
      ) : null}
    </Container>
  );
};
