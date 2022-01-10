import * as React from "react";
import {CSSProperties} from "react";
import {Rights} from "@paradicms/models";
import {Table} from "reactstrap";
import {RightsStatementLink} from "./RightsStatementLink";
import {LicenseLink} from "./LicenseLink";

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
  const rowProps = {cellClassName, cellStyle, rowClassName, rowStyle};

  return (
    <Table className={tableClassName} size="sm" style={tableStyle}>
      <tbody>
        <RightsTableRow
          {...rowProps}
          label="Statement"
          value={<RightsStatementLink rightsStatement={rights.statement} />}
        />
        {rights.creators.map((creator, creatorIndex) => (
          <RightsTableRow
            {...rowProps}
            key={"creator" + creatorIndex.toString()}
            label="Creator"
            value={creator.toString()}
          />
        ))}
        {rights.holders.map((holder, holderIndex) => (
          <RightsTableRow
            {...rowProps}
            key={"holder" + holderIndex.toString()}
            label="Holder"
            value={holder.toString()}
          />
        ))}
        <RightsTableRow
          {...rowProps}
          label="License"
          value={<LicenseLink license={rights.license} />}
        />
      </tbody>
    </Table>
  );
};
