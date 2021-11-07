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
import {Image, Institution, Rights, Text, Work} from "@paradicms/models";

const useStyles = makeStyles(theme => ({
  accordionTitle: {
    fontSize: "smaller",
  },
  workSummary: {
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

export const WorkCard: React.FunctionComponent<{
  work: Work;
  renderInstitutionLink?: (
    institution: Institution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderWorkLink: (work: Work, children: React.ReactNode) => React.ReactNode;
}> = ({work, renderInstitutionLink, renderWorkLink}) => {
  const classes = useStyles();
  const thumbnail = work.thumbnail({
    targetDimensions: thumbnailTargetDimensions,
  });
  const thumbnailSrc =
    thumbnail?.src ?? Image.placeholderSrc(thumbnailTargetDimensions);

  const rightsEntries: {rights: Rights; title: string}[] = [];
  if (thumbnail && thumbnail.rights) {
    rightsEntries.push({rights: thumbnail.rights, title: "Image rights"});
  }
  if (work.rights || work.institution.rights) {
    rightsEntries.push({
      rights: work.rights ?? work.institution.rights!,
      title: "Metadata rights",
    });
  }
  if (work.abstract && work.abstract instanceof Text && work.abstract.rights) {
    rightsEntries.push({
      rights: work.abstract.rights!,
      title: "Summary rights",
    });
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.title}
        title={renderWorkLink(work, <>{work.title}</>)}
      />
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item container alignItems="center" justify="center">
            <Grid item>
              {renderWorkLink(
                work,
                <img
                  className={classes.thumbnailImg}
                  src={thumbnailSrc}
                  title={work.title}
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
                        work.institution,
                        <span>{work.institution.name}</span>
                      )}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          ) : null}
          {work.abstract ? (
            <Grid item>
              <Accordion>
                <AccordionSummary
                  className={classes.accordionTitle}
                  expandIcon={<ExpandMoreIcon />}
                >
                  Summary
                </AccordionSummary>
                <AccordionDetails className={classes.workSummary}>
                  {work.abstract}
                </AccordionDetails>
              </Accordion>
            </Grid>
          ) : null}
          {rightsEntries.map((rightsEntry, key) => (
            <Grid item key={key}>
              <Accordion>
                <AccordionSummary
                  className={classes.accordionTitle}
                  expandIcon={<ExpandMoreIcon />}
                >
                  {rightsEntry.title}
                </AccordionSummary>
                <AccordionDetails>
                  <RightsTable
                    cellClassName={classes.rightsTableCell}
                    rights={rightsEntry.rights}
                  ></RightsTable>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
