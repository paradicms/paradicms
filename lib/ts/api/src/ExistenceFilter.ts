import {Boolean, Optional, Record, Static} from "runtypes";

export const ExistenceFilter = Record({
  /**
   * If true, include models that have the filtered property and exclude those that do not.
   * If false, include models that do not have the filtered property and exclude those that do.
   * If undefined, no effect / include all models.
   */
  exists: Optional(Boolean),
});

export type ExistenceFilter = Static<typeof ExistenceFilter>;
