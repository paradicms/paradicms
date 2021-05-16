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
import {GuiMetadata} from "@paradicms/models";
import {useRouter} from "next/router";

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
    object?: {title: string; uri: string};
  };
  cardTitle?: React.ReactNode;
  className?: string;
  documentTitle?: string;
  guiMetadata: GuiMetadata | null;
  onSearch?: (text: string) => void;
}>> = ({
  breadcrumbs,
  cardTitle,
  children,
  documentTitle,
  guiMetadata,
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
    const {collection, institution, object} = breadcrumbs;
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

      if (object) {
        if (collection) {
          breadcrumbNodes.push(
            <Link
              href={Hrefs.institution(institution.uri)
                .collection(collection.uri)
                .objects()}
              key="objects"
            >
              Objects
            </Link>
          );
        } else {
          breadcrumbNodes.push(<span key="objects">Objects</span>);
        }
        breadcrumbNodes.push(
          <Link
            href={Hrefs.institution(institution.uri).object(object.uri)}
            key={`object-${object.uri}`}
          >
            {object.title}
          </Link>
        );
      }
    }
  }

  // @ts-ignore
  let onSearch: (text: string) => void;
  if (onSearchUserDefined) {
    onSearch = onSearchUserDefined;
  } else {
    onSearch = (text: string) => {
      const href = Hrefs.search({
        text: text,
      });
      console.info("redirecting to search href", href);
      router.push(href);
      return null;
    };
  }

  let qualifiedDocumentTitle: string[] = [];
  if (guiMetadata && guiMetadata.documentTitle) {
    qualifiedDocumentTitle.push(guiMetadata.documentTitle);
  }
  if (documentTitle) {
    qualifiedDocumentTitle.push(documentTitle);
  }

  return (
    <>
      <Helmet
        title={qualifiedDocumentTitle.join(" - ")}
        // meta={[
        //   {
        //     name: "description",
        //     content: "Paradicms union catalog",
        //   },
        //   // {name: "keywords", content: data.site!.siteMetadata!.keywords},
        // ]}
      />
      <Grid data-cy="frame" container direction="column" spacing={2}>
        <Grid item>
          <AppBar data-cy="navbar" position="static">
            <Toolbar>
              {guiMetadata?.navbarTitle ? (
                <Typography variant="h6" className={classes.brand}>
                  {guiMetadata.navbarTitle}
                </Typography>
              ) : null}
              <Link className={classes.navLink} href={Hrefs.home}>
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
