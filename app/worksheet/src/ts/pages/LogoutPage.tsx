import React = require("react");
import {Navigate} from "react-router-dom";
import {Hrefs} from "~/Hrefs";

export const LogoutPage: React.FunctionComponent = () => (
  <Navigate to={Hrefs.logoutCallback} />
);
