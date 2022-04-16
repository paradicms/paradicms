import {AuthorizationException} from "~/services/AuthorizationException";
import {AuthorizationExceptionModal} from "~/components/AuthorizationExceptionModal";
import {FatalErrorModal} from "~/components/FatalErrorModal";
import * as React from "react";
import {Exception} from "~/Exception";

export const GenericErrorHandler: React.FunctionComponent<{
  error?: any;
  exception?: Exception;
}> = ({error, exception}) => {
  if (error) {
    return <FatalErrorModal error={error} />;
  } else if (exception) {
    if (exception instanceof AuthorizationException) {
      return <AuthorizationExceptionModal exception={exception} />;
    }

    return <FatalErrorModal exception={exception} />;
  } else {
    throw new RangeError();
  }
};
