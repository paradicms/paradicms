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

export const WorkAgentsContainer: React.FunctionComponent<{
  workAgents: readonly WorkAgent[];
}> = ({workAgents}) => {
  const uniqueWorkAgents: WorkAgent[] = [];
  for (const workAgent of workAgents) {
    if (
      !uniqueWorkAgents.find(
        uniqueWorkAgent => uniqueWorkAgent.agent.uri === workAgent.agent.uri
      )
    ) {
      uniqueWorkAgents.push(workAgent);
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
      {uniqueWorkAgents.map((workAgent, workAgentIndex) => {
        const thumbnail = workAgent.agent.thumbnail({
          targetDimensions: thumbnailTargetDimensions,
        });

        return (
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
                    src={
                      thumbnail?.src ??
                      Image.placeholderSrc(thumbnailTargetDimensions)
                    }
                    style={{
                      maxHeight: thumbnailTargetDimensions.height,
                      maxWidth: thumbnailTargetDimensions.width,
                    }}
                    title={workAgent.agent.name}
                  />
                </CardBody>
                {thumbnail?.rights ? (
                  <CardFooter>
                    <RightsParagraph
                      material="Image"
                      rights={thumbnail.rights}
                      style={{fontSize: "x-small", marginBottom: 0}}
                    />
                  </CardFooter>
                ) : null}
              </Card>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};
