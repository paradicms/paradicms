import * as React from "react";
import {CSSProperties} from "react";
import {License, Rights, RightsStatement} from "@paradicms/models";
import {Table} from "reactstrap";

const RightsTableRow: React.FunctionComponent<{
  cellClassName?: string;
  cellStyle?: CSSProperties;
  label: string;
  rowClassName?: string;
  rowStyle?: CSSProperties;
  value: React.ReactNode | null | undefined;
}> = ({cellClassName, cellStyle, label, rowClassName, rowStyle, value}) => {
  if (!value) {
    return null;
  }
  return (
    <tr className={rowClassName} style={rowStyle}>
      <td className={cellClassName} style={cellStyle}>
        <strong>{label}</strong>
      </td>
      <td className={cellClassName}>{value}</td>
    </tr>
  );
};

export const RightsTable: React.FunctionComponent<{
  cellClassName?: string;
  cellStyle?: CSSProperties;
  rights: Rights;
  rowClassName?: string;
  rowStyle?: CSSProperties;
  tableClassName?: string;
  tableStyle?: CSSProperties;
}> = ({
  cellClassName,
  cellStyle,
  rights,
  rowClassName,
  rowStyle,
  tableClassName,
  tableStyle,
}) => {
  const licenseValue = React.useMemo(() => {
    if (!rights.license) {
      return null;
    }
    if (typeof rights.license === "string") {
      return rights.license as string;
    }
    const license = rights.license as License;
    return <a href={license.uri}>{license.title}</a>;
  }, [rights]);

  const rightsStatementValue = React.useMemo(() => {
    if (!rights.statement) {
      return null;
    }
    if (typeof rights.statement === "string") {
      return rights.statement as string;
    }
    const rightsStatement = rights.statement as RightsStatement;
    return <a href={rightsStatement.uri}>{rightsStatement.prefLabel}</a>;
  }, [rights]);

  const rowProps = {cellClassName, cellStyle, rowClassName, rowStyle};

  return (
    <Table className={tableClassName} size="sm" style={tableStyle}>
      <tbody>
        <RightsTableRow
          {...rowProps}
          label="Statement"
          value={rightsStatementValue}
        />
        <RightsTableRow {...rowProps} label="Creator" value={rights.creator} />
        <RightsTableRow {...rowProps} label="Holder" value={rights.holder} />
        <RightsTableRow {...rowProps} label="License" value={licenseValue} />
      </tbody>
    </Table>
  );
};
