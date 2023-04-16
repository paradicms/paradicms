import {Image} from "./Image";
import {ThumbnailSelector} from "./ThumbnailSelector";

/**
 * Abstract base class for property values.
 *
 * This is used to treat "properties" of a model similarly.
 */
export abstract class PropertyValue {
  abstract get label(): string;

  thumbnail(selector: ThumbnailSelector): Image | null {
    return null;
  }

  abstract get value(): string;
}
