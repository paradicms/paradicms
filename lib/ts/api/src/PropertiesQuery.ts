import {Array, Optional, Record, Static} from "runtypes";
import {PropertiesFilter} from "./PropertiesFilter";

export const PropertiesQuery = Record({
  filters: Optional(Array(PropertiesFilter)),
});
export type PropertiesQuery = Static<typeof PropertiesQuery>;
