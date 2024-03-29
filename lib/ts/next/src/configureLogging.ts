import log from "loglevel";
import * as process from "process";

export const configureLogging = () => {
  if (process && process.env.NODE_ENV === "development") {
    // log.setDefaultLevel(log.levels.DEBUG);
    log.setDefaultLevel(log.levels.INFO);
  } else {
    log.setDefaultLevel(log.levels.INFO);
  }
};
