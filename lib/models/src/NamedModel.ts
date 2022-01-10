import {NamedNode} from "n3";
import {Model} from "./Model";
import {DCTERMS} from "./vocabularies";
import {Rights} from "./Rights";

export class NamedModel extends Model {
  get node(): NamedNode {
    return this._node as NamedNode;
  }

  private get relationUrls(): readonly URL[] {
    const result: URL[] = [];
    for (const relationObject of this.propertyObjects(DCTERMS.relation)) {
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
