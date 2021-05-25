import * as React from "react";
import {Card, CardBody, CardHeader, Collapse} from "reactstrap";

export const Accordion: React.FunctionComponent<React.PropsWithChildren<{
  defaultOpen?: boolean;
  title: React.ReactNode;
}>> = ({children, defaultOpen, title}) => {
  const [open, setOpen] = React.useState<boolean>(!!defaultOpen);

  return (
    <Card>
      <CardHeader onClick={() => setOpen(!open)}>{title}</CardHeader>
      <Collapse isOpen={open}>
        <CardBody>{children}</CardBody>
      </Collapse>
    </Card>
  );
};
