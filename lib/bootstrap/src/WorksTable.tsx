import {Table} from "reactstrap";
import * as React from "react";
import {Institution, Work} from "@paradicms/models";

export const WorksTable: React.FunctionComponent<{
  renderInstitutionLink?: (
    institution: Institution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderWorkLink: (work: Work, children: React.ReactNode) => React.ReactNode;
  works: readonly Work[];
}> = ({works, renderInstitutionLink, renderWorkLink}) => (
  <Table className="table-bordered table-striped">
    {renderInstitutionLink ? (
      <thead>
        <tr>
          <th>Institution</th>
          <td>Work</td>
        </tr>
      </thead>
    ) : null}
    <tbody>
      {works.map(work => (
        <tr key={work.uri}>
          {renderInstitutionLink ? (
            <td>
              {renderInstitutionLink(
                work.institution,
                <span>{work.institution.name}</span>
              )}
            </td>
          ) : null}
          <td>{renderWorkLink(work, <span>{work.title}</span>)}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);
