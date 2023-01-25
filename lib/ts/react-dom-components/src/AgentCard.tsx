import {Agent, Image, ImageDimensions} from "@paradicms/models";
import {Card, CardBody, CardFooter, CardHeader} from "reactstrap";
import {RightsParagraph} from "./RightsParagraph";
import * as React from "react";
import {getNamedModelLinks} from "./getNamedModelLinks";
import {smallThumbnailTargetDimensions as thumbnailTargetDimensionsDefault} from "./smallThumbnailTargetDimensions";

export const AgentCard: React.FunctionComponent<{
  agent: Agent;
  role?: string;
  thumbnailTargetDimensions?: ImageDimensions;
}> = ({
  agent,
  role,
  thumbnailTargetDimensions: optionalThumbnailTargetDimensions,
}) => {
  const agentLinks = getNamedModelLinks(agent);
  const thumbnailTargetDimensions =
    optionalThumbnailTargetDimensions ?? thumbnailTargetDimensionsDefault;
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
