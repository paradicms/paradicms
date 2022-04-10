import {Exception} from "~/Exception";

export class NoSuchWorksheetFeatureDefinitionException extends Exception {
  constructor(readonly id: string) {
    super();
  }
}
