import {Static, Union} from "runtypes";
import {IriFilter} from "./IriFilter";

export const PropertyGroupsFilter = Union(IriFilter);

export type PropertyGroupsFilter = Static<typeof PropertyGroupsFilter>;
