import {JoinedProperty} from "@paradicms/models";
import * as React from "react";
import {Table, TableBody, TableCell, TableRow} from "@material-ui/core";

export const PropertiesTable: React.FunctionComponent<{
  properties: readonly JoinedProperty[];
}> = ({properties}) => (
  <Table>
    <TableBody>
      {properties
        .concat()
        .sort((left, right) => left.uri.localeCompare(right.uri))
        .map((property, propertyIndex) => {
          const propertyDefinition = property.definition;
          return (
            <React.Fragment key={propertyIndex}>
              <TableRow key={`property-${property.uri}-${propertyIndex}`}>
                <TableCell>
                  <strong>{propertyDefinition?.label ?? property.uri}</strong>
                </TableCell>
                <TableCell>{property.value.value}</TableCell>
              </TableRow>
            </React.Fragment>
          );
        })}
    </TableBody>
  </Table>
);
