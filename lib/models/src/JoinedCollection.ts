import {JoinedDataset} from "./JoinedDataset";
import {Collection} from "./Collection";
import {JoinedInstitution} from "./JoinedInstitution";
import {JoinedImage, ThumbnailSelector} from "./JoinedImage";

export class JoinedCollection {
  constructor(private readonly collection: Collection, private readonly joinedDataset: JoinedDataset) {
  }

  get images(): readonly JoinedImage[] {
    return this.joinedDataset.collectionImages(this.collection.uri);
  }

  get institution(): JoinedInstitution {
    return this.joinedDataset.institutionByUri(this.collection.institutionUri);
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

  get title(): string {
    return this.collection.title;
  }

  get uri(): string {
    return this.collection.uri;
  }
}
