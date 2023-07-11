import {Image, ThumbnailSelector} from "@paradicms/models";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export interface EventsTimelineEvent {
  readonly displayDate: string | null;
  readonly icon?: IconDefinition;
  readonly key: string;
  readonly label: string;
  thumbnail(selector: ThumbnailSelector): Image | null;
}
