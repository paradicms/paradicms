import {WorkProperty} from "./WorkProperty";
import React from "react";
import {Col, Container, Row, Table} from "reactstrap";
import {PropertyGroup} from "@paradicms/models";
import {requireDefined} from "@paradicms/utilities";

const groupWorkProperties = (workProperties: readonly WorkProperty[]) => {
  const ungroupedWorkProperties: WorkProperty[] = [];
  const workPropertiesByGroupIri: {[index: string]: WorkProperty[]} = {};
  for (const workProperty of workProperties) {
    if (workProperty.property.groupIris.length === 0) {
      ungroupedWorkProperties.push(workProperty);
    } else {
      for (const propertyGroupIri of workProperty.property.groupIris) {
        if (!workPropertiesByGroupIri[propertyGroupIri]) {
          workPropertiesByGroupIri[propertyGroupIri] = [];
        }
        workPropertiesByGroupIri[propertyGroupIri].push(workProperty);
      }
    }
  }
  return {ungroupedWorkProperties, workPropertiesByGroupIri};
};

const WorkPropertiesTable: React.FunctionComponent<{
  propertyGroupLabel?: string;
  workProperties: readonly WorkProperty[];
}> = ({propertyGroupLabel, workProperties}) => {
  return (
    <Table striped>
      {propertyGroupLabel ? (
        <thead>
          <tr>
            <th className="text-center" colSpan={2}>
              {propertyGroupLabel}
            </th>
          </tr>
        </thead>
      ) : null}
      <tbody>
        {workProperties
          .concat()
          .sort((left, right) =>
            left.property.label.localeCompare(right.property.label)
          )
          .flatMap((workProperty, workPropertyI) =>
            workProperty.values
              .concat()
              .sort((left, right) => left.label.localeCompare(right.label))
              .map((value, valueI) => (
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
    workPropertiesByGroupIri,
  } = groupWorkProperties(workProperties);

  const propertyGroupsByKey = propertyGroups.reduce((map, propertyGroup) => {
    map[propertyGroup.key] = propertyGroup;
    return map;
  }, {} as {[index: string]: PropertyGroup});

  return (
    <Container className="px-2" fluid>
      {Object.keys(workPropertiesByGroupIri)
        .sort((left, right) =>
          requireDefined(propertyGroupsByKey[left]).label.localeCompare(
            requireDefined(propertyGroupsByKey[right]).label
          )
        )
        .map(propertyGroupKey => (
          <Row key={propertyGroupKey}>
            <Col className="px-0" xs={12}>
              <WorkPropertiesTable
                propertyGroupLabel={
                  requireDefined(propertyGroupsByKey[propertyGroupKey]).label
                }
                workProperties={workProperties}
              />
            </Col>
          </Row>
        ))}
      {ungroupedWorkProperties ? (
        <Row>
          <Col className="px-0" xs={12}>
            <WorkPropertiesTable workProperties={ungroupedWorkProperties} />
          </Col>
        </Row>
      ) : null}
    </Container>
  );
};
