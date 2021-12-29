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
  const [activeNavTabIndex, setActiveNavTabIndex] = useState(0);

  const thumbnail = work.thumbnail({
    targetDimensions: thumbnailTargetDimensions,
  });
  const thumbnailSrc =
    thumbnail?.src ?? Image.placeholderSrc(thumbnailTargetDimensions);

  const navTabs: {content: React.ReactNode; title: string}[] = [];
  navTabs.push({
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
    navTabs.push({
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
        {navTabs.length === 1 ? (
          navTabs[0].content
        ) : (
          <>
            <Nav tabs>
              {navTabs.map((navTab, navTabIndex) => (
                <NavItem key={navTabIndex}>
                  <NavLink
                    className={
                      activeNavTabIndex === navTabIndex ? "active" : undefined
                    }
                    onClick={() => setActiveNavTabIndex(navTabIndex)}
                    style={{cursor: "pointer", fontSize: "small"}}
                  >
                    {navTab.title}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
            <TabContent activeTab={activeNavTabIndex.toString()}>
              {navTabs.map((navTab, navTabIndex) => (
                <TabPane key={navTabIndex} tabId={navTabIndex.toString()}>
                  <div className="mt-2">{navTab.content}</div>
                </TabPane>
              ))}
            </TabContent>
          </>
        )}
      </CardBody>
    </Card>
  );
};
