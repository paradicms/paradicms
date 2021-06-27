import * as React from "react";
import {JoinedRights, JoinedValue} from "@paradicms/models";
import {Table} from "reactstrap";
import {JoinedValueLink} from "./JoinedValueLink";

const RightsTableRow: React.FunctionComponent<{
  cellClassName?: string;
  label: string;
  rowClassName?: string;
  value: JoinedValue | null;
}> = ({cellClassName, label, rowClassName, value}) => {
  if (!value) {
    return null;
  }
  return (
    <tr className={rowClassName}>
      <td className={cellClassName}>
        <strong>{label}</strong>
      </td>
      <td className={cellClassName}>
        <JoinedValueLink value={value} />
      </td>
    </tr>
  );
};


export const RightsTable: React.FunctionComponent<{
  cellClassName?: string;
  rights: JoinedRights;
  rowClassName?: string;
  tableClassName?: string;
}> = ({cellClassName, rights, rowClassName, tableClassName}) => {
  return (
    <Table className={tableClassName} size="sm">
      <tbody>
        <RightsTableRow
          cellClassName={cellClassName}
          label="Statement"
          rowClassName={rowClassName}
          value={rights.statement}
        />
        <RightsTableRow
          cellClassName={cellClassName}
          label="Creator"
          rowClassName={rowClassName}
          value={rights.creator}
        />
        <RightsTableRow
          cellClassName={cellClassName}
          label="Holder"
          rowClassName={rowClassName}
          value={rights.holder}
        />
        <RightsTableRow
          cellClassName={cellClassName}
          label="License"
          rowClassName={rowClassName}
          value={rights.license}
        />
      </tbody>
    </Table>
  );
};
