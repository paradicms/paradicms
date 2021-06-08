import * as React from "react";
import {Card, CardContent, CardHeader, Grid, makeStyles} from "@material-ui/core";
import {InstitutionCardInstitution} from "./InstitutionCardInstitution";
import {thumbnailTargetDimensions} from "./thumbnailTargetDimensions";
import {getImageSrc} from "@paradicms/model-utils";

const useStyles = makeStyles(theme => ({
  thumbnailImg: {
    maxHeight: "200px",
    maxWidth: "200px",
  },
  root: {
    width: "400px",
  },
  title: {
    textAlign: "center",
  },
}));

export const InstitutionCard: React.FunctionComponent<{
  institution: InstitutionCardInstitution;
  renderInstitutionLink: (
    institution: InstitutionCardInstitution,
    children: React.ReactNode
  ) => React.ReactNode;
}> = ({institution, renderInstitutionLink}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.title}
        title={renderInstitutionLink(institution, <>{institution.name}</>)}
      />
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item container alignItems="center" justify="center">
            <Grid item>
              {renderInstitutionLink(
                institution,
                <img
                  className={classes.thumbnailImg}
                  src={getImageSrc({image: institution.thumbnail, targetDimensions: thumbnailTargetDimensions})}
                  title={institution.name}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
