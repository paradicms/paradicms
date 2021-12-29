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
import {Agent, Image, WorkAgent} from "@paradicms/models";
import {RightsParagraph} from "./RightsParagraph";
import {thumbnailTargetDimensions} from "./thumbnailTargetDimensions";

interface WorkAgentWithThumbnail extends WorkAgent {
  thumbnail: Image;
}

export const WorkAgentsContainer: React.FunctionComponent<{
  workAgents: readonly WorkAgent[];
}> = ({workAgents}) => {
  const workAgentsWithThumbnails: WorkAgentWithThumbnail[] = [];
  for (const workAgent of workAgents) {
    const thumbnail = workAgent.agent.thumbnail({
      targetDimensions: thumbnailTargetDimensions,
    });
    if (!thumbnail) {
      continue;
    }
    if (
      !workAgentsWithThumbnails.find(
        uniqueWorkAgent => uniqueWorkAgent.agent.uri === workAgent.agent.uri
      )
    ) {
      workAgentsWithThumbnails.push({...workAgent, thumbnail});
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
      {workAgentsWithThumbnails.map((workAgent, workAgentIndex) => (
        <Row
          className={workAgentIndex > 0 ? "mt-4" : "mt-2"}
          key={workAgentIndex}
        >
          <Col xs={12} className="p-0">
            <Card className="text-center">
              <CardHeader tag="h6">
                <div>{workAgent.agent.name}</div>
                {workAgentLinks(workAgent.agent)}
              </CardHeader>
              <CardBody>
                <img
                  src={workAgent.thumbnail.src ?? workAgent.thumbnail.uri}
                  style={{
                    maxHeight: thumbnailTargetDimensions.height,
                    maxWidth: thumbnailTargetDimensions.width,
                  }}
                  title={workAgent.agent.name}
                />
              </CardBody>
              {workAgent.thumbnail.rights ? (
                <CardFooter>
                  <RightsParagraph
                    material="Image"
                    rights={workAgent.thumbnail.rights}
                    style={{fontSize: "x-small", marginBottom: 0}}
                  />
                </CardFooter>
              ) : null}
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};
