import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {RightsTable} from "./RightsTable";
import {thumbnailTargetDimensions} from "./thumbnailTargetDimensions";
import {JoinedImage, JoinedInstitution, JoinedObject} from "@paradicms/models";

const useStyles = makeStyles(theme => ({
  accordionTitle: {
    fontSize: "smaller",
  },
  objectSummary: {
    fontSize: "x-small",
    maxWidth: "32em",
  },
  thumbnailImg: {
    maxHeight: "200px",
    maxWidth: "200px",
  },
  rightsTableCell: {
    fontSize: "x-small",
    padding: theme.spacing(1),
  },
  root: {
    width: "400px",
  },
  title: {
    textAlign: "center",
  },
}));

export const ObjectCard: React.FunctionComponent<{
  object: JoinedObject;
  renderInstitutionLink?: (
    institution: JoinedInstitution,
    children: React.ReactNode,
  ) => React.ReactNode;
  renderObjectLink: (
    object: JoinedObject,
    children: React.ReactNode,
  ) => React.ReactNode;
}> = ({object, renderInstitutionLink, renderObjectLink}) => {
  const classes = useStyles();
  const thumbnail = object.thumbnail({targetDimensions: thumbnailTargetDimensions});
  const thumbnailSrc = thumbnail?.src ?? JoinedImage.placeholderSrc(thumbnailTargetDimensions);

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.title}
        title={renderObjectLink(object, <>{object.title}</>)}
      />
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item container alignItems="center" justify="center">
            <Grid item>
              {renderObjectLink(
                object,
                <img
                  className={classes.thumbnailImg}
                  src={thumbnailSrc}
                  title={object.title}
                />
              )}
            </Grid>
          </Grid>
          {renderInstitutionLink ? (
            <Grid item>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <strong>Institution</strong>
                    </TableCell>
                    <TableCell>
                      {renderInstitutionLink(
                        object.institution,
                        <span>{object.institution.name}</span>
                      )}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          ) : null}
          {object.abstract ? (
            <Grid item>
              <Accordion>
                <AccordionSummary
                  className={classes.accordionTitle}
                  expandIcon={<ExpandMoreIcon />}
                >
                  Summary
                </AccordionSummary>
                <AccordionDetails className={classes.objectSummary}>
                  {object.abstract}
                </AccordionDetails>
              </Accordion>
            </Grid>
          ) : null}
          {thumbnail && thumbnail.rights ? (
            <Grid item>
              <Accordion>
                <AccordionSummary
                  className={classes.accordionTitle}
                  expandIcon={<ExpandMoreIcon />}
                >
                  Image rights
                </AccordionSummary>
                <AccordionDetails>
                  <RightsTable
                    cellClassName={classes.rightsTableCell}
                    rights={thumbnail.rights}
                  ></RightsTable>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ) : null}
          {object.rights ? (
            <Grid item>
              <Accordion>
                <AccordionSummary
                  className={classes.accordionTitle}
                  expandIcon={<ExpandMoreIcon />}
                >
                  Metadata rights
                </AccordionSummary>
                <AccordionDetails>
                  <RightsTable
                    cellClassName={classes.rightsTableCell}
                    rights={object.rights}
                  ></RightsTable>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ) : null}
        </Grid>
      </CardContent>
    </Card>
  );
};
