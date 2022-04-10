import {Exception} from "~/Exception";

export class NoSuchWorksheetFeatureSetDefinitionException extends Exception {
  constructor(readonly id: string) {
    super();
  }
}
