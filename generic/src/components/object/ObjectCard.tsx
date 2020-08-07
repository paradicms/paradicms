import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Link} from "gatsby";
import {Hrefs} from "~/Hrefs";
import {ObjectSummary} from "~/models/object/ObjectSummary";

const useStyles = makeStyles(theme => ({
  expansionPanelText: {
    fontSize: "x-small",
    maxWidth: "32em",
  },
}));

export const ObjectCard: React.FunctionComponent<{
  object: ObjectSummary;
}> = ({object}) => {
  const objectHref = Hrefs.institution(object.institution)
    .collection(object.collection)
    .object(object);

  const classes = useStyles();

  return (
    <Card>
      <CardHeader component="a" href={objectHref} title={object.title} />
      <CardContent>
        <Grid container direction="column" spacing={1}>
          {object.thumbnail ? (
            <Grid item>
              <div style={{height: 200, width: 200}}>
                <figure className="figure text-center w-100">
                  <Link to={objectHref}>
                    <img
                      className="figure-img rounded"
                      src={
                        object.thumbnail.uri ? object.thumbnail.uri : undefined
                      }
                    />
                  </Link>
                </figure>
              </div>
            </Grid>
          ) : null}
          <Grid item>
            Institution:{" "}
            <Link to={Hrefs.institution(object.institution).home}>
              {object.institution.name}
            </Link>
          </Grid>
          <Grid item>
            Collection:{" "}
            <Link
              to={
                Hrefs.institution(object.institution).collection(
                  object.collection
                ).home
              }
            >
              {object.collection.title}
            </Link>
          </Grid>
          {object.descriptions && object.descriptions.length > 0 ? (
            <Grid item>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  Description
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expansionPanelText}>
                  {object.descriptions.length === 1 ? (
                    <span>{object.descriptions[0]}</span>
                  ) : (
                    <List>
                      {object.descriptions.map(
                        (description, descriptionIndex) => (
                          <ListItem key={descriptionIndex}>
                            <ListItemText>{description}</ListItemText>
                          </ListItem>
                        )
                      )}
                    </List>
                  )}
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
          ) : null}
          {object.rights ? (
            <Grid item>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  Rights
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expansionPanelText}>
                  {object.rights}
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
          ) : null}
        </Grid>
      </CardContent>
    </Card>
  );
};
