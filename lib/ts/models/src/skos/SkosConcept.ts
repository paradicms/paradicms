import {rdf, skos} from "@paradicms/vocabularies";
import {BlankNode, Literal, NamedNode} from "@rdfjs/types";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {Concept} from "../Concept";
import {mapTermToString} from "@paradicms/rdf";
import {FoafImagesMixin} from "../foaf/FoafImagesMixin";
import {mapTermToText} from "../mapTermToText";
import {Text} from "../Text";
import {SomeImageThumbnailMixin} from "../SomeImageThumbnailMixin";
import {ResourceBackedModel} from "../ResourceBackedModel";

export class SkosConcept
  extends Mixin(ResourceBackedModel, FoafImagesMixin, SomeImageThumbnailMixin)
  implements Concept {
  @Memoize()
  get altLabels(): readonly Literal[] {
    return this.filterAndMapObjects(skos.altLabel, term =>
      term.termType === "Literal" ? (term as Literal) : null
    );
  }

  @Memoize()
  get definition(): Text | null {
    return this.findAndMapObject(skos.definition, term =>
      mapTermToText(this, term)
    );
  }

  get description(): Text | null {
    return this.definition;
  }

  get label(): string {
    if (this.prefLabel) {
      return this.prefLabel;
    }
    for (const altLabel of this.altLabels) {
      return altLabel.value;
    }
    return this.value.value;
  }

  @Memoize()
  get prefLabel(): string | null {
    return this.findAndMapObject(skos.prefLabel, mapTermToString);
  }

  @Memoize()
  get value(): BlankNode | Literal | NamedNode {
    return (
      this.findAndMapObject(rdf.value, term => {
        switch (term.termType) {
          case "BlankNode":
          case "Literal":
          case "NamedNode":
            return term as BlankNode | Literal | NamedNode;
          default:
            return null;
        }
      }) ?? this.identifier
    );
  }
}
