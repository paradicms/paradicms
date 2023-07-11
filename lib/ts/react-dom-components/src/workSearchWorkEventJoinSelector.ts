import {EventJoinSelector} from "@paradicms/models";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";

export const workSearchWorkEventJoinSelector: EventJoinSelector = {
  agents: {},
  location: true,
  thumbnail: galleryThumbnailSelector,
};
