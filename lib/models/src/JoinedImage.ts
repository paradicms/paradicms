import {ImageDimensions} from "./ImageDimensions";
import {JoinedRights} from "./JoinedRights";
import {JoinedDataset} from "./JoinedDataset";
import {JoinedInstitution} from "./JoinedInstitution";
import {Image} from "./Image";
import {placeholderImageUrl} from "@paradicms/model-utils";

export class JoinedImage {
  constructor(private readonly joinedDataset: JoinedDataset, private readonly image: Image) {
  }

  get depicts(): Object {
    return this.joinedDataset.objectByUri(this.image.depictsUri);
  }

  get exactDimensions(): ImageDimensions | null {
    return this.image.exactDimensions;
  }

  get institution(): JoinedInstitution {
    return this.joinedDataset.institutionByUri(this.image.institutionUri);
  }

  get maxDimensions(): ImageDimensions | null {
    return this.image.maxDimensions;
  }

  get originalImage(): JoinedImage | null {
    return this.image.originalImageUri ? this.joinedDataset.imageByUri(this.image.originalImageUri) : null;
  }

  get originalImageUri(): string | null {
    return this.image.originalImageUri;
  }

  get rights(): JoinedRights | null {
    return this.image.rights ? new JoinedRights(this.joinedDataset, this.image.rights) : null;
  }

  src(targetDimensions: ImageDimensions): string {
    if (this.image.src) {
      return this.image.src;
    } else if (this.image.uri.startsWith("http://") || this.image.uri.startsWith("https://")) {
      return this.image.uri;
    }

    return placeholderImageUrl({
      dimensions: targetDimensions,
      text: "Missing image",
    });
  }

  get uri(): string {
    return this.image.uri;
  }
}
