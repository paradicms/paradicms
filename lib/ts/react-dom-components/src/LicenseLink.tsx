import {License} from "@paradicms/models";
import * as React from "react";

export const LicenseLink: React.FunctionComponent<{
  license: string | License | null;
}> = ({license}) => {
  if (!license) {
    return null;
  }
  if (typeof license === "string") {
    return <span>{license as string}</span>;
  }
  const licenseModel = license as License;
  return <a href={licenseModel.uri}>{licenseModel.label}</a>;
};
