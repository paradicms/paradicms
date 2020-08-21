import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
  Grid,
  makeStyles,
} from "@material-ui/core";
import Helmet from "react-helmet";
import {Breadcrumbs} from "components/Breadcrumbs";
import {BreadcrumbsProps} from "components/BreadcrumbsProps";
import {Fonts, Footer} from "@paradicms/material-ui";
import {Navbar} from "components/Navbar";

const useStyles = makeStyles(theme => ({
  breadcrumbs: {
    marginLeft: theme.spacing(4),
  },
  card: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
}));

export const Layout: React.FunctionComponent<React.PropsWithChildren<{
  breadcrumbs?: BreadcrumbsProps;
  cardTitle?: React.ReactNode;
  className?: string;
  documentTitle?: string;
  onSearch?: (text: string) => void;
}>> = ({breadcrumbs, cardTitle, children, documentTitle, onSearch}) => {
  const classes = useStyles();

  return (
    <>
      <Fonts />
      <CssBaseline />
      <Helmet
        title={
          "Paradicms union catalog" +
          (documentTitle ? " - " + documentTitle : "")
        }
        meta={[
          {
            name: "description",
            content: "Paradicms union catalog",
          },
          // {name: "keywords", content: data.site!.siteMetadata!.keywords},
        ]}
      />
      <Grid data-cy="frame" container direction="column" spacing={2}>
        <Grid item>
          <Navbar onSearch={onSearch} />
        </Grid>
        {breadcrumbs ? (
          <Grid item data-cy="Fixtures-row">
            <Breadcrumbs
              className={classes.breadcrumbs}
              data-cy="Fixtures"
              {...breadcrumbs}
            />
          </Grid>
        ) : null}
        <Grid item>
          <Card className={classes.card}>
            {cardTitle || documentTitle ? (
              <CardHeader
                data-cy="frame-card-header"
                title={cardTitle ?? documentTitle}
              />
            ) : null}
            <CardContent>{children}</CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Footer
            author={{
              email: "info@paradicms.org",
              name: "Minor Gordon",
              url: "https://paradicms.org",
            }}
            gitHubUrl="https://github.com/minorg/paradicms"
          />
        </Grid>
      </Grid>
    </>
  );
};
