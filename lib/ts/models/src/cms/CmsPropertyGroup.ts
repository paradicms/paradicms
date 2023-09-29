import { mapTermToString } from "@paradicms/rdf";
import { requireNonNull } from "@paradicms/utilities";
import { dcterms, rdfs } from "@paradicms/vocabularies";
import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { Property } from "../Property";
import { PropertyGroup } from "../PropertyGroup";
import { ResourceBackedModel } from "../ResourceBackedModel";
import { SomeImageThumbnailMixin } from "../SomeImageThumbnailMixin";
import { Text } from "../Text";
import { FoafImagesMixin } from "../foaf/FoafImagesMixin";
import { mapTermToText } from "../mapTermToText";

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

  override preMemoize(): void {
    super.preMemoize();
    this.preMemoizeFoafImagesMixin();
    this.comment;
    this.label;
    this.properties;
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
