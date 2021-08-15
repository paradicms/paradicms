// Discriminated union that captures an RDF literal or an RDF named node
import {PrimitiveType} from "./PrimitiveType";

export interface PropertyValue {
  readonly type: "boolean" | "number" | "string" | "uri";
  readonly value: PrimitiveType;
}

export interface BooleanPropertyValue extends PropertyValue {
  readonly type: "boolean";
  readonly value: boolean;
}

export interface NumberPropertyValue extends PropertyValue {
  readonly type: "number";
  readonly value: number;
}

export interface StringPropertyValue extends PropertyValue {
  readonly type: "string";
  readonly value: string;
}

export interface UriPropertyValue extends PropertyValue {
  readonly type: "uri";
  readonly value: string;
}

export const propertyValueEquals = (
  left: PropertyValue,
  right: PropertyValue
) => {
  return left.type === right.type && left.value === right.value;
};
