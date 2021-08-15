import {PropertyValue, propertyValueEquals} from "./PropertyValue";
import {PrimitiveType} from "./PrimitiveType";
import {JoinedProperty} from "./JoinedProperty";
import {JoinedPropertyValueDefinition} from "./JoinedPropertyValueDefinition";

export class JoinedPropertyValue {
  constructor(
    private readonly joinedProperty: JoinedProperty,
    private readonly propertyValue: PropertyValue
  ) {}

  get definition(): JoinedPropertyValueDefinition | null {
    const propertyDefinition = this.joinedProperty.definition;
    if (!propertyDefinition) {
      return null;
    }
    for (const propertyValueDefinition of propertyDefinition.values) {
      if (propertyValueEquals(propertyValueDefinition.value, this)) {
        return propertyValueDefinition;
      }
    }
    return null;
  }

  get type() {
    return this.propertyValue.type;
  }

  get value(): PrimitiveType {
    return this.propertyValue.value;
  }
}
