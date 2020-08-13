import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Link} from "gatsby";
import {Hrefs} from "~/Hrefs";
import {JoinedObject} from "~/models/JoinedObject";
import {Images} from "~/models/Images";
import {RightsTable} from "~/components/RightsTable";
import {Image} from "~/models/Image";

const useStyles = makeStyles(theme => ({
  expansionPanelText: {
    fontSize: "x-small",
    maxWidth: "32em",
  },
}));

export const ObjectCard: React.FunctionComponent<{
  includeInstitution?: boolean;
  object: JoinedObject;
}> = ({includeInstitution, object}) => {
  const classes = useStyles();

  const objectHref = Hrefs.institution(object.institution).object(object);

  const descriptions = (object.properties ?? [])
    .filter(property => property.key == "description")
    .map(property => property.value);

  let thumbnail: Image | undefined;
  const objectImagesByOriginalImageUri = Images.indexByOriginalImageUri(
    object.images
  );
  for (const originalImageUri of Object.keys(objectImagesByOriginalImageUri)) {
    thumbnail = Images.selectThumbnail({
      images: objectImagesByOriginalImageUri[originalImageUri],
      maxDimensions: {height: 200, width: 200},
    });
    if (thumbnail) {
      break;
    }
  }

  return (
    <Card>
      <CardHeader component="a" href={objectHref} title={object.title!} />
      <CardContent>
        <Grid container direction="column" spacing={2}>
          {thumbnail ? (
            <Grid item>
              <div style={{height: 200, width: 200}}>
                <figure className="figure text-center w-100">
                  <Link to={objectHref}>
                    <img className="figure-img rounded" src={thumbnail.uri} />
                  </Link>
                </figure>
              </div>
            </Grid>
          ) : null}
          {includeInstitution ? (
            <Grid item>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <strong>Institution</strong>
                    </TableCell>
                    <TableCell>
                      <Link to={Hrefs.institution(object.institution).home}>
                        {object.institution.name}
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          ) : null}
          {descriptions.length > 0 ? (
            <Grid item>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  Description
                </AccordionSummary>
                <AccordionDetails className={classes.expansionPanelText}>
                  {descriptions.length === 1 ? (
                    <span>{descriptions[0]}</span>
                  ) : (
                    <List>
                      {descriptions.map((description, descriptionIndex) => (
                        <ListItem key={descriptionIndex}>
                          <ListItemText>{description}</ListItemText>
                        </ListItem>
                      ))}
                    </List>
                  )}
                </AccordionDetails>
              </Accordion>
            </Grid>
          ) : null}
          {object.rights ? (
            <Grid item>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  Rights
                </AccordionSummary>
                <AccordionDetails className={classes.expansionPanelText}>
                  <RightsTable rights={object.rights} />
                </AccordionDetails>
              </Accordion>
            </Grid>
          ) : null}
        </Grid>
      </CardContent>
    </Card>
  );
};
