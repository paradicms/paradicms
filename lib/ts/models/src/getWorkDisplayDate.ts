import {Work} from "./Work";

export const getWorkDisplayDate = (work: Work): string | null => {
  let startDisplayDate: string | undefined;
  let endDisplayDate: string | undefined;
  for (const workEvent of work.events) {
    switch (workEvent.type) {
      case "WorkClosing":
        if (!endDisplayDate && workEvent.displayDate) {
          endDisplayDate = workEvent.displayDate;
        }
        break;
      case "WorkCreation":
        if (!startDisplayDate && workEvent.displayDate) {
          startDisplayDate = workEvent.displayDate;
        }
        break;
      case "WorkOpening":
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
};
