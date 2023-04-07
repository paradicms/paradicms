import * as React from "react";
import {Agent, Image, ImageDimensions} from "@paradicms/models";
import {Gallery} from "./Gallery";
import {Card, CardBody, CardFooter, CardHeader} from "reactstrap";
import {RightsParagraph} from "./RightsParagraph";
import {getNamedModelLinks} from "./getNamedModelLinks";
import {smallThumbnailTargetDimensions} from "./smallThumbnailTargetDimensions";

const AgentsGalleryCard: React.FunctionComponent<{
  agent: Agent;
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  role?: string;
  thumbnailTargetDimensions?: ImageDimensions;
}> = ({
  agent,
  getAbsoluteImageSrc,
  thumbnailTargetDimensions: optionalThumbnailTargetDimensions,
}) => {
  const agentLinks = getNamedModelLinks(agent);
  const thumbnailTargetDimensions =
    optionalThumbnailTargetDimensions ?? smallThumbnailTargetDimensions;
  const thumbnail = agent.thumbnail({
    targetDimensions: thumbnailTargetDimensions,
  });

  return (
    <Card className="text-center">
      <CardHeader tag="h6">
        <div>{agent.name}</div>
        {agentLinks.length > 0 ? (
          <div className="mt-1" style={{fontSize: "x-small"}}>
            {agentLinks}
          </div>
        ) : null}
      </CardHeader>
      <CardBody>
        <img
          src={
            thumbnail?.src
              ? getAbsoluteImageSrc(thumbnail.src)
              : Image.placeholderSrc(thumbnailTargetDimensions)
          }
          style={{
            maxHeight: thumbnailTargetDimensions.height,
            maxWidth: thumbnailTargetDimensions.width,
          }}
          title={agent.name}
        />
      </CardBody>
      {thumbnail?.rights?.requiresAttribution ? (
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

export const AgentsGallery: React.FunctionComponent<{
  agents: readonly Agent[];
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
}> = ({agents, getAbsoluteImageSrc}) => (
  <Gallery
    cards={agents.map(agent => ({
      element: (
        <AgentsGalleryCard
          agent={agent}
          getAbsoluteImageSrc={getAbsoluteImageSrc}
        />
      ),
      key: agent.uri,
    }))}
  />
);
