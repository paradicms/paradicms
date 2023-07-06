import {Point, WorkLocationRole} from "@paradicms/models";

export interface WorkLocationSummary {
  readonly label: string | null;
  readonly location: {
    readonly centroid: Point | null;
    readonly label: string | null;
  };
  readonly role: WorkLocationRole;
  readonly work: {
    readonly key: string;
    readonly label: string;
  };
}
