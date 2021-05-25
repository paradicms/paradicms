import {Button, Form, Input} from "reactstrap";
import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const NavbarSearchForm: React.FunctionComponent<{
  onSearch: (text: string) => void;
}> = ({onSearch}) => {
  const [text, setText] = React.useState<string>("");

  return (
    <Form
      className="form-inline my-2 my-lg-0"
      onSubmit={e => {
        e.preventDefault();
        onSearch(text);
      }}
    >
      <Input
        className="form-control mr-sm-2"
        onChange={e => setText(e.target.value)}
        placeholder="Search"
        style={{width: "24em"}}
        type="search"
        value={text}
      />
      <Button className="btn-outline-success my-2 my-sm-0" type="submit">
        <FontAwesomeIcon icon="search" />
      </Button>
    </Form>
  );
};
