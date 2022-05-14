import React = require("react");
import {useNavigate} from "react-router-dom";
import {Hrefs} from "~/Hrefs";
import {useCurrentUserService} from "~/hooks/useCurrentUserService";
import {useEffect} from "react";

export const LogoutPage: React.FunctionComponent = () => {
  const currentUserService = useCurrentUserService();
  const navigate = useNavigate();
  useEffect(() => {
    currentUserService.deleteCurrentUser();
    navigate(Hrefs.logoutCallback);
  }, [currentUserService, navigate]);
  return null;
};
