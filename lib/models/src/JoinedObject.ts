import {JoinedDataset} from "./JoinedDataset";
import {Object} from "./Object";
import {JoinedInstitution} from "./JoinedInstitution";
import {JoinedImage} from "./JoinedImage";
import {JoinedCollection} from "./JoinedCollection";
import {JoinedProperty} from "./JoinedProperty";
import {JoinedRights} from "./JoinedRights";
import {ThumbnailSelector} from "./ThumbnailSelector";

export class JoinedObject {
  constructor(private readonly joinedDataset: JoinedDataset, private readonly object: Object) {
  }

  get abstract(): string | null {
    return this.object.abstract;
  }

  get collections(): readonly JoinedCollection[] {
    return this.object.collectionUris.map(collectionUri => this.joinedDataset.collectionByUri(collectionUri));
  }

  get images(): readonly JoinedImage[] {
    return this.joinedDataset.depictingImages(this.uri);
  }

  get originalImages(): readonly JoinedImage[] {
    return this.images.filter(image => image.isOriginal);
  }

  get institution(): JoinedInstitution {
    return this.joinedDataset.institutionByUri(this.object.institutionUri);
  }

  get page(): string | null {
    return this.object.page;
  }

  get properties(): readonly JoinedProperty[] {
    if (this.object.properties === null || this.object.properties.length === 0) {
      return [];
    }
    return this.object.properties.map(property => new JoinedProperty(this.joinedDataset, property));
  }

  get rights(): JoinedRights | null {
    return this.object.rights ? new JoinedRights(this.joinedDataset, this.object.rights) : null;
  }

  thumbnail(selector: ThumbnailSelector): JoinedImage | null {
    for (const originalImage of this.originalImages) {
      const thumbnail = originalImage.thumbnail(selector);
      if (thumbnail) {
        return thumbnail;
      }
    }
    return null;
  }

  get title(): string {
    return this.object.title;
  }

  get uri(): string {
    return this.object.uri;
  }
}