import {WorkEventJoinSelector} from "@paradicms/models";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";

export const workSearchWorkEventJoinSelector: WorkEventJoinSelector = {
  agents: {},
  location: true,
  thumbnail: galleryThumbnailSelector,
};
