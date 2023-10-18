import {Static, Union} from "runtypes";
import {IriFilter} from "./IriFilter";

export const PropertiesFilter = Union(IriFilter);

export type PropertiesFilter = Static<typeof PropertiesFilter>;
