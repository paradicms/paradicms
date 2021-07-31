import {JoinedDataset} from "./JoinedDataset";
import {Institution} from "./Institution";
import {JoinedRights} from "./JoinedRights";
import {JoinedImage, ThumbnailSelector} from "JoinedImage";
import {JoinedCollection} from "JoinedCollection";

export class JoinedInstitution {
  constructor(private readonly institution: Institution, private readonly joinedDataset: JoinedDataset) {
  }

  get collections(): readonly JoinedCollection[] {
    return this.joinedDataset.institutionCollections(this.institution.uri);
  }

  get images(): readonly JoinedImage[] {
    return this.joinedDataset.institutionImages(this.institution.uri);
  }

  get name(): string {
    return this.institution.name;
  }

  get rights(): JoinedRights | null {
    return this.institution.rights ? new JoinedRights(this.joinedDataset, this.institution.rights) : null;
  }

  thumbnail(selector: ThumbnailSelector): JoinedImage | null {
    for (const image of this.images) {
      const thumbnail = image.thumbnail(selector);
      if (thumbnail) {
        return thumbnail;
      }
    }
    return null;
  }

  get uri() {
    return this.institution.uri;
  }
}