import {Configuration} from "./Configuration";
import {NamedNode} from "@rdfjs/types";
import {configuration, dcterms, rdf, xsd} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";

export class PropertyConfiguration extends Configuration {
  private booleanProperty(propertyUri: NamedNode): boolean {
    return this.findAndMapObject(propertyUri,
        term =>
            (term.termType === "Literal" &&
                term.datatype.value === xsd.boolean.value) ?
                (term.value === "true" || term.value === "1") : null
    ) ?? false;
  }

  get filterable(): boolean {
    return this.booleanProperty(configuration.filterable);
  }

  get hidden(): boolean {
    return this.booleanProperty(configuration.hidden);
  }

  get label(): string {
    return requireNonNull(this.findAndMapObject(dcterms.title, term => term.termType === "Literal" ? term.value : null));
  }

  get searchable(): boolean {
    return this.booleanProperty(configuration.searchable);
  }

  get uri(): string {
    return requireNonNull(this.findAndMapObject(rdf.predicate, term => term.termType === "NamedNode" ? term.value : null));
  }
}
