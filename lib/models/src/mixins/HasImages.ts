import {Image} from "../Image";
import {Dataset} from "../Dataset";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {selectThumbnail} from "../selectThumbnail";

export abstract class HasImages {
  protected abstract readonly dataset: Dataset;
  protected abstract readonly uri: string;

  get images(): readonly Image[] {
    return this.dataset.imagesByDepictsUri(this.uri);
  }

  get originalImages(): readonly Image[] {
    return this.images.filter(image => image.isOriginal);
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return selectThumbnail(this.images, selector);
  }
}
