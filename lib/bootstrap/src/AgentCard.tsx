import {Agent, Image} from "@paradicms/models";
import {Card, CardBody, CardFooter, CardHeader} from "reactstrap";
import {thumbnailTargetDimensions} from "./thumbnailTargetDimensions";
import {RightsParagraph} from "./RightsParagraph";
import * as React from "react";
import {getNamedModelLinks} from "./getNamedModelLinks";

export const AgentCard: React.FunctionComponent<{
  agent: Agent;
  role?: string;
}> = ({agent, role}) => {
  const agentLinks = getNamedModelLinks(agent);

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
