import {NamedModel} from "./NamedModel";
import {RDF, RDFS} from "./vocabularies";
import {Literal} from "n3";
import {Image} from "./Image";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";
import {Memoize} from "typescript-memoize";

export class NamedValue extends NamedModel {
  get images(): readonly Image[] {
    return this.dataset.imagesByDepictsUri(this.uri);
  }

  @Memoize()
  get label(): string | null {
    return this.optionalString(RDFS.label);
  }

  get propertyUris(): readonly string[] {
    const propertyNamedNodes = this.parentNamedNodes(RDF.predicate);
    if (propertyNamedNodes.length === 0) {
      throw new RangeError(
        "property value definition must link to one or more property definitions"
      );
    }
    return propertyNamedNodes.map(node => node.value);
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return selectThumbnail(this.images, selector);
  }

  get value(): Literal {
    return this.requiredLiteral(RDF.value);
  }
}
