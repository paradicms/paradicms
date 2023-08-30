import dayjs from "dayjs";
import {PartialDateTimeDescription} from "./PartialDateTimeDescription";

export abstract class PartialDateTimeDescriptionLabelMixin
  implements PartialDateTimeDescription {
  get label(): string {
    const year = this.year;

    if (year === null) {
      return "(unknown)";
    }

    let dayjs_ = dayjs().utc();

    // https://day.js.org/docs/en/display/format
    const dateFormat: string[] = [];
    const month = this.month;
    if (month !== null) {
      dateFormat.push("MMM");
      dayjs_ = dayjs_.month(month - 1);

      const day = this.day;
      if (day !== null) {
        dateFormat.push("D");
        dayjs_ = dayjs_.date(day);
      }
    }
    dateFormat.push("YYYY");
    dayjs_ = dayjs_.year(year);

    const hour = this.hour;
    const minute = this.minute;
    const second = this.second;

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
  }

  abstract readonly day: number | null;
  abstract readonly hour: number | null;
  abstract readonly minute: number | null;
  abstract readonly month: number | null;
  abstract readonly second: number | null;
  abstract readonly year: number | null;
}
