import {ThumbnailSelector} from "./ThumbnailSelector";
import {Image} from "./Image";

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

  toString() {
    throw new EvalError("use .value, not .toString()");
  }

  abstract get value(): string;
}
