import {
  Image,
  Property,
  PropertyGroup,
  Work,
  WorkAgent,
} from "@paradicms/models";
import {summarizeWorkLocation, WorkLocationSummary} from "@paradicms/services";
import * as React from "react";
import {useState} from "react";
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
import {ImagesCarousel} from "./ImagesCarousel";
import {RightsParagraph} from "./RightsParagraph";
import {WorkAgentsCarousel} from "./WorkAgentsCarousel";
import {WorkEventsTimeline} from "./WorkEventsTimeline";
import {getVisibleWorkProperties} from "./getVisibleWorkProperties";
import {WorkPropertiesContainer} from "./WorkPropertiesContainer";

const RIGHTS_STYLE: React.CSSProperties = {
  fontSize: "x-small",
  marginBottom: 0,
};

export const WorkPage: React.FunctionComponent<{
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  properties: readonly Property[];
  propertyGroups: readonly PropertyGroup[];
  renderWorkLink: (work: Work, children: React.ReactNode) => React.ReactElement;
  renderWorkLocationsMap?: (
    workLocations: readonly WorkLocationSummary[]
  ) => React.ReactElement;
  work: Work;
}> = ({
  getAbsoluteImageSrc,
  properties,
  propertyGroups,
  renderWorkLink,
  renderWorkLocationsMap,
  work,
}) => {
  const workAgents: WorkAgent[] = [];
  for (const workAgent of work.agents) {
    if (
      !workAgents.find(
        uniqueWorkAgent => uniqueWorkAgent.agent.key === workAgent.agent.key
      )
    ) {
      workAgents.push(workAgent);
    }
  }

  const [
    workImagesCarouselImage,
    setCurrentWorkImagesCarouselImage,
  ] = useState<Image | null>(work.images.length > 0 ? work.images[0] : null);

  const [activeLeftColTabIndex, setActiveLeftColTabIndex] = useState(0);

  const leftColTabs: {content: React.ReactNode; title: string}[] = [];
  if (work.images.length > 0) {
    leftColTabs.push({
      title: "Images",
      content: (
        <Card className="border-0">
          <CardBody className="text-center">
            <ImagesCarousel
              getAbsoluteImageSrc={getAbsoluteImageSrc}
              hideImageRights={true}
              key={leftColTabs.length}
              onShowImage={setCurrentWorkImagesCarouselImage}
              originalImages={work.images}
            />
          </CardBody>
          {workImagesCarouselImage?.requiresAttribution ? (
            <CardFooter className="text-center">
              <RightsParagraph
                material="Image"
                rights={workImagesCarouselImage}
                style={RIGHTS_STYLE}
              />
            </CardFooter>
          ) : null}
        </Card>
      ),
    });
  }
  const workProperties = getVisibleWorkProperties({properties, work});
  if (workProperties.length > 0) {
    leftColTabs.push({
      title: "Details",
      content: (
        <WorkPropertiesContainer
          propertyGroups={propertyGroups}
          workProperties={workProperties}
        />
      ),
    });
  }

  if (renderWorkLocationsMap) {
    const workLocations = [];
    if (work.location) {
      workLocations.push(summarizeWorkLocation(work, work.location));
    }
    for (const event of work.events) {
      if (event.workLocation) {
        workLocations.push(summarizeWorkLocation(work, event.workLocation));
      }
    }
    const mappableWorkLocations = workLocations.filter(
      workLocation => !!workLocation.location.centroid
    );
    if (mappableWorkLocations.length > 0) {
      leftColTabs.push({
        title: "Map",
        content: renderWorkLocationsMap(mappableWorkLocations),
      });
    }
  }
  if (workAgents.length > 0) {
    leftColTabs.push({
      title: "People",
      content: (
        <WorkAgentsCarousel
          getAbsoluteImageSrc={getAbsoluteImageSrc}
          workAgents={work.agents}
        />
      ),
    });
  }
  if (work.events.length > 0) {
    leftColTabs.push({
      title: "Timeline",
      content: (
        <WorkEventsTimeline
          getAbsoluteImageSrc={getAbsoluteImageSrc}
          page={0}
          pageMax={0}
          renderWorkLink={renderWorkLink}
          setPage={() => {}}
          workEvents={work.events.map(workEvent => ({work, workEvent}))}
        />
      ),
    });
  }

  let leftCol: React.ReactNode;
  if (leftColTabs.length === 1) {
    leftCol = leftColTabs[0].content;
  } else if (leftColTabs.length > 1) {
    leftCol = (
      <div>
        <Nav tabs>
          {leftColTabs.map((navTab, navTabIndex) => (
            <NavItem key={navTabIndex}>
              <NavLink
                className={
                  activeLeftColTabIndex === navTabIndex ? "active" : undefined
                }
                onClick={() => setActiveLeftColTabIndex(navTabIndex)}
                style={{cursor: "pointer", fontSize: "small"}}
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
      </div>
    );
  }

  const rightCol = work.description ? (
    <Container fluid>
      <Row>&nbsp;</Row>
      <Row className="mt-4">
        <Col
          className="text-wrap"
          xs={12}
          dangerouslySetInnerHTML={{
            __html: work.description.value,
          }}
        ></Col>
      </Row>
    </Container>
  ) : null;

  return (
    <Container fluid>
      <Row>
        {leftCol ? (
          <Col xs={12} sm={12} lg={rightCol ? 8 : 12} xl={rightCol ? 6 : 12}>
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
      {work.description?.requiresAttribution ? (
        <Row className="mt-2">
          <Col style={{textAlign: "center"}} xs={12}>
            <RightsParagraph
              material="Text"
              rights={work.description}
              style={RIGHTS_STYLE}
            />
          </Col>
        </Row>
      ) : null}
    </Container>
  );
};
