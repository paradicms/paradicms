import * as React from "react";
import {JoinedValue} from "@paradicms/models";

export const JoinedValueLink: React.FunctionComponent<{value: JoinedValue}> = ({
                                                                                 value,
                                                                               }) => {
  const {text, uri} = value;
  if (uri) {
    return <a href={uri}>{text}</a>;
  } else {
    return <span>{text}</span>;
  }
};
