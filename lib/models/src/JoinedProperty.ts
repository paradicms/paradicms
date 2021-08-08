import {JoinedDataset} from "./JoinedDataset";
import {Property} from "./Property";
import {PropertyDefinition} from "./PropertyDefinition";
import {PrimitiveValue} from "./PrimitiveValue";

export class JoinedProperty {
  constructor(
    private readonly joinedDataset: JoinedDataset,
    private readonly property: Property
  ) {}

  get definition(): PropertyDefinition | null {
    return this.joinedDataset.propertyDefinitionByUri(this.property.uri);
  }

  get uri(): string {
    return this.property.uri;
  }

  get value(): PrimitiveValue {
    return this.property.value;
  }
}
