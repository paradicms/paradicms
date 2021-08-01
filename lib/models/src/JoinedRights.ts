import {JoinedDataset} from "./JoinedDataset";
import {Rights} from "./Rights";
import {Value} from "./Value";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";

export class JoinedRights {
  constructor(private readonly joinedDataset: JoinedDataset, private readonly rights: Rights) {
  }

  get creator(): Value | null {
    return this.rights.creator;
  }

  get holder(): Value | null {
    return this.rights.holder;
  }

  get license(): License | string | null {
    if (!this.rights.license) {
      return null;
    }
    switch (this.rights.license.type) {
      case "text":
        return this.rights.license.value;
      case "uri":
        return this.joinedDataset.licenseByUri(this.rights.license.value);
    }
  }

  get statement(): RightsStatement | string | null {
    if (!this.rights.statement) {
      return null;
    }
    switch (this.rights.statement.type) {
      case "text":
        return this.rights.statement.value;
      case "uri":
        return this.joinedDataset.rightsStatementByUri(this.rights.statement.value);
    }
  }
}
