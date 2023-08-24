import {Agent, Event, Image, Location} from "@paradicms/models";
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
import {AgentsCarousel} from "./AgentsCarousel";
import {ImagesCarousel} from "./ImagesCarousel";
import {RightsParagraph} from "./RightsParagraph";

const RIGHTS_STYLE: React.CSSProperties = {
  fontSize: "x-small",
  marginBottom: 0,
};

export const EventPage: React.FunctionComponent<{
  event: Event;
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  renderEventLocationMap?: (eventLocation: Location) => React.ReactElement;
}> = ({event, getAbsoluteImageSrc, renderEventLocationMap}) => {
  const eventAgents: Agent[] = [];
  for (const eventAgent of event.agents) {
    if (
      !eventAgents.some(
        uniqueEventAgent => uniqueEventAgent.key === eventAgent.key
      )
    ) {
      eventAgents.push(eventAgent);
    }
  }

  const [
    eventImagesCarouselImage,
    setCurrentEventImagesCarouselImage,
  ] = useState<Image | null>(null);

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabs: {content: React.ReactNode; title: string}[] = [];
  if (event.images.length > 0) {
    tabs.push({
      title: "Images",
      content: (
        <Card className="border-0">
          <CardBody className="text-center">
            <ImagesCarousel
              getAbsoluteImageSrc={getAbsoluteImageSrc}
              hideImageRights={true}
              key={tabs.length}
              onShowImage={setCurrentEventImagesCarouselImage}
              originalImages={event.images}
            />
          </CardBody>
          {eventImagesCarouselImage?.requiresAttribution ? (
            <CardFooter className="text-center">
              <RightsParagraph
                material="Image"
                rights={eventImagesCarouselImage}
                style={RIGHTS_STYLE}
              />
            </CardFooter>
          ) : null}
        </Card>
      ),
    });
  }

  if (renderEventLocationMap && event.location?.centroid) {
    tabs.push({
      title: "Map",
      content: renderEventLocationMap(event.location),
    });
  }

  if (eventAgents.length > 0) {
    tabs.push({
      title: "People",
      content: (
        <AgentsCarousel
          agents={eventAgents}
          getAbsoluteImageSrc={getAbsoluteImageSrc}
        />
      ),
    });
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          {tabs.length > 0 ? (
            tabs.length === 1 ? (
              tabs[0].content
            ) : (
              <div>
                <Nav tabs>
                  {tabs.map((navTab, navTabIndex) => (
                    <NavItem key={navTabIndex}>
                      <NavLink
                        className={
                          activeTabIndex === navTabIndex ? "active" : undefined
                        }
                        onClick={() => setActiveTabIndex(navTabIndex)}
                        style={{cursor: "pointer", fontSize: "small"}}
                      >
                        {navTab.title}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
                <TabContent activeTab={activeTabIndex.toString()}>
                  {tabs.map((navTab, navTabIndex) => (
                    <TabPane key={navTabIndex} tabId={navTabIndex.toString()}>
                      <div className="mt-2">{navTab.content}</div>
                    </TabPane>
                  ))}
                </TabContent>
              </div>
            )
          ) : (
            <h3 className="text-center">No content</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
};
