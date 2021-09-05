import {NamedModel} from "./NamedModel";
import {RDF, RDFS} from "./vocabularies";
import {Term} from "n3";
import {Image} from "./Image";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";

export class PropertyValueDefinition extends NamedModel {
  get images(): readonly Image[] {
    return this.dataset.imagesByDepictsUri(this.uri);
  }

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

  get value(): Term {
    return this.requiredTerm(RDF.value);
  }
}
