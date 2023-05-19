import * as React from "react";
import {Spinner as BootstrapSpinner} from "reactstrap";

export const Spinner: React.FunctionComponent = () => (
  <BootstrapSpinner
    style={{
      bottom: 0,
      height: "10rem",
      left: 0,
      margin: "auto",
      position: "absolute",
      right: 0,
      top: 0,
      width: "10rem",
      zIndex: 1,
    }}
  />
);
