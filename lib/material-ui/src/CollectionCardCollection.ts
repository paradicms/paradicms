import {JoinedImage} from "@paradicms/models";

export interface CollectionCardCollection {
  readonly title: string;
  readonly thumbnail: JoinedImage | null;
  readonly uri: string;
}
