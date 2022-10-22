import {WorkLocationRole} from "@paradicms/models";

export interface WorkLocationSummary {
  readonly location: {
    readonly lat: number;
    readonly long: number;
  };
  readonly role: WorkLocationRole;
  readonly title: string | null;
  readonly work: {
    readonly title: string;
    readonly uri: string;
  };
}
