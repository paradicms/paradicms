import * as React from "react";
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import {Rights} from "~/models/rights/Rights";

const isUrl = (uri: string) =>
  uri.startsWith("http://") || uri.startsWith("https://");

const useStyles = makeStyles(theme => ({
  cell: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  table: {
    width: "100%",
  },
}));

export const RightsTable: React.FunctionComponent<{
  className?: string;
  rights: Rights;
}> = ({className, rights}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableBody>
          {rights.statements.map(statement => (
            <TableRow>
              <TableCell className={classes.cell}>
                <strong>Rights</strong>
              </TableCell>
              <TableCell className={classes.cell}>
                {isUrl(statement) ? (
                  <a href={statement}>{statement}</a>
                ) : (
                  <React.Fragment>{statement}</React.Fragment>
                )}
              </TableCell>
            </TableRow>
          ))}
          {rights.holder ? (
            <TableRow>
              <TableCell className={classes.cell}>
                <strong>Holder</strong>
              </TableCell>
              <TableCell className={classes.cell}>{rights.holder}</TableCell>
            </TableRow>
          ) : null}
          {/*{rights.license ? (*/}
          {/*  <TableRow>*/}
          {/*    <TableCell className={classes.cell}>*/}
          {/*      <strong>License</strong>*/}
          {/*    </TableCell>*/}
          {/*    <TableCell className={classes.cell}>*/}
          {/*      {Uris.isUrl(rights.license) ? (*/}
          {/*        <a href={rights.license}>{rights.license}</a>*/}
          {/*      ) : (*/}
          {/*        <React.Fragment>{rights.license}</React.Fragment>*/}
          {/*      )}*/}
          {/*    </TableCell>*/}
          {/*  </TableRow>*/}
          {/*) : null}*/}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
