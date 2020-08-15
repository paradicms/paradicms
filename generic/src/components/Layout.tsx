import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
  Grid,
  makeStyles,
} from "@material-ui/core";
import {Footer} from "~/components/Footer";
import {graphql, StaticQuery} from "gatsby";
import Helmet from "react-helmet";

import {Navbar} from "~/components/Navbar";
import {BreadcrumbsProps} from "~/components/BreadcrumbsProps";
import {Breadcrumbs} from "~/components/Breadcrumbs";
import {LayoutQuery} from "~/graphql/types";

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
    <StaticQuery<LayoutQuery>
      query={graphql`
        query Layout {
          site {
            siteMetadata {
              description
              keywords
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <CssBaseline />
          <Helmet
            title={
              data.site!.siteMetadata!.title +
              (documentTitle ? " - " + documentTitle : "")
            }
            meta={[
              {
                name: "description",
                content: data!.site!.siteMetadata!.description,
              },
              {name: "keywords", content: data.site!.siteMetadata!.keywords},
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
              <Footer />
            </Grid>
          </Grid>
        </>
      )}
    />
  );
};
