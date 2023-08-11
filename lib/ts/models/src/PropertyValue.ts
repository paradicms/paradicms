import {Image} from "./Image";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {Property} from "./Property";
import {PropertyValueType} from "./PropertyValueType";

/**
 * Abstract base class for property values.
 *
 * This is used to treat "properties" of a model similarly.
 */
export abstract class PropertyValue {
  protected constructor(readonly property: Property) {}

  abstract readonly label: string;

  thumbnail(selector: ThumbnailSelector): Image | null {
    return null;
  }

  abstract readonly type: PropertyValueType;

  abstract readonly value: string;
}
