import {Button, Col, Form, Input, InputGroup} from "reactstrap";
import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export const NavbarSearchForm: React.FunctionComponent<{
  onSearch: (text: string) => void;
}> = ({onSearch}) => {
  const [text, setText] = React.useState<string>("");

  return (
    <Form
      className="row my-2 my-lg-0"
      onSubmit={e => {
        e.preventDefault();
        onSearch(text);
      }}
    >
      <Col>
        <InputGroup>
          <Input
            className="form-control"
            onChange={e => setText(e.target.value)}
            placeholder="Search"
            style={{width: "24em"}}
            type="search"
            value={text}
          />
          <Button className="btn-outline-success my-2 my-sm-0" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup>
      </Col>
    </Form>
  );
};
