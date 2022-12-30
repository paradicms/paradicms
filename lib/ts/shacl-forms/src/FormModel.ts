import {FormModelSummary} from "./FormModelSummary";

export abstract class FormModel {
  abstract readonly id: string;
  abstract readonly label: string;

  get summary(): FormModelSummary {
    return {
      id: this.id,
      label: this.label,
    };
  }
}
