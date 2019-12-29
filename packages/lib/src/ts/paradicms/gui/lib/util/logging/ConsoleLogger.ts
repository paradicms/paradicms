import {Logger} from './Logger';

export class ConsoleLogger implements Logger {
  debug(msg: any) {
    console.debug(msg);
  }

  info(msg: any) {
    console.info(msg)
  }

  warn(msg: any) {
    console.warn(msg)
  }

  error(msg: any) {
    console.error(msg)
  }
}
