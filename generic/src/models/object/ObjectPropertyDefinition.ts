import {ObjectPropertyDefinitionJson} from "~/graphql/types";

export type ObjectPropertyDefinition = Pick<
  ObjectPropertyDefinitionJson,
  "faceted" | "key" | "labelPlural" | "labelSingular"
>;
