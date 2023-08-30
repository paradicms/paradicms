/**
 * A partial date-time description based on time:DateTimeDescription.
 *
 * All fields except the label are optional. This class complements RequiredDateTimeDescription.
 */
export type PartialDateTimeDescription = {
  /**
   * Day of the month, 1..31 inclusive.
   */
  readonly day: number | null;

  /**
   * Hour of the day, 0..23 inclusive
   */
  readonly hour: number | null;

  /**
   * Human-readable label to use in the user interface.
   */
  readonly label: string;

  /**
   * Minute of the day, 0..59 inclusive
   */
  readonly minute: number | null;

  /**
   * Month of the year, 1..12 inclusive
   */
  readonly month: number | null;

  /**
   * Second of the minute, 0..59 inclusive
   */
  readonly second: number | null;

  /**
   * Gregorian year e.g., 1960
   */
  readonly year: number | null;
};
