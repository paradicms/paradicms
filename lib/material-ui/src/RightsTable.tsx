import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import {License, Rights, RightsStatement} from "@paradicms/models";

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
    <TableRow className={rowClassName}>
      <TableCell className={cellClassName}>
        <strong>{label}</strong>
      </TableCell>
      <TableCell className={cellClassName}>{value}</TableCell>
    </TableRow>
  );
};

export const RightsTable: React.FunctionComponent<{
  cellClassName?: string;
  rights: Rights;
  rowClassName?: string;
  tableClassName?: string;
}> = ({cellClassName, rights, rowClassName, tableClassName}) => {
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

  return (
    <TableContainer component={Paper}>
      <Table className={tableClassName}>
        <TableBody>
          <RightsTableRow
            cellClassName={cellClassName}
            label="Statement"
            rowClassName={rowClassName}
            value={rightsStatementValue}
          />
          {rights.creators.map((creator, creatorIndex) => (
            <RightsTableRow
              cellClassName={cellClassName}
              key={"creator" + creatorIndex.toString()}
              label="Creator"
              rowClassName={rowClassName}
              value={creator.toString()}
            />
          ))}
          {rights.holders.map((holder, holderIndex) => (
            <RightsTableRow
              cellClassName={cellClassName}
              key={"holder" + holderIndex.toString()}
              label="Holder"
              rowClassName={rowClassName}
              value={holder}
            />
          ))}
          <RightsTableRow
            cellClassName={cellClassName}
            label="License"
            rowClassName={rowClassName}
            value={licenseValue}
          />
        </TableBody>
      </Table>
    </TableContainer>
  );
};
