import {DateTimeDescription} from "./DateTimeDescription";
import dayjs from "dayjs";

export const dateTimeDescriptionToString = (
  partialDateTime: DateTimeDescription
): string => {
  const year = partialDateTime.year;

  if (year === null) {
    return "(unknown)";
  }

  let dayjs_ = dayjs();

  // https://day.js.org/docs/en/display/format
  const dateFormat: string[] = [];
  const month = partialDateTime.month;
  if (month !== null) {
    dateFormat.push("MMM");
    dayjs_ = dayjs_.month(month - 1);

    const day = partialDateTime.day;
    if (day !== null) {
      dateFormat.push("D");
      dayjs_ = dayjs_.date(day);
    }
  }
  dateFormat.push("YYYY");
  dayjs_ = dayjs_.year(year);

  const hour = partialDateTime.hour;
  const minute = partialDateTime.minute;
  const second = partialDateTime.second;

  let timeFormat: string = "";
  if (hour !== null || minute !== null || second !== null) {
    // Data that travels through Excel doesn't support dates without times.
    // Don't include bogus times (midnight) by default.
    if (hour !== 0 || minute !== 0 || second !== 0) {
      if (hour !== null) {
        dayjs_ = dayjs_.hour(hour);
        timeFormat += "h";

        if (minute !== null) {
          dayjs_ = dayjs_.minute(minute);
          timeFormat += ":m";

          if (second !== null) {
            dayjs_ = dayjs_.second(second);
            timeFormat += ":s";
          }

          timeFormat += " A";
        }
      }
    }
  }

  return dayjs_.format(
    dateFormat.join(" ") + (timeFormat.length > 0 ? " " + timeFormat : "")
  );
};
