import {NamedModel} from "./NamedModel";
import {RDF, RDFS} from "./vocabularies";
import {Literal} from "n3";
import {Image} from "./Image";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";
import {Memoize} from "typescript-memoize";
import {requireDefined} from "./requireDefined";

export class NamedValue extends NamedModel {
  get images(): readonly Image[] {
    return this.dataset.imagesByDepictsUri(this.uri);
  }

  @Memoize()
  get label(): string | null {
    return (
      this.propertyObjects(RDFS.label).find(term => term.termType === "Literal")
        ?.value ?? null
    );
  }

  get propertyUris(): readonly string[] {
    const propertyUris: readonly string[] = this.propertyObjects(RDF.predicate)
      .filter(term => term.termType === "NamedNode")
      .map(term => term.value);
    if (propertyUris.length === 0) {
      throw new RangeError(
        "property value definition must link to one or more property definitions"
      );
    }
    return propertyUris;
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return selectThumbnail(this.images, selector);
  }

  get value(): Literal {
    return requireDefined(
      this.propertyObjects(RDF.value).find(term => term.termType === "Literal")
    ) as Literal;
  }
}
