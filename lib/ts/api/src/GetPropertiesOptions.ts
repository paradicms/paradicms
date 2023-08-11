import {PropertyJoinSelector} from "@paradicms/models";
import {GetModelsOptions} from "./GetModelsOptions";
import {PropertiesQuery} from "./PropertiesQuery";

export type GetPropertiesOptions = GetModelsOptions<
  PropertyJoinSelector,
  PropertiesQuery,
  {}
>;
