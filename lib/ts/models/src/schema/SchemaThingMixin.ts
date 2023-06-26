import {ImagesMixin} from "../ImagesMixin";
import {Image} from "../Image";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {schema} from "@paradicms/vocabularies";
import {Text} from "../Text";
import {mapTermToImage} from "../mapTermToImage";
import {mapTermToText} from "../mapTermToText";
import {Memoize} from "typescript-memoize";
import {mapTermToString} from "@paradicms/rdf";
import {ModelIdentifier} from "../ModelIdentifier";
import {isWikipediaUrl} from "../isWikipediaUrl";
import {isWikidataConceptIri} from "../isWikidataConceptIri";

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

  get page(): string | null {
    return this.url;
  }

  @Memoize()
  get sameAsIdentifiers(): readonly ModelIdentifier[] {
    return this.filterAndMapObjects(schema.sameAs, term => {
      switch (term.termType) {
        case "BlankNode":
        case "NamedNode":
          return term as ModelIdentifier;
        default:
          return null;
      }
    });
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    for (const image of this.images) {
      const thumbnail = image.thumbnail(selector);
      if (thumbnail) {
        return thumbnail;
      }
    }
    return null;
  }

  @Memoize()
  get url(): string | null {
    return this.findAndMapObject(schema.url, term =>
      term.termType === "NamedNode" ? term.value : null
    );
  }

  @Memoize()
  get wikipediaUrl(): string | null {
    return this.findAndMapObject(schema.sameAs, term =>
      term.termType === "NamedNode" && isWikipediaUrl(term.value)
        ? term.value
        : null
    );
  }

  @Memoize()
  get wikidataConceptIri(): string | null {
    return this.findAndMapObject(schema.sameAs, term =>
      term.termType === "NamedNode" && isWikidataConceptIri(term.value)
        ? term.value
        : null
    );
  }
}
