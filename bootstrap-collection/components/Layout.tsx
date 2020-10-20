import * as React from "react";
import Helmet from "react-helmet";
import {Hrefs} from "lib/Hrefs";
import {Collection} from "@paradicms/models";
import {useState} from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Input,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Row,
} from "reactstrap";

export const Layout: React.FunctionComponent<React.PropsWithChildren<{
  collection: Collection;
  cardTitle?: React.ReactNode;
  className?: string;
  documentTitle?: string;
  onSearch?: (text: string) => void;
}>> = ({
  collection,
  cardTitle,
  children,
  documentTitle,
  onSearch: onSearchUserDefined,
}) => {
  const [navbarSearchText, setNavbarSearchText] = useState<string>("");

  // @ts-ignore
  let onSearch: (text: string) => void;
  if (onSearchUserDefined) {
    onSearch = onSearchUserDefined;
  } else {
    onSearch = (text: string) => {
      window.location.href = Hrefs.collection({
        text: text,
      }).href.toString();
    };
  }

  return (
    <>
      <Helmet
        title={collection.title + (documentTitle ? " - " + documentTitle : "")}
        meta={[
          {
            name: "description",
            content: "Paradicms union catalog",
          },
          // {name: "keywords", content: data.site!.siteMetadata!.keywords},
        ]}
      />
      <Container>
        <Row>
          <Col>
            <Navbar>
              <NavbarBrand href="/" className="mr-auto">
                {collection.title}
              </NavbarBrand>
              <Nav navbar>
                <NavItem>
                  <Form
                    className="form-inline my-2 my-lg-0"
                    onSubmit={e => {
                      e.stopPropagation();
                      onSearch(navbarSearchText);
                    }}
                  >
                    <Input
                      className="form-control mr-sm-2"
                      onChange={e => setNavbarSearchText(e.target.value)}
                      placeholder="Search"
                      type="search"
                      value={navbarSearchText}
                    />
                    <Button
                      className="btn-outline-success my-2 my-sm-0"
                      type="submit"
                    />
                  </Form>
                </NavItem>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
      {/*<Grid data-cy="frame" container direction="column" spacing={2}>*/}
      {/*  <Grid item>*/}
      {/*    <AppBar data-cy="navbar" position="static">*/}
      {/*      <Toolbar>*/}
      {/*        <Typography variant="h6" className={classes.brand}>*/}
      {/*          Paradicms*/}
      {/*        </Typography>*/}
      {/*        <Link className={classes.navLink} {...Hrefs.home}>*/}
      {/*          Home*/}
      {/*        </Link>*/}
      {/*        <NavbarSearchForm onSearch={onSearch} />*/}
      {/*      </Toolbar>*/}
      {/*    </AppBar>*/}
      {/*  </Grid>*/}
      {/*  {breadcrumbs ? (*/}
      {/*    <Grid item>*/}
      {/*      <Breadcrumbs className={classes.breadcrumbs} data-cy="breadcrumbs">*/}
      {/*        {breadcrumbNodes}*/}
      {/*      </Breadcrumbs>*/}
      {/*    </Grid>*/}
      {/*  ) : null}*/}
      {/*  <Grid item>*/}
      {/*    <Card className={classes.card}>*/}
      {/*      {cardTitle || documentTitle ? (*/}
      {/*        <CardHeader*/}
      {/*          data-cy="frame-card-header"*/}
      {/*          title={cardTitle ?? documentTitle}*/}
      {/*        />*/}
      {/*      ) : null}*/}
      {/*      <CardContent>{children}</CardContent>*/}
      {/*    </Card>*/}
      {/*  </Grid>*/}
      {/*  <Grid item>*/}
      {/*    <Footer*/}
      {/*      contactUrl="mailto:info@paradicms.org"*/}
      {/*      gitHubUrl="https://github.com/minorg/paradicms"*/}
      {/*    />*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}
    </>
  );
};
