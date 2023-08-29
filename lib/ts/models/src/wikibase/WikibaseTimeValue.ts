import {mapTermToNumber} from "@paradicms/rdf";
import {requireNonNull} from "@paradicms/utilities";
import {wikibase, xsd} from "@paradicms/vocabularies";
import dayjs from "dayjs";
import invariant from "ts-invariant";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {PartialDateTimeDescription} from "../PartialDateTimeDescription";
import {ResourceBackedModel} from "../ResourceBackedModel";

import dayjsPluginTimezone from "dayjs/plugin/timezone";
import dayjsPluginUtc from "dayjs/plugin/utc";
import {PartialDateTimeDescriptionLabelMixin} from "../PartialDateTimeDescriptionLabelMixin";

dayjs.extend(dayjsPluginUtc);
dayjs.extend(dayjsPluginTimezone);

export class WikibaseTimeValue
  extends Mixin(ResourceBackedModel, PartialDateTimeDescriptionLabelMixin)
  implements PartialDateTimeDescription {
  get day(): number | null {
    return this.timePrecision >= 11 ? this.timeValue.date() : null;
  }

  get hour(): number | null {
    return this.timePrecision >= 12 ? this.timeValue.hour() : null;
  }

  get minute(): number | null {
    return this.timePrecision >= 13 ? this.timeValue.minute() : null;
  }

  get month(): number | null {
    return this.timePrecision >= 10 ? this.timeValue.month() : null;
  }

  get second(): number | null {
    return this.timePrecision >= 14 ? this.timeValue.second() : null;
  }

  get year(): number | null {
    return this.timePrecision >= 9 ? this.timeValue.year() : null;
  }

  @Memoize()
  private get timePrecision(): number {
    // Per https://en.wikibooks.org/wiki/SPARQL/WIKIDATA_Precision,_Units_and_Coordinates
    // The codes for precision are
    // 0: billion years,
    // 1: hundred million years,
    // 3: million years,
    // 4: hundred thousand years,
    // 5: ten thousand years,
    // 6: millennium,
    // 7: century,
    // 8: decade,
    // 9: year,
    // 10: month,
    // 11: day,
    // 12: hour,
    // 13: minute,
    // 14: second.
    return requireNonNull(
      this.findAndMapObject(wikibase.timePrecision, mapTermToNumber)
    );
  }

  @Memoize()
  private get timeTimezone(): number {
    // Timezone as an offset from UTC in minutes
    return requireNonNull(
      this.findAndMapObject(wikibase.timeTimezone, mapTermToNumber)
    );
  }

  @Memoize()
  private get timeValue(): dayjs.Dayjs {
    return requireNonNull(
      this.findAndMapObject(wikibase.timeValue, term => {
        invariant(term.termType === "Literal");
        invariant(term.datatype.equals(xsd.dateTime));
        invariant(this.timeTimezone === 0);
        const timeValue = dayjs.utc(term.value);
        return timeValue;
      })
    );
  }
}
