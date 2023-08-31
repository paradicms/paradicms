import {imputePartialDateTime} from "@paradicms/models";
import {DateRangeEndpoint} from "./DateRangeEndpoint";

export const imputeDateRangeEndpoint = (
  dateRangeEndpoint: DateRangeEndpoint,
  kwds?: {ceil: boolean}
): Date | null => {
  const {year, month, day} = dateRangeEndpoint;

  return imputePartialDateTime(
    {
      year,
      month: month ?? null,
      day: day ?? null,
      hour: null,
      minute: null,
      second: null,
    },
    kwds
  );
};
