import {License} from "@paradicms/models";
import * as React from "react";

export const LicenseLink: React.FunctionComponent<{
  license: License | null;
}> = ({license}) => {
  if (!license) {
    return null;
  }
  if (license.iris.length !== 1) {
    return <span>{license.label}</span>;
  }
  return <a href={license.iris[0]}>{license.label}</a>;
};
