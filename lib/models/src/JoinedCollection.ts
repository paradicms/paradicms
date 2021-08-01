import {JoinedDataset} from "./JoinedDataset";
import {Collection} from "./Collection";
import {JoinedInstitution} from "./JoinedInstitution";
import {JoinedImage} from "./JoinedImage";
import {selectThumbnail} from "./selectThumbnail";
import {JoinedObject} from "./JoinedObject";
import {ThumbnailSelector} from "./ThumbnailSelector";

export class JoinedCollection {
  constructor(private readonly collection: Collection, private readonly joinedDataset: JoinedDataset) {
  }

  get institution(): JoinedInstitution {
    return this.joinedDataset.institutionByUri(this.collection.institutionUri);
  }

  get objects(): readonly JoinedObject[] {
    return this.joinedDataset.collectionObjects(this.uri);
  }

  thumbnail(selector: ThumbnailSelector): JoinedImage | null {
    const collectionImages = this.joinedDataset.depictingImages(this.uri);
    if (collectionImages.length > 0) {
      const thumbnail = selectThumbnail(collectionImages, selector);
      if (thumbnail) {
        return thumbnail;
      }
    }

    for (const object of this.objects) {
      const thumbnail = object.thumbnail(selector);
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
