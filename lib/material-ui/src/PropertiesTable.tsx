import {Property, PropertyDefinition} from "@paradicms/models";
import * as React from "react";
import {Table, TableBody, TableCell, TableRow} from "@material-ui/core";

export const PropertiesTable: React.FunctionComponent<{
  properties: readonly Property[];
  propertyDefinitions: readonly PropertyDefinition[];
}> = ({properties, propertyDefinitions}) => (
  <Table>
    <TableBody>
      {propertyDefinitions
        .concat()
        .sort((left, right) => left.uri.localeCompare(right.uri))
        .map(propertyDefinition => {
          const propertyDefinitionProperties = properties.filter(
            property => property.uri === propertyDefinition.uri
          );
          if (propertyDefinitionProperties.length === 0) {
            return null;
          }
          return (
            <React.Fragment key={propertyDefinition.uri}>
              {propertyDefinitionProperties.map((property, propertyIndex) => (
                <TableRow
                  key={`property-${propertyDefinition.uri}-${propertyIndex}`}
                >
                  <TableCell>
                    <strong>{propertyDefinition.label}</strong>
                  </TableCell>
                  <TableCell>{property.value}</TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          );
        })}
    </TableBody>
  </Table>
);
