import * as React from "react";
import {Col, Container, Row} from "reactstrap";
import {WorkAgentProfile} from "../lib/WorkAgentProfile";

export const WorkAgentProfilesContainer: React.FunctionComponent<{
  workAgentProfiles: readonly WorkAgentProfile[];
}> = ({workAgentProfiles}) => {
  return (
    <Container fluid>
      {workAgentProfiles.map((workAgentProfile, workAgentProfileIndex) => (
        <Row className="mt-2" key={workAgentProfileIndex}>
          <Col className="pl-0" xs={12}>
            <img
              src={
                workAgentProfile.thumbnail.src ?? workAgentProfile.thumbnail.uri
              }
              style={{
                maxHeight: workAgentProfile.thumbnailTargetDimensions.height,
                maxWidth: workAgentProfile.thumbnailTargetDimensions.width,
              }}
              title={workAgentProfile.agent.name}
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
};
