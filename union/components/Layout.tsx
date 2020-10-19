import * as React from "react";
import {
  AppBar,
  Breadcrumbs,
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Helmet from "react-helmet";
import {Footer, NavbarSearchForm} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";
import {Hrefs} from "lib/Hrefs";
import {Collection, Institution, Object} from "@paradicms/models";
import {useState} from "react";

const useStyles = makeStyles(theme => ({
  brand: {
    marginRight: theme.spacing(4),
  },
  breadcrumbs: {
    marginLeft: theme.spacing(4),
  },
  navLink: {
    color: "white",
    fontSize: "larger",
    marginRight: theme.spacing(4),
    textDecoration: "none",
  },
  card: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
}));

export const Layout: React.FunctionComponent<React.PropsWithChildren<{
  breadcrumbs?: {
    collection?: Collection;
    institution?: Institution;
    object?: Object;
  };
  cardTitle?: React.ReactNode;
  className?: string;
  documentTitle?: string;
  onSearch?: (text: string) => void;
}>> = ({
  breadcrumbs,
  cardTitle,
  children,
  documentTitle,
  onSearch: onSearchUserDefined,
}) => {
  const classes = useStyles();

  const breadcrumbNodes: React.ReactNode[] = [];
  if (breadcrumbs) {
    breadcrumbNodes.push(
      <Link key="home" {...Hrefs.home}>
        Home
      </Link>
    );
    const {collection, institution, object} = breadcrumbs;
    if (institution) {
      breadcrumbNodes.push(
        <Link key="institutions" {...Hrefs.home}>
          Institutions
        </Link>
      );
      breadcrumbNodes.push(
        <Link
          key={`institution-${institution.uri}`}
          {...Hrefs.institution(institution.uri).home}
        >
          {institution.name}
        </Link>
      );

      if (collection) {
        breadcrumbNodes.push(
          <Link key="collections" {...Hrefs.institution(institution.uri).home}>
            Collections
          </Link>
        );
        breadcrumbNodes.push(
          <Link
            key={`collection-${collection.uri}`}
            {...Hrefs.institution(institution.uri).collection(collection.uri)
              .home}
          >
            {collection.title}
          </Link>
        );
      }

      if (object) {
        if (collection) {
          breadcrumbNodes.push(
            <Link
              key="objects"
              {...Hrefs.institution(institution.uri)
                .collection(collection.uri)
                .objects()}
            >
              Objects
            </Link>
          );
        } else {
          breadcrumbNodes.push(<span key="objects">Objects</span>);
        }
        breadcrumbNodes.push(
          <Link
            key={`object-${object.uri}`}
            {...Hrefs.institution(institution.uri).object(object.uri)}
          >
            {object.title}
          </Link>
        );
      }
    }
  }

  const [redirectToSearchText, setRedirectToSearchText] = useState<
    string | null
  >(null);

  // @ts-ignore
  let onSearch: (text: string) => void;
  if (onSearchUserDefined) {
    onSearch = onSearchUserDefined;
  } else {
    onSearch = setRedirectToSearchText;
    if (redirectToSearchText) {
      window.location.href = Hrefs.search({
        text: redirectToSearchText,
      }).href.toString();
    }
  }

  return (
    <>
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
          <AppBar data-cy="navbar" position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.brand}>
                Paradicms
              </Typography>
              <Link className={classes.navLink} {...Hrefs.home}>
                Home
              </Link>
              <NavbarSearchForm onSearch={onSearch} />
            </Toolbar>
          </AppBar>
        </Grid>
        {breadcrumbs ? (
          <Grid item>
            <Breadcrumbs className={classes.breadcrumbs} data-cy="breadcrumbs">
              {breadcrumbNodes}
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
          <Footer
            contactUrl="mailto:info@paradicms.org"
            gitHubUrl="https://github.com/minorg/paradicms"
          />
        </Grid>
      </Grid>
    </>
  );
};
