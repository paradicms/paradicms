import {dcterms, rdfs} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {Property} from "../Property";
import {PropertyGroup} from "../PropertyGroup";
import {FoafImagesMixin} from "../foaf/FoafImagesMixin";
import {Text} from "../Text";
import {mapTermToText} from "../mapTermToText";
import {requireNonNull} from "@paradicms/utilities";
import {mapTermToString} from "@paradicms/rdf";
import {SomeImageThumbnailMixin} from "../SomeImageThumbnailMixin";
import {ResourceBackedModel} from "../ResourceBackedModel";

export class CmsPropertyGroup
  extends Mixin(ResourceBackedModel, FoafImagesMixin, SomeImageThumbnailMixin)
  implements PropertyGroup {
  @Memoize()
  get comment(): Text | null {
    return this.findAndMapObject(rdfs.comment, term =>
      mapTermToText(this, term)
    );
  }

  @Memoize()
  get label(): string {
    return requireNonNull(this.findAndMapObject(rdfs.label, mapTermToString));
  }

  @Memoize()
  get properties(): readonly Property[] {
    return this.filterAndMapObjects(dcterms.hasPart, term =>
      term.termType === "NamedNode"
        ? this.modelSet.propertyByIri(term.value)
        : null
    );
  }
}
