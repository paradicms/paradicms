import React = require("react");
import {Navigate} from "react-router-dom";
import {useCurrentUserService} from "~/hooks/useCurrentUserService";
import {Hrefs} from "~/Hrefs";

export const LogoutCallbackPage: React.FunctionComponent = () => {
  const currentUserService = useCurrentUserService();
  currentUserService.deleteCurrentUser();
  return <Navigate to={Hrefs.index} />;
};
