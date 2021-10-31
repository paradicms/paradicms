import * as React from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import {WorkAgentProfile} from "../lib/WorkAgentProfile";

export const WorkAgentProfilesContainer: React.FunctionComponent<{
  workAgentProfiles: readonly WorkAgentProfile[];
}> = ({workAgentProfiles}) => {
  return (
    <Container fluid>
      {workAgentProfiles.map((workAgentProfile, workAgentProfileIndex) => (
        <Row className="mt-2" key={workAgentProfileIndex}>
          <Col xs={12}>
            <Card className="text-center">
              <CardHeader tag="h6">
                {workAgentProfile.role}:&nbsp;{workAgentProfile.agent.name}
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
                    maxWidth: workAgentProfile.thumbnailTargetDimensions.width,
                  }}
                  title={workAgentProfile.agent.name}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};
