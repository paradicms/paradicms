import {WorkLocationRole} from "@paradicms/models";

export interface WorkLocationSummary {
  readonly label: string | null;
  readonly location: {
    readonly lat: number;
    readonly long: number;
  };
  readonly role: WorkLocationRole;
  readonly work: {
    readonly key: string;
    readonly label: string;
  };
}
