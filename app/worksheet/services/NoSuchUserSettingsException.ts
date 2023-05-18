import {Exception} from "~/Exception";

export class NoSuchUserSettingsException extends Exception {
  constructor(readonly id?: string) {
    super();
  }
}
