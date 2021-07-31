import * as React from "react";
import {JoinedRights, License, RightsStatement} from "@paradicms/models";
import {Table} from "reactstrap";

const RightsTableRow: React.FunctionComponent<{
  cellClassName?: string;
  label: string;
  rowClassName?: string;
  value: React.ReactNode | null | undefined;
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
        {value}
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
  const licenseValue = React.useMemo(() => (): React.ReactNode | null => {
    if (!rights.license) {
      return null;
    }
    if (typeof (rights.license) === "string") {
      return rights.license as string;
    }
    return (rights.license as License).title;
  }, [rights]);

  const rightsStatementValue = React.useMemo(() => (): React.ReactNode | null => {
    if (!rights.statement) {
      return null;
    }
    if (typeof (rights.statement) === "string") {
      return rights.statement as string;
    }
    return (rights.statement as RightsStatement).prefLabel;
  }, [rights]);

  return (
    <Table className={tableClassName} size="sm">
      <tbody>
      <RightsTableRow
        cellClassName={cellClassName}
        label="Statement"
        rowClassName={rowClassName}
        value={rightsStatementValue()}
      />
      <RightsTableRow
        cellClassName={cellClassName}
        label="Creator"
        rowClassName={rowClassName}
        value={rights.creator?.value}
      />
      <RightsTableRow
        cellClassName={cellClassName}
        label="Holder"
        rowClassName={rowClassName}
        value={rights.holder?.value}
      />
      <RightsTableRow
        cellClassName={cellClassName}
        label="License"
        rowClassName={rowClassName}
        value={licenseValue()}
      />
      </tbody>
    </Table>
  );
};
