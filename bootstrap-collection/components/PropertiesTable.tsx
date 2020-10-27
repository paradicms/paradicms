import {Property, PropertyDefinition} from "@paradicms/models";
import * as React from "react";
import {Table} from "reactstrap";

export const PropertiesTable: React.FunctionComponent<{
  properties: readonly Property[];
  propertyDefinitions: readonly PropertyDefinition[];
}> = ({properties, propertyDefinitions}) => (
  <Table>
    <tbody>
      {propertyDefinitions
        .concat()
        .sort((left, right) => left.uri.localeCompare(right.uri))
        .map(propertyDefinition => {
          const propertyDefinitionProperties = properties.filter(
            property =>
              property.propertyDefinitionUri === propertyDefinition.uri
          );
          if (propertyDefinitionProperties.length === 0) {
            return null;
          }
          return (
            <React.Fragment key={propertyDefinition.uri}>
              {propertyDefinitionProperties.map((property, propertyIndex) => (
                <tr key={`property-${propertyDefinition.uri}-${propertyIndex}`}>
                  <td>
                    <strong>{propertyDefinition.label}</strong>
                  </td>
                  <td>{property.value}</td>
                </tr>
              ))}
            </React.Fragment>
          );
        })}
    </tbody>
  </Table>
);
