import {WorkProperty} from "./WorkProperty";
import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Table,
} from "reactstrap";
import {PropertyGroup} from "@paradicms/models";
import {requireDefined} from "@paradicms/utilities";

const groupWorkProperties = (workProperties: readonly WorkProperty[]) => {
  const ungroupedWorkProperties: WorkProperty[] = [];
  const workPropertiesByGroupUri: {[index: string]: WorkProperty[]} = {};
  for (const workProperty of workProperties) {
    if (workProperty.property.groupUris.length === 0) {
      ungroupedWorkProperties.push(workProperty);
    } else {
      for (const propertyGroupUri of workProperty.property.groupUris) {
        if (!workPropertiesByGroupUri[propertyGroupUri]) {
          workPropertiesByGroupUri[propertyGroupUri] = [];
        }
        workPropertiesByGroupUri[propertyGroupUri].push(workProperty);
      }
    }
  }
  return {ungroupedWorkProperties, workPropertiesByGroupUri};
};

const WorkPropertiesTable: React.FunctionComponent<{
  workProperties: readonly WorkProperty[];
}> = ({workProperties}) => {
  return (
    <Table bordered>
      <tbody>
        {workProperties.flatMap((workProperty, workPropertyI) =>
          workProperty.values.map((value, valueI) => (
            <tr key={`${workPropertyI}-${valueI}`}>
              <td>{workProperty.property.label}</td>
              <td>{value.label}</td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};

export const WorkPropertiesContainer: React.FunctionComponent<{
  propertyGroups: readonly PropertyGroup[];
  workProperties: readonly WorkProperty[];
}> = ({propertyGroups, workProperties}) => {
  const {
    ungroupedWorkProperties,
    workPropertiesByGroupUri,
  } = groupWorkProperties(workProperties);

  const propertyGroupsByUri = propertyGroups.reduce((map, propertyGroup) => {
    map[propertyGroup.uri] = propertyGroup;
    return map;
  }, {} as {[index: string]: PropertyGroup});

  return (
    <Container>
      {Object.keys(workPropertiesByGroupUri).map(propertyGroupUri => (
        <Row key={propertyGroupUri}>
          <Col xs={12}>
            <Card>
              <CardHeader>
                {requireDefined(propertyGroupsByUri[propertyGroupUri]).label}
              </CardHeader>
              <CardBody>
                <WorkPropertiesTable workProperties={workProperties} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      ))}
      {ungroupedWorkProperties ? (
        <Row>
          <Col xs={12}>
            <Card>
              <CardBody>
                <WorkPropertiesTable workProperties={ungroupedWorkProperties} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      ) : null}
    </Container>
  );
};
