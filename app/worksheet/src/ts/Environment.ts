declare var DEVELOPMENT: boolean;
declare var PRODUCTION: boolean;

export class Environment {
  static get development() {
    return DEVELOPMENT;
  }

  static get hosted(): boolean {
    return window.location.protocol.startsWith("http");
  }

  static get production() {
    return PRODUCTION;
  }

  static get supportsLogin(): boolean {
    return false;
    // return (
    //   window.location.hostname.endsWith("dressdiscover.org") ||
    //   window.location.host === "localhost:3000"
    // );
  }
}
