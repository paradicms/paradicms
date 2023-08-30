import {DateRangeEndpoint} from "@paradicms/api";
import {imputePartialDateTime} from "@paradicms/models";

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
