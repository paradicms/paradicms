import {Memoize} from "typescript-memoize";
import {WorkEvent} from "./WorkEvent";

export abstract class WorkDisplayDateMixin {
  @Memoize()
  get displayDate(): string | null {
    let startDisplayDate: string | undefined;
    let endDisplayDate: string | undefined;
    for (const workEvent of this.events) {
      switch (workEvent.type) {
        case "WorkCreation":
          if (!startDisplayDate && workEvent.displayDate) {
            startDisplayDate = workEvent.displayDate;
          }
          break;
      }
    }

    if (startDisplayDate && endDisplayDate) {
      return `${startDisplayDate} to ${endDisplayDate}`;
    } else if (startDisplayDate) {
      return startDisplayDate;
    } else {
      return null;
    }
  }

  abstract readonly events: readonly WorkEvent[];

  protected preMemoizeWorkDisplayDate(): void {
    this.displayDate;
  }
}
