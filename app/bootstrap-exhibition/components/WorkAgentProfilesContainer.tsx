import * as React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import {WorkAgentProfile} from "../lib/WorkAgentProfile";
import {RightsParagraph} from "./RightsParagraph";
import {Agent} from "@paradicms/models";

export const WorkAgentProfilesContainer: React.FunctionComponent<{
  workAgentProfiles: readonly WorkAgentProfile[];
}> = ({workAgentProfiles}) => {
  const uniqueWorkAgentProfiles: WorkAgentProfile[] = [];
  for (const workAgentProfile of workAgentProfiles) {
    if (
      !uniqueWorkAgentProfiles.find(
        uniqueWorkAgentProfile =>
          uniqueWorkAgentProfile.agent.uri === workAgentProfile.agent.uri
      )
    ) {
      uniqueWorkAgentProfiles.push(workAgentProfile);
    }
  }

  const workAgentLinks = (agent: Agent) => {
    const links: React.ReactNodeArray = [];

    for (const link of [
      {
        href: agent.page,
        text: "Home page",
      },
      {
        href: agent.wikidataConceptUri,
        text: "Wikidata",
      },
      {
        href: agent.wikipediaUrl,
        text: "Wikipedia",
      },
    ]) {
      if (!link.href) {
        continue;
      }
      if (links.length > 0) {
        links.push(<span key={links.length}>&nbsp;&bull;&nbsp;</span>);
      }
      links.push(
        <a href={link.href} key={links.length}>
          {link.text}
        </a>
      );
    }
    return links.length > 0 ? (
      <div className="mt-1" style={{fontSize: "x-small"}}>
        {links}
      </div>
    ) : null;
  };

  return (
    <Container fluid>
      {uniqueWorkAgentProfiles.map(
        (workAgentProfile, workAgentProfileIndex) => (
          <Row
            className={workAgentProfileIndex > 0 ? "mt-4" : "mt-2"}
            key={workAgentProfileIndex}
          >
            <Col xs={12} className="p-0">
              <Card className="text-center">
                <CardHeader tag="h6">
                  <div>{workAgentProfile.agent.name}</div>
                  {workAgentLinks(workAgentProfile.agent)}
                </CardHeader>
                <CardBody>
                  <img
                    src={
                      workAgentProfile.thumbnail.src ??
                      workAgentProfile.thumbnail.uri
                    }
                    style={{
                      maxHeight:
                        workAgentProfile.thumbnailTargetDimensions.height,
                      maxWidth:
                        workAgentProfile.thumbnailTargetDimensions.width,
                    }}
                    title={workAgentProfile.agent.name}
                  />
                </CardBody>
                {workAgentProfile.thumbnail.rights ? (
                  <CardFooter>
                    <RightsParagraph
                      material="Image"
                      rights={workAgentProfile.thumbnail.rights}
                      style={{fontSize: "x-small", marginBottom: 0}}
                    />
                  </CardFooter>
                ) : null}
              </Card>
            </Col>
          </Row>
        )
      )}
    </Container>
  );
};
