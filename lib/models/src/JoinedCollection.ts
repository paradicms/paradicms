import {JoinedDataset} from "./JoinedDataset";
import {Collection} from "./Collection";
import {JoinedInstitution} from "./JoinedInstitution";
import {JoinedImage} from "./JoinedImage";

export class JoinedCollection {
  constructor(private readonly collection: Collection, private readonly joinedDataset: JoinedDataset) {
  }

  get images(): readonly JoinedImage[] {
    return this.joinedDataset.collectionImages(this.collection.uri);
  }

  get institution(): JoinedInstitution {
    return this.joinedDataset.institutionByUri(this.collection.institutionUri);
  }

  get uri(): string {
    return this.collection.uri;
  }
}
