import {JoinedDataset} from "./JoinedDataset";
import {Property} from "./Property";
import {PropertyDefinition} from "./PropertyDefinition";
import {PrimitiveType} from "./PrimitiveType";

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

  get value(): PrimitiveType {
    return this.property.value;
  }
}
