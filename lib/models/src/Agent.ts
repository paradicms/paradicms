import {NamedModel} from "./NamedModel";
import {FOAF} from "./vocabularies";
import {Image} from "./Image";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";

export class Agent extends NamedModel {
  get images(): readonly Image[] {
    return this.dataset.imagesByDepictsUri(this.uri);
  }

  get name(): string {
    return this.requiredString(FOAF.name_);
  }

  get originalImages(): readonly Image[] {
    return this.images.filter(image => image.isOriginal);
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return selectThumbnail(this.images, selector);
  }

  toString() {
    return this.name;
  }
}
