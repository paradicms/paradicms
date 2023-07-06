import * as process from "process";
import log from "loglevel";

export const configureLogging = () => {
  if (process && process.env.NODE_ENV === "development") {
    log.setDefaultLevel(log.levels.DEBUG);
  } else {
    log.setDefaultLevel(log.levels.INFO);
  }
};
