import {License} from "@paradicms/models";
import * as React from "react";

export const LicenseLink: React.FunctionComponent<{
  license: License | null;
}> = ({license}) => {
  if (!license) {
    return null;
  }
  if (!license.iri) {
    return <span>{license.label}</span>;
  }
  return <a href={license.iri}>{license.label}</a>;
};
