import {PropertyDefinitionJson} from "~/graphql/types";

export type PropertyDefinition = Pick<
  PropertyDefinitionJson,
  "faceted" | "key" | "labelPlural" | "labelSingular"
>;
