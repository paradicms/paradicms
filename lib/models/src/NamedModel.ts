import {BlankNode, NamedNode} from "n3";
import {Model} from "./Model";
import {DCTERMS, PARADICMS} from "./vocabularies";
import {Rights} from "./Rights";
import {Text} from "./Text";

export class NamedModel extends Model {
  get node(): NamedNode {
    return this._node as NamedNode;
  }

  // Text is a Model, so this must be in NamedModel to avoid a circular dependency.
  protected optionalStringOrText(property: NamedNode): string | Text | null {
    for (const object of this.store.getObjects(this.node, property, null)) {
      switch (object.termType) {
        case "BlankNode":
          if (this.hasRdfType(object as BlankNode, PARADICMS.Text)) {
            return new Text({
              dataset: this.dataset,
              graphNode: this.graphNode,
              node: object,
            });
          }
          break;
        case "Literal":
          return object.value;
      }
    }
    return null;
  }

  private get relationUrls(): readonly URL[] {
    const result: URL[] = [];
    for (const relationObject of this.store.getObjects(
      this.node,
      DCTERMS.relation,
      null
    )) {
      if (relationObject.termType !== "NamedNode") {
        continue;
      }
      try {
        result.push(new URL(relationObject.value));
      } catch {}
    }
    return result;
  }

  protected get _rights(): Rights | null {
    return Rights.optional({
      dataset: this.dataset,
      graphNode: this.graphNode,
      node: this.node,
    });
  }

  protected get _wikipediaUrl(): string | null {
    for (const relationUrl of this.relationUrls) {
      if (
        relationUrl.host.endsWith("wikipedia.org") &&
        relationUrl.pathname.startsWith("/wiki/")
      ) {
        return relationUrl.toString();
      }
    }
    return null;
  }

  protected get _wikidataConceptUri(): string | null {
    for (const relationUrl of this.relationUrls) {
      if (
        relationUrl.host === "www.wikidata.org" &&
        relationUrl.pathname.startsWith("/entity/")
      ) {
        return relationUrl.toString();
      }
    }
    return null;
  }

  get uri(): string {
    return this.node.value;
  }
}
