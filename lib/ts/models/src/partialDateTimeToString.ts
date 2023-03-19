import {PartialDateTime} from "./PartialDateTime";
import dayjs from "dayjs";

export const partialDateTimeToString = (
  partialDateTime: PartialDateTime
): string => {
  const year = partialDateTime.year;

  if (year === null) {
    return "(unknown)";
  }

  let dayjs_ = dayjs();

  // https://day.js.org/docs/en/display/format
  let dateFormat = "";
  const month = partialDateTime.month;
  if (month !== null) {
    dateFormat += "MMM";
    dayjs_ = dayjs_.month(month - 1);

    const day = partialDateTime.day;
    if (day !== null) {
      dateFormat += " D";
      dayjs_ = dayjs_.date(day);
    }
  }
  dateFormat += " YYYY";
  dayjs_ = dayjs_.year(year);

  let timeFormat: string = "";
  const hour = partialDateTime.hour;
  if (hour !== null) {
    dayjs_ = dayjs_.hour(hour);
    timeFormat += "h";

    const minute = partialDateTime.minute;
    if (minute !== null) {
      dayjs_ = dayjs_.minute(minute);
      timeFormat += ":m";

      const second = partialDateTime.second;
      if (second !== null) {
        dayjs_ = dayjs_.second(second);
        timeFormat += ":s";
      }

      timeFormat += " A";
    }
  }

  return dayjs_.format(
    timeFormat.length > 0 ? timeFormat + " " + dateFormat : dateFormat
  );
};
