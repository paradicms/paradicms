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
                  {workAgentProfile.href ? (
                    <a href={workAgentProfile.href}>
                      {workAgentProfile.agent.name}
                    </a>
                  ) : (
                    <span>{workAgentProfile.agent.name}</span>
                  )}
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
