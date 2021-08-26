import {JoinedDataset} from "./JoinedDataset";
import {Property} from "./Property";
import {JoinedPropertyDefinition} from "./JoinedPropertyDefinition";
import {JoinedPropertyValue} from "./JoinedPropertyValue";

export class JoinedProperty {
  constructor(
    private readonly joinedDataset: JoinedDataset,
    private readonly property: Property
  ) {}

  get definition(): JoinedPropertyDefinition | null {
    return this.joinedDataset.propertyDefinitionByUri(this.property.uri);
  }

  get uri(): string {
    return this.property.uri;
  }

  get value(): JoinedPropertyValue {
    return new JoinedPropertyValue(this, this.property.value);
  }
}
