import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import {JoinedRights, JoinedValue} from "@paradicms/models";

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
    <TableRow className={rowClassName}>
      <TableCell className={cellClassName}>
        <strong>{label}</strong>
      </TableCell>
      <TableCell className={cellClassName}>
        <JoinedValueLink value={value} />
      </TableCell>
    </TableRow>
  );
};

const JoinedValueLink: React.FunctionComponent<{value: JoinedValue}> = ({
  value,
}) => {
  const {text, uri} = value;
  if (uri) {
    return <a href={uri}>{text}</a>;
  } else {
    return <span>{text}</span>;
  }
};

export const RightsTable: React.FunctionComponent<{
  cellClassName?: string;
  rights: JoinedRights;
  rowClassName?: string;
  tableClassName?: string;
}> = ({cellClassName, rights, rowClassName, tableClassName}) => {
  return (
    <TableContainer component={Paper}>
      <Table className={tableClassName}>
        <TableBody>
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
        </TableBody>
      </Table>
    </TableContainer>
  );
};
