import {NamedModel} from "./NamedModel";
import {DCTERMS, FOAF, PARADICMS} from "./vocabularies";
import {Collection} from "./Collection";
import {Institution} from "./Institution";
import {Rights} from "./Rights";
import {Image} from "./Image";
import {Text} from "./Text";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";
import {Memoize} from "typescript-memoize";
import {PropertyValue} from "./PropertyValue";
import {NamedValue} from "./NamedValue";
import {NamedNode} from "n3";

export class Work extends NamedModel {
  @Memoize()
  get abstract(): string | Text | null {
    return this.optionalStringOrText(DCTERMS.abstract);
  }

  get collections(): readonly Collection[] {
    return this.collectionUris.map(collectionUri =>
      this.dataset.collectionByUri(collectionUri)
    );
  }

  get collectionUris(): readonly string[] {
    return this.parentNamedNodes(PARADICMS.collection).map(node => node.value);
  }

  get images(): readonly Image[] {
    return this.dataset.imagesByDepictsUri(this.uri);
  }

  get institution(): Institution {
    return this.dataset.institutionByUri(this.institutionUri);
  }

  get institutionUri(): string {
    return this.requiredParentNamedNode(PARADICMS.institution).value;
  }

  get originalImages(): readonly Image[] {
    return this.images.filter(image => image.isOriginal);
  }

  get page(): string | null {
    return this.optionalStringOrUri(FOAF.page);
  }

  propertyNamedValues(propertyUri: string): readonly NamedValue[] {
    // This code is (temporarily) here instead of in Model or NamedModel
    // because NamedValue is a NamedModel, which creates a circular dependency.
    const result: NamedValue[] = [];
    this.store.forEach(
      quad => {
        if (quad.object.termType !== "NamedNode") {
          return;
        }
        if (!this.hasRdfType(quad.object as NamedNode, PARADICMS.NamedValue)) {
          return;
        }
        result.push(
          new NamedValue({
            dataset: this.dataset,
            graphNode: quad.graph as NamedNode,
            node: quad.object,
          })
        );
      },
      this.node,
      new NamedNode(propertyUri),
      null,
      this.graphNode
    );
    return result;
  }

  propertyValues(propertyUri: string): readonly PropertyValue[] {
    return PropertyValue.fromQuads(
      this.dataset,
      this.store.getQuads(
        this.node,
        new NamedNode(propertyUri),
        null,
        this.graphNode
      )
    );
  }

  @Memoize()
  get rights(): Rights | null {
    return this._rights;
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return selectThumbnail(this.images, selector);
  }

  get title(): string {
    return this.requiredString(DCTERMS.title);
  }

  get wikidataConceptUri(): string | null {
    return this._wikidataConceptUri;
  }

  get wikipediaUrl(): string | null {
    return this._wikipediaUrl;
  }
}
