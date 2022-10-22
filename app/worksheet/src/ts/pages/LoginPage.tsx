import * as React from "react";
import {useEffect} from "react";
import * as queryString from "query-string";
import {Secrets} from "~/Secrets";
import {Hrefs} from "~/Hrefs";

export const LoginPage: React.FunctionComponent = () => {
  useEffect(() => {
    const query = queryString.stringify({
      // access_type: "offline",
      client_id: Secrets.GOOGLE_CLIENT_ID,
      redirect_uri:
        window.location.protocol +
        "//" +
        window.location.host +
        Hrefs.loginCallback,
      response_type: "token",
      scope: "email openid profile https://www.googleapis.com/auth/drive.file",
    });

    const url = "https://accounts.google.com/o/oauth2/v2/auth?" + query;

    window.location.replace(url);
  }, []);

  return <div></div>;
};
