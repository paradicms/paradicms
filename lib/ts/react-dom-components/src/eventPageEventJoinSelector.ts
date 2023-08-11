import {EventJoinSelector} from "@paradicms/api";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";

export const eventPageEventJoinSelector: EventJoinSelector = {
  agents: {
    thumbnail: galleryThumbnailSelector,
  },
  location: true,
  thumbnail: galleryThumbnailSelector,
};
