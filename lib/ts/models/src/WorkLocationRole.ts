import {Literal, Static, Union} from "runtypes";

export const WorkLocationRole = Union(
  Literal("Current"),
  Literal("Creation"),
  Literal("Modification")
);

export type WorkLocationRole = Static<typeof WorkLocationRole>;
