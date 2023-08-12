import {Boolean, Optional, Record, Static} from "runtypes";

export const RightsJoinSelector = Record({
  agents: Optional(Boolean),
  licenses: Optional(Boolean),
  rightsStatements: Optional(Boolean),
}).asReadonly();

export type RightsJoinSelector = Static<typeof RightsJoinSelector>;
