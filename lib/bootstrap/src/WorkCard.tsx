import * as React from "react";
import {useState} from "react";
import {Image, Institution, Text, Work} from "@paradicms/models";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import {thumbnailTargetDimensions} from "./thumbnailTargetDimensions";
import {RightsParagraph} from "./RightsParagraph";

const RIGHTS_STYLE: React.CSSProperties = {
  fontSize: "xx-small",
  marginBottom: 0,
};

export const WorkCard: React.FunctionComponent<{
  work: Work;
  renderInstitutionLink?: (
    institution: Institution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderWorkLink: (work: Work, children: React.ReactNode) => React.ReactNode;
}> = ({work, renderInstitutionLink, renderWorkLink}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const thumbnail = work.thumbnail({
    targetDimensions: thumbnailTargetDimensions,
  });
  const thumbnailSrc =
    thumbnail?.src ?? Image.placeholderSrc(thumbnailTargetDimensions);

  const tabs: {content: React.ReactNode; title: string}[] = [];
  tabs.push({
    title: "Image",
    content: (
      <Card className="border-0">
        {renderWorkLink(
          work,
          <CardImg
            src={thumbnailSrc}
            style={{
              height: thumbnailTargetDimensions.height,
              marginBottom: "20px",
              marginTop: "20px",
              width: thumbnailTargetDimensions.width,
            }}
            title={work.title}
          />
        )}
        {thumbnail && thumbnail.rights ? (
          <CardFooter className="text-center">
            <RightsParagraph
              material="Image"
              rights={thumbnail.rights}
              style={RIGHTS_STYLE}
            />
          </CardFooter>
        ) : null}
      </Card>
    ),
  });
  if (work.abstract) {
    tabs.push({
      title: "Summary",
      content: (
        <Card className="border-0">
          <CardBody style={{fontSize: "small"}}>
            {work.abstract.toString()}
          </CardBody>
          {work.abstract instanceof Text && work.abstract.rights ? (
            <CardFooter className="text-center">
              <RightsParagraph
                material="Text"
                rights={(work.abstract as Text).rights!}
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
        {renderWorkLink(work, <>{work.title}</>)}
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
