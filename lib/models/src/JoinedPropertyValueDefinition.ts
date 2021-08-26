import {JoinedDataset} from "./JoinedDataset";
import {PropertyValueDefinition} from "./PropertyValueDefinition";
import {JoinedImage} from "./JoinedImage";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";
import {PropertyValue} from "./PropertyValue";

export class JoinedPropertyValueDefinition {
  constructor(
    private readonly joinedDataset: JoinedDataset,
    private readonly propertyValueDefinition: PropertyValueDefinition
  ) {}

  get images(): readonly JoinedImage[] {
    return this.joinedDataset.imagesByDepictsUri(
      this.propertyValueDefinition.uri
    );
  }

  get label(): string | null {
    return this.propertyValueDefinition.label;
  }

  thumbnail(selector: ThumbnailSelector): JoinedImage | null {
    return selectThumbnail(this.images, selector);
  }

  get value(): PropertyValue {
    // This returns PropertyValue and not JoinedPropertyValue, since the latter is designed for use by JoinedProperty.
    return this.propertyValueDefinition.value;
  }
}
