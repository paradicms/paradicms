import * as React from "react";
import {useState} from "react";
import {AppBar, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {NavbarSearchForm} from "@paradicms/gatsby-material-ui";
import {Hrefs} from "~/Hrefs";
import {Link} from "gatsby";

const useStyles = makeStyles(theme => ({
  brand: {
    marginRight: theme.spacing(4),
  },
  navLink: {
    color: "white",
    fontSize: "larger",
    marginRight: theme.spacing(4),
    textDecoration: "none",
  },
}));

export const Navbar: React.FunctionComponent<{
  onSearch?: (text: string) => void;
}> = ({onSearch: onSearchUserDefined}) => {
  const [state, setState] = useState<{redirectToSearchText: string | null}>({
    redirectToSearchText: null,
  });

  const classes = useStyles();

  // @ts-ignore
  let onSearch: (text: string) => void;
  if (onSearchUserDefined) {
    onSearch = onSearchUserDefined;
  } else {
    onSearch = (text: string) =>
      setState(prevState =>
        Object.assign({}, prevState, {redirectToSearchText: text})
      );

    if (state.redirectToSearchText) {
      window.location.href = Hrefs.search({text: state.redirectToSearchText});
    }
  }

  return (
    <AppBar data-cy="navbar" position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.brand}>
          Paradicms
        </Typography>
        <Link to={Hrefs.home} className={classes.navLink}>
          Home
        </Link>
        <NavbarSearchForm onSearch={onSearch} />
      </Toolbar>
    </AppBar>
  );
};
