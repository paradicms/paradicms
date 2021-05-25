import * as React from "react";
import {
  fade,
  IconButton,
  InputBase,
  makeStyles,
  StyleRules,
  Theme,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) => {
  const styles: StyleRules = {
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "1em",
      transition: theme.transitions.create("width"),
      width: "100%",
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      paddingLeft: theme.spacing(2),
    },
  };
  return styles;
});

export const NavbarSearchForm: React.FunctionComponent<{
  className?: string;
  onSearch: (text: string) => void;
}> = ({className, onSearch}) => {
  const classes = useStyles();
  const [text, setText] = React.useState<string>("");

  return (
    <form
      className={classes.search}
      onSubmit={e => {
        e.preventDefault();
        onSearch(text);
      }}
      style={{display: "inline-block"}}
    >
      <InputBase
        placeholder="Search"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        data-cy="search-input"
        onChange={e => setText(e.target.value)}
        inputProps={{"aria-label": "search"}}
      />
      <IconButton data-cy="search-button" type="submit">
        <SearchIcon />
      </IconButton>
    </form>
  );
};
