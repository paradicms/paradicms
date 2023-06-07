import {WorksheetFeatureValueDefinition} from "~/models/WorksheetFeatureValueDefinition";
import {WorksheetFeatureValueState} from "~/models/WorksheetFeatureValueState";

export class WorksheetFeatureValue {
  readonly definition: WorksheetFeatureValueDefinition;
  selected: boolean;

  constructor(kwds: {
    definition: WorksheetFeatureValueDefinition;
    initialState?: WorksheetFeatureValueState;
  }) {
    this.definition = kwds.definition;
    this.selected = !!kwds.initialState?.selected;
  }

  get iri(): string {
    return this.definition.iri;
  }

  select(): void {
    this.selected = true;
  }

  get state(): WorksheetFeatureValueState | undefined {
    return this.selected
      ? {selected: this.selected, uri: this.definition.iri}
      : undefined;
  }

  unselect(): void {
    this.selected = false;
  }
}
