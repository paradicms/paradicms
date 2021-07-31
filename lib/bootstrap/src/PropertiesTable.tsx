import * as React from "react";
import {Table} from "reactstrap";
import {JoinedProperty} from "@paradicms/models";

export const PropertiesTable: React.FunctionComponent<{
  properties: readonly JoinedProperty[];
}> = ({properties}) => (
  <Table>
    <tbody>
    {properties
      .concat()
      .sort((left, right) => left.uri.localeCompare(right.uri))
      .map((property, propertyIndex) => {
        const propertyDefinition = property.definition;
        return (
          <React.Fragment key={propertyIndex}>
            <tr key={`property-${property.uri}-${propertyIndex}`}>
              <td>
                <strong>{propertyDefinition?.label ?? property.uri}</strong>
              </td>
              <td>{property.value}</td>
            </tr>
          </React.Fragment>
        );
      })}
    </tbody>
  </Table>
);
