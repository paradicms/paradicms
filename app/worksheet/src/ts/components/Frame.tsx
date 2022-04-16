import {Footer} from "~/components/Footer";
import {Navbar} from "~/components/Navbar";
import * as React from "react";

export const Frame: React.FunctionComponent<React.PropsWithChildren<{}>> = ({
  children,
}) => (
  <div style={{margin: "40px"}}>
    <Navbar />
    {children}
    <Footer />;
  </div>
);
