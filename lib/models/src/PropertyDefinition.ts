import {NamedModel} from "./NamedModel";
import {RDFS} from "./vocabularies";
import {PropertyValueDefinition} from "./PropertyValueDefinition";

export class PropertyDefinition extends NamedModel {
  get label() {
    return this.requiredString(RDFS.label);
  }

  get values(): readonly PropertyValueDefinition[] {
    return this.dataset.propertyValueDefinitionsByPropertyUri(this.uri);
  }
}
