import {NamedModel} from "./NamedModel";
import {RDFS} from "./vocabularies";
import {Term} from "n3";
import {RDF} from "@paradicms/rdf";
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

  get propertyUris(): string | null {
    const propertyUris = this.parentNamedNodes(RDF.predicate);
    if (propertyUris.length === 0) {
      throw new RangeError(
        "property value definition must link to one or more property definitions"
      );
    }
    return propertyUris[0].value;
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return selectThumbnail(this.images, selector);
  }

  get value(): Term {
    return this.requiredTerm(RDF.value);
  }
}
