import * as React from "react";
import {
  Breadcrumbs,
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
  Grid,
  makeStyles,
} from "@material-ui/core";
import {Footer} from "components/layout/Footer";
import {graphql, StaticQuery} from "gatsby";
import Helmet from "react-helmet";
import {Navbar} from "components/layout/Navbar";

const useStyles = makeStyles(theme => ({
  breadcrumbs: {
    marginLeft: theme.spacing(4),
  },
  card: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
}));

export const Layout: React.FunctionComponent<{
  breadcrumbItems?: React.ReactNode[];
  cardTitle?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  documentTitle?: string;
  onSearch?: (text: string) => void;
}> = ({breadcrumbItems, cardTitle, children, documentTitle, onSearch}) => {
  const classes = useStyles();

  return (
    <StaticQuery<GatsbyTypes.LayoutQueryQuery>
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              description
              keywords
              title
            }
          }
        }
      `}
      render={(data: {
        site: {
          siteMetadata: {
            title: string;
            description: string;
            keywords: string;
          };
        };
      }) => (
        <>
          <CssBaseline />
          <Helmet
            title={
              data.site.siteMetadata.title +
              (documentTitle ? " - " + documentTitle : "")
            }
            meta={[
              {
                name: "description",
                content: data.site.siteMetadata.description,
              },
              {name: "keywords", content: data.site.siteMetadata.keywords},
            ]}
          />
          <Grid data-cy="frame" container direction="column" spacing={2}>
            <Grid item>
              <Navbar onSearch={onSearch} />
            </Grid>
            {breadcrumbItems ? (
              <Grid item data-cy="frame-breadcrumbs-row">
                <Breadcrumbs
                  className={classes.breadcrumbs}
                  data-cy="frame-breadcrumbs"
                >
                  {breadcrumbItems}
                </Breadcrumbs>
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
