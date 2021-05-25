import * as React from "react";
import {Grid, makeStyles, StyleRules} from "@material-ui/core";

const useStyles = makeStyles(theme => {
  const styles: StyleRules = {
    footerParagraph: {
      "text-align": "center",
    },
  };
  return styles;
});

export const Footer: React.FunctionComponent<{
  contactUrl: string;
  gitHubUrl: string;
}> = ({contactUrl, gitHubUrl}) => {
  const classes = useStyles();
  return (
    <footer>
      <Grid container direction="column">
        <Grid item>
          <p className={classes.footerParagraph}>
            This site is for educational purposes only.
          </p>
        </Grid>
        <Grid item>
          <p className={classes.footerParagraph}>
            <a data-cy="contact-link" href={contactUrl}>
              Contact
            </a>
            &nbsp;|&nbsp;
            <a data-cy="github-link" href={gitHubUrl}>
              GitHub
            </a>
          </p>
        </Grid>
      </Grid>
    </footer>
  );
};
