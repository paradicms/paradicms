import {WorkLocationRole} from "@paradicms/models";

export interface WorkLocationSummary {
  readonly label: string | null;
  readonly location: {
    readonly latitude: number;
    readonly longitude: number;
  };
  readonly role: WorkLocationRole;
  readonly work: {
    readonly key: string;
    readonly label: string;
  };
}
