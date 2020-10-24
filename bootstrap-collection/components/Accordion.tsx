import * as React from "react";
import {Card, CardBody, CardHeader, Collapse} from "reactstrap";

export const Accordion: React.FunctionComponent<React.PropsWithChildren<{
  title: string;
}>> = ({children, title}) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Card>
      <CardHeader onClick={() => setOpen(!open)}>{title}</CardHeader>
      <Collapse isOpen={open}>
        <CardBody>{children}</CardBody>
      </Collapse>
    </Card>
  );
};
