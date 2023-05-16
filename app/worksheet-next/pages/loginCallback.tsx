import * as React from "react";
import {useEffect, useState} from "react";
import {useCurrentUserService} from "~/hooks/useCurrentUserService";
import {Exception} from "~/Exception";
import {convertGapiErrorToException} from "~/services/GapiException";
import {GenericErrorHandler} from "~/components/GenericErrorHandler";
import {Hrefs} from "~/Hrefs";
import {Spinner} from "~/components/Spinner";
import {Secrets} from "~/Secrets";
import {CurrentUserSession} from "~/models/CurrentUserSession";
import {CurrentUser} from "~/models/CurrentUser";
import {UserIdentityProvider} from "~/models/UserIdentityProvider";
import {useRouter} from "next/router";
import * as queryString from "query-string";

const LoginCallbackPage: React.FunctionComponent = () => {
  const currentUserService = useCurrentUserService();
  const [error, setError] = useState<string | undefined>(undefined);
  const [exception, setException] = useState<Exception | undefined>(undefined);
  const router = useRouter();
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    currentUserService.deleteCurrentUser();

    const parsedQueryString = queryString.parse(
      window.location.hash.substring(1)
    );
    const accessToken = parsedQueryString.access_token;
    const expiresIn = parsedQueryString.expires_in;
    // const refreshToken = parsedQueryString.refresh_token;
    if (
      accessToken &&
      typeof accessToken === "string" &&
      expiresIn &&
      typeof expiresIn === "string"
    ) {
      gapi.load("client", () => {
        gapi.client.load("oauth2", "v2", () => {
          gapi.client.init({apiKey: Secrets.GOOGLE_API_KEY}).then(
            () => {
              gapi.client.setToken({access_token: accessToken});
              ((gapi.client as any).oauth2
                .userinfo as gapi.client.oauth2.UserinfoResource)
                .get({})
                .then(
                  response => {
                    const result = response.result;

                    const currentUserSession = new CurrentUserSession({
                      accessToken,
                      expiresAt: new Date(
                        new Date().getTime() +
                          parseInt(expiresIn as string, 10) * 1000
                      ),
                    });

                    const currentUser = new CurrentUser({
                      session: currentUserSession,
                      user: {
                        emailAddress: result.email as string,
                        emailAddressVerified: result.verified_email,
                        familyName: result.family_name,
                        givenName: result.given_name,
                        identityProvider: UserIdentityProvider.GOOGLE_OAUTH2,
                        identityProviderId: result.id as string,
                        locale: result.locale,
                        name: result.name,
                        pictureUrl: result.picture,
                      },
                    });

                    currentUserService.putCurrentUser(currentUser);

                    setSuccess(true);
                  },
                  reason => setException(convertGapiErrorToException(reason))
                );
            },
            reason => setException(convertGapiErrorToException(reason))
          );
        });
      });
      return;
    }

    let error = parsedQueryString.error;
    if (!error || typeof error !== "string") {
      error = "Login error";
    }
    setError(error as string);
  }, [currentUserService, router]);

  if (error || exception) {
    return <GenericErrorHandler exception={exception} error={error} />;
  } else if (success) {
    router.push(Hrefs.index);
    return null;
  } else {
    return <Spinner />;
  }
};

export default LoginCallbackPage;
