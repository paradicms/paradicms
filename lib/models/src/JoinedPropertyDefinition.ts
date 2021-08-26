import {JoinedDataset} from "./JoinedDataset";
import {PropertyDefinition} from "./PropertyDefinition";
import {JoinedPropertyValueDefinition} from "./JoinedPropertyValueDefinition";

export class JoinedPropertyDefinition {
  constructor(
    private readonly joinedDataset: JoinedDataset,
    private readonly propertyDefinition: PropertyDefinition
  ) {}

  get label(): string {
    return this.propertyDefinition.label;
  }

  get uri(): string {
    return this.propertyDefinition.uri;
  }

  get values(): readonly JoinedPropertyValueDefinition[] {
    return this.joinedDataset.propertyValueDefinitionsByPropertyUri(this.uri);
  }
}
