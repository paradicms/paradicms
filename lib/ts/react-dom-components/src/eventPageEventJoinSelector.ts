import {EventJoinSelector} from "@paradicms/models";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";

export const eventPageEventJoinSelector: EventJoinSelector = {
  agents: {
    thumbnail: galleryThumbnailSelector,
  },
  location: true,
  thumbnail: galleryThumbnailSelector,
};
