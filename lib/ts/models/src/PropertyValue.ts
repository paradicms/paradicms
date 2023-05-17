import {Image} from "./Image";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {Property} from "./Property";

/**
 * Abstract base class for property values.
 *
 * This is used to treat "properties" of a model similarly.
 */
export abstract class PropertyValue {
  protected constructor(readonly property: Property) {}

  abstract get label(): string;

  thumbnail(selector: ThumbnailSelector): Image | null {
    return null;
  }

  abstract get value(): string;
}
