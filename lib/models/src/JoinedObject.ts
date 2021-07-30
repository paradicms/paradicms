import {JoinedDataset} from "./JoinedDataset";
import {Object} from "./Object";
import {JoinedInstitution} from "./JoinedInstitution";
import {JoinedImage} from "./JoinedImage";
import {selectThumbnail, ThumbnailSelector} from "./selectThumbnail";

export class JoinedObject {
  constructor(private readonly joinedDataset: JoinedDataset, private readonly object: Object) {
  }

  get images(): readonly JoinedImage[] {
    return this.joinedDataset.objectImages(this.object.uri);
  }

  get institution(): JoinedInstitution {
    return this.joinedDataset.institutionByUri(this.object.institutionUri);
  }

  thumbnail(selector: ThumbnailSelector): JoinedImage | null {
    return selectThumbnail(this.images, selector);
  }

  get uri(): string {
    return this.object.uri;
  }
}