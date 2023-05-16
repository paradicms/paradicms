import * as React from "react";
import {useEffect, useState} from "react";
import {CurrentUser} from "~/models/CurrentUser";
import {useCurrentUserService} from "~/hooks/useCurrentUserService";
import {Exception} from "~/Exception";
import {UserIdentityProvider} from "~/models/UserIdentityProvider";
import {CurrentUserSession} from "~/models/CurrentUserSession";
import {convertGapiErrorToException} from "~/services/GapiException";
import {GenericErrorHandler} from "~/components/GenericErrorHandler";
import {Navigate} from "react-router-dom";
import {Hrefs} from "~/Hrefs";
import {Spinner} from "~/components/Spinner";
import {useRouter} from "next/router";

const LoginCallbackPage: React.FunctionComponent = () => {
  const currentUserService = useCurrentUserService();
  const [error, setError] = useState<string | undefined>(undefined);
  const [exception, setException] = useState<Exception | undefined>(undefined);
  const router = useRouter();
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    currentUserService.deleteCurrentUser();

    const accessToken = router.query?.access_token;
    const expiresIn = router.query?.expires_in;
    // const refreshToken = parsedQueryString.refresh_token;
    if (
      accessToken &&
      typeof accessToken === "string" &&
      expiresIn &&
      typeof expiresIn === "string"
    ) {
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
                new Date().getTime() + parseInt(expiresIn as string, 10) * 1000
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
          (reason: any) => {
            setException(convertGapiErrorToException(reason));
          }
        );
      return;
    }

    let error = router.query?.error;
    if (!error || typeof error !== "string") {
      error = "Login error";
    }
    setError(error as string);
  }, [currentUserService, router]);

  if (error || exception) {
    return <GenericErrorHandler exception={exception} error={error} />;
  } else if (success) {
    return <Navigate to={Hrefs.index} />;
  } else {
    return <Spinner />;
  }
};

export default LoginCallbackPage;
