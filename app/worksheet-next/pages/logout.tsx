import React = require("react");
import {Hrefs} from "~/Hrefs";
import {useCurrentUserService} from "~/hooks/useCurrentUserService";
import {useEffect} from "react";
import {useRouter} from "next/router";

const LogoutPage: React.FunctionComponent = () => {
  const currentUserService = useCurrentUserService();
  const router = useRouter();
  useEffect(() => {
    currentUserService.deleteCurrentUser();
    router.push(Hrefs.index);
  }, [currentUserService, router]);
  return null;
};

export default LogoutPage;
