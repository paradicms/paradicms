import * as React from "react";

export const Headline: React.FunctionComponent<React.PropsWithChildren<{}>> = ({
  children,
}) => <h4 className="mt-2 pb-2 pl-4 pt-2 text-center">{children}</h4>;
