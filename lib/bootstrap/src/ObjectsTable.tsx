import {Table} from "reactstrap";
import * as React from "react";
import {JoinedInstitution, JoinedObject} from "@paradicms/models";

export const ObjectsTable: React.FunctionComponent<{
  renderInstitutionLink?: (
    institution: Institution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderObjectLink: (
    object: Object,
    children: React.ReactNode
  ) => React.ReactNode;
  objects: readonly Object[];
}> = ({objects, renderInstitutionLink, renderObjectLink}) => (
  <Table className="table-bordered table-striped">
    {renderInstitutionLink ? (
      <thead>
        <tr>
          <th>Institution</th>
          <td>Object</td>
        </tr>
      </thead>
    ) : null}
    <tbody>
      {objects.map(object => (
        <tr key={object.uri}>
          {renderInstitutionLink ? (
            <td>
              {renderInstitutionLink(
                object.institution,
                <span>{object.institution.name}</span>
              )}
            </td>
          ) : null}
          <td>{renderObjectLink(object, <span>{object.title}</span>)}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);
