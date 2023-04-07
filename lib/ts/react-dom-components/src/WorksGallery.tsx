import * as React from "react";
import {useState} from "react";
import {Text, Work} from "@paradicms/models";
import {Gallery} from "./Gallery";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import {galleryThumbnailTargetDimensions} from "./galleryThumbnailTargetDimensions";
import {RightsParagraph} from "./RightsParagraph";
import {getNamedModelLinks} from "./getNamedModelLinks";
import {GalleryCard} from "./GalleryCard";

const RIGHTS_STYLE: React.CSSProperties = {
  fontSize: "xx-small",
  marginBottom: 0,
};

const WorksGalleryCard: React.FunctionComponent<{
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  renderWorkLink: (
    workUri: string,
    children: React.ReactNode
  ) => React.ReactElement;
  work: Work;
}> = ({getAbsoluteImageSrc, renderWorkLink, work}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const workLinks = getNamedModelLinks(work);

  const tabs: {content: React.ReactNode; title: string}[] = [];
  tabs.push({
    title: "Image",
    content: (
      <GalleryCard
        getAbsoluteImageSrc={getAbsoluteImageSrc}
        thumbnail={work.thumbnail({
          targetDimensions: galleryThumbnailTargetDimensions,
        })}
        title={work.title}
      />
    ),
  });
  if (work.description) {
    tabs.push({
      title: "Summary",
      content: (
        <Card className="border-0">
          <CardBody style={{fontSize: "small"}}>
            {work.description.toString()}
          </CardBody>
          {work.description instanceof Text &&
          work.description.rights?.requiresAttribution ? (
            <CardFooter className="text-center">
              <RightsParagraph
                material="Text"
                rights={(work.description as Text).rights!}
                style={RIGHTS_STYLE}
              />
            </CardFooter>
          ) : null}
        </Card>
      ),
    });
  }

  return (
    <Card className="text-center">
      <CardHeader tag="h4">
        {renderWorkLink(work.uri, <>{work.title}</>)}
        {workLinks.length > 0 ? (
          <div className="mt-1" style={{fontSize: "x-small"}}>
            {workLinks}
          </div>
        ) : null}
      </CardHeader>
      <CardBody>
        {tabs.length === 1 ? (
          tabs[0].content
        ) : (
          <>
            <Nav tabs>
              {tabs.map((tab, tabIndex) => (
                <NavItem key={tabIndex}>
                  <NavLink
                    className={
                      activeTabIndex === tabIndex ? "active" : undefined
                    }
                    onClick={() => setActiveTabIndex(tabIndex)}
                    style={{cursor: "pointer", fontSize: "small"}}
                  >
                    {tab.title}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
            <TabContent activeTab={activeTabIndex.toString()}>
              {tabs.map((tab, tabIndex) => (
                <TabPane key={tabIndex} tabId={tabIndex.toString()}>
                  <div className="mt-2">{tab.content}</div>
                </TabPane>
              ))}
            </TabContent>
          </>
        )}
      </CardBody>
    </Card>
  );
};

/**
 * Works gallery component.
 *
 * @param works current page of works to render in the gallery
 */
export const WorksGallery: React.FunctionComponent<{
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  renderWorkLink: (
    workUri: string,
    children: React.ReactNode
  ) => React.ReactElement;
  works: readonly Work[];
}> = ({getAbsoluteImageSrc, renderWorkLink, works}) => (
  <Gallery
    cards={works.map(work => ({
      element: (
        <WorksGalleryCard
          getAbsoluteImageSrc={getAbsoluteImageSrc}
          renderWorkLink={renderWorkLink}
          work={work}
        />
      ),
      key: work.uri,
    }))}
  />
);
