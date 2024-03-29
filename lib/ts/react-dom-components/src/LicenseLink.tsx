import {License} from "@paradicms/models";
import * as React from "react";

export const LicenseLink: React.FunctionComponent<{
  license: License | null;
}> = ({license}) => {
  if (!license) {
    return null;
  }
  if (
    license.iri.value.startsWith("http://") ||
    license.iri.value.startsWith("https://")
  ) {
    return <a href={license.iri.value}>{license.label}</a>;
  } else {
    return <span>{license.label}</span>;
  }
};
