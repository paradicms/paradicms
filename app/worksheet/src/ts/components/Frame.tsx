import {Navbar} from "~/components/Navbar";
import * as React from "react";

export const Frame: React.FunctionComponent<React.PropsWithChildren<{}>> = ({
  children,
}) => (
  <div className="mx-2 pt-2">
    <Navbar />
    {children}
  </div>
);
