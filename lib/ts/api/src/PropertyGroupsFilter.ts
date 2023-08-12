import {Static, Union} from "runtypes";
import {KeyFilter} from "./KeyFilter";

export const PropertyGroupsFilter = Union(KeyFilter);

export type PropertyGroupsFilter = Static<typeof PropertyGroupsFilter>;
