import {License} from "@paradicms/models";

export const indexLicenseTitlesByUri = (
  licenses: readonly License[]
): {[index: string]: string} => {
  return licenses.reduce((result, license) => {
    result[license.uri] = license.title;
    return result;
  }, {} as {[index: string]: string});
};
