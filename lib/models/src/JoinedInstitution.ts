import {JoinedDataset} from "./JoinedDataset";
import {Institution} from "./Institution";
import {JoinedRights} from "./JoinedRights";

export class JoinedInstitution {
  constructor(private readonly institution: Institution, private readonly joinedDataset: JoinedDataset) {
  }

  get name(): string {
    return this.institution.name;
  }

  get rights(): JoinedRights | null {
    return this.institution.rights ? new JoinedRights(this.joinedDataset, this.institution.rights) : null;
  }

  get uri() {
    return this.institution.uri;
  }
}