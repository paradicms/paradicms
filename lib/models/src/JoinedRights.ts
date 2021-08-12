import {JoinedDataset} from "./JoinedDataset";
import {Rights} from "./Rights";
import {
  PropertyValue,
  StringPropertyValue,
  UriPropertyValue,
} from "./PropertyValue";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";

export class JoinedRights {
  constructor(
    private readonly joinedDataset: JoinedDataset,
    private readonly rights: Rights
  ) {}

  get creator(): PropertyValue | null {
    return this.rights.creator;
  }

  get holder(): PropertyValue | null {
    return this.rights.holder;
  }

  get license(): License | string | null {
    if (!this.rights.license) {
      return null;
    }
    switch (this.rights.license.type) {
      case "string":
        return (this.rights.statement as StringPropertyValue).value;
      case "uri":
        return this.joinedDataset.licenseByUri(
          (this.rights.statement as UriPropertyValue).value
        );
      default:
        return null;
    }
  }

  get statement(): RightsStatement | string | null {
    if (!this.rights.statement) {
      return null;
    }
    switch (this.rights.statement.type) {
      case "string":
        return (this.rights.statement as StringPropertyValue).value;
      case "uri":
        return this.joinedDataset.rightsStatementByUri(
          (this.rights.statement as UriPropertyValue).value
        );
      default:
        return null;
    }
  }
}
