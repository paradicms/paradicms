import {Agent, Image} from "@paradicms/models";
import {Card, CardBody, CardFooter, CardHeader} from "reactstrap";
import {thumbnailTargetDimensions} from "./thumbnailTargetDimensions";
import {RightsParagraph} from "./RightsParagraph";
import * as React from "react";

export const AgentCard: React.FunctionComponent<{
  agent: Agent;
  role?: string;
}> = ({agent, role}) => {
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

  const thumbnail = agent.thumbnail({
    targetDimensions: thumbnailTargetDimensions,
  });

  return (
    <Card className="text-center">
      <CardHeader tag="h6">
        <div>{agent.name}</div>
        {links.length > 0 ? (
          <div className="mt-1" style={{fontSize: "x-small"}}>
            {links}
          </div>
        ) : null}
      </CardHeader>
      <CardBody>
        <img
          src={
            thumbnail?.src ?? Image.placeholderSrc(thumbnailTargetDimensions)
          }
          style={{
            maxHeight: thumbnailTargetDimensions.height,
            maxWidth: thumbnailTargetDimensions.width,
          }}
          title={agent.name}
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
  );
};
