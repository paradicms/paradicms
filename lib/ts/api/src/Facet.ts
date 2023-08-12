import {Record, Static} from "runtypes";

export const Facet = Record({}).asReadonly();

export type Facet = Static<typeof Facet>;
