import {JoinedDataset} from "./JoinedDataset";
import {Institution} from "./Institution";
import {JoinedRights} from "./JoinedRights";
import {JoinedImage} from "./JoinedImage";
import {JoinedCollection} from "./JoinedCollection";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";

export class JoinedInstitution {
  constructor(private readonly institution: Institution, private readonly joinedDataset: JoinedDataset) {
  }

  get collections(): readonly JoinedCollection[] {
    return this.joinedDataset.institutionCollections(this.institution.uri);
  }

  get name(): string {
    return this.institution.name;
  }

  get rights(): JoinedRights | null {
    return this.institution.rights ? new JoinedRights(this.joinedDataset, this.institution.rights) : null;
  }

  thumbnail(selector: ThumbnailSelector): JoinedImage | null {
    const institutionImages = this.joinedDataset.depictingImages(this.uri);
    if (institutionImages.length > 0) {
      const thumbnail = selectThumbnail(institutionImages, selector);
      if (thumbnail) {
        return thumbnail;
      }
    }

    for (const collection of this.collections) {
      const thumbnail = collection.thumbnail(selector);
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