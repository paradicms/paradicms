import {Exception} from "~/Exception";

export class NoSuchWorksheetFeatureValueDefinitionException extends Exception {
  constructor(readonly id: string) {
    super();
  }
}
