import {ImagesMixin} from "../ImagesMixin";
import {Image} from "../Image";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {selectThumbnail} from "../selectThumbnail";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {schema} from "@paradicms/vocabularies";
import {Text} from "../Text";
import {mapTermToImage} from "../mapTermToImage";
import {mapTermToText} from "../mapTermToText";
import {Memoize} from "typescript-memoize";
import {mapTermToString} from "@paradicms/rdf";

export abstract class SchemaThingMixin extends ResourceBackedModelMixin
  implements ImagesMixin {
  @Memoize()
  get alternateNames(): readonly string[] {
    return this.filterAndMapObjects(schema.alternateName, mapTermToString);
  }

  @Memoize()
  get description(): Text | null {
    return this.findAndMapObject(schema.description, term =>
      mapTermToText(this, term)
    );
  }

  @Memoize()
  get images(): readonly Image[] {
    return this.filterAndMapObjects(schema.image, term =>
      mapTermToImage(this, term)
    );
  }

  get label(): string | null {
    return this.name;
  }

  @Memoize()
  get name(): string | null {
    return this.findAndMapObject(schema.name, mapTermToString);
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return selectThumbnail(this.images, selector);
  }

  @Memoize()
  get url(): string | null {
    return this.findAndMapObject(schema.url, term =>
      term.termType === "NamedNode" ? term.value : null
    );
  }
}
