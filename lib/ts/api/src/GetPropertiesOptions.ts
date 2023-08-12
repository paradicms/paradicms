import {PropertyJoinSelector} from "./PropertyJoinSelector";
import {GetModelsOptions} from "./GetModelsOptions";
import {PropertiesQuery} from "./PropertiesQuery";
import {Record, Static} from "runtypes";

export const GetPropertiesOptions = GetModelsOptions(
  PropertyJoinSelector,
  PropertiesQuery,
  Record({})
);

export type GetPropertiesOptions = Static<typeof GetPropertiesOptions>;
