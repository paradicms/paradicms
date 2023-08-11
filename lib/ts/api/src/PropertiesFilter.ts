import {KeyFilter} from "./KeyFilter";
import {Static, Union} from "runtypes";

export const PropertiesFilter = Union(KeyFilter);
export type PropertiesFilter = Static<typeof PropertiesFilter>;
