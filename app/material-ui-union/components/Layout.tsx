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
import {Footer, NavbarSearchForm} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";
import {Hrefs} from "lib/Hrefs";
import {useRouter} from "next/router";
import Head from "next/head";
import {AppConfiguration} from "@paradicms/configuration";

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
    collection?: {title: string; uri: string};
    institution?: {name: string; uri: string};
    work?: {title: string; uri: string};
  };
  cardTitle?: React.ReactNode;
  className?: string;
  configuration: AppConfiguration;
  documentTitle?: string;
  onSearch?: (text: string) => void;
}>> = ({
  breadcrumbs,
  cardTitle,
  children,
  configuration,
  documentTitle,
  onSearch: onSearchUserDefined,
}) => {
  const classes = useStyles();
  const router = useRouter();

  const breadcrumbNodes: React.ReactNode[] = [];
  if (breadcrumbs) {
    breadcrumbNodes.push(
      <Link href={Hrefs.home} key="home">
        Home
      </Link>
    );
    const {collection, institution, work} = breadcrumbs;
    if (institution) {
      breadcrumbNodes.push(
        <Link href={Hrefs.home} key="institutions">
          Institutions
        </Link>
      );
      breadcrumbNodes.push(
        <Link
          href={Hrefs.institution(institution.uri).home}
          key={`institution-${institution.uri}`}
        >
          {institution.name}
        </Link>
      );

      if (collection) {
        breadcrumbNodes.push(
          <Link
            href={Hrefs.institution(institution.uri).home}
            key="collections"
          >
            Collections
          </Link>
        );
        breadcrumbNodes.push(
          <Link
            href={
              Hrefs.institution(institution.uri).collection(collection.uri).home
            }
            key={`collection-${collection.uri}`}
          >
            {collection.title}
          </Link>
        );
      }

      if (work) {
        if (collection) {
          breadcrumbNodes.push(
            <Link
              href={Hrefs.institution(institution.uri)
                .collection(collection.uri)
                .works()}
              key="works"
            >
              Works
            </Link>
          );
        } else {
          breadcrumbNodes.push(<span key="works">Works</span>);
        }
        breadcrumbNodes.push(
          <Link
            href={Hrefs.institution(institution.uri).work(work.uri)}
            key={`work-${work.uri}`}
          >
            {work.title}
          </Link>
        );
      }
    }
  }

  // @ts-ignore
  let onSearch: ((text: string) => void) | undefined;
  if (configuration.search) {
    if (onSearchUserDefined) {
      onSearch = onSearchUserDefined;
    } else {
      onSearch = (text: string) => {
        const href = Hrefs.search({
          filters: configuration.search!.filters,
          text,
        });
        console.info("redirecting to search href", href);
        router.push(href);
        return null;
      };
    }
  }

  let qualifiedDocumentTitle: string[] = [];
  if (configuration.documentTitle) {
    qualifiedDocumentTitle.push(configuration.documentTitle);
  }
  if (documentTitle) {
    qualifiedDocumentTitle.push(documentTitle);
  }

  return (
    <>
      <Head>
        <title>{qualifiedDocumentTitle.join(" - ")}</title>
      </Head>
      <Grid data-cy="frame" container direction="column" spacing={2}>
        <Grid item>
          <AppBar data-cy="navbar" position="static">
            <Toolbar>
              {configuration.navbarTitle ? (
                <Typography variant="h6" className={classes.brand}>
                  {configuration.navbarTitle}
                </Typography>
              ) : null}
              <Link className={classes.navLink} href={Hrefs.home}>
                Home
              </Link>
              {onSearch ? <NavbarSearchForm onSearch={onSearch} /> : null}
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
