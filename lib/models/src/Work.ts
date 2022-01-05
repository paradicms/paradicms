import {NamedModel} from "./NamedModel";
import {DCTERMS, FOAF, PARADICMS, RDF} from "./vocabularies";
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
import {WorkAgent} from "./WorkAgent";
import {Agent} from "./Agent";
import {DateTimeDescription} from "./DateTimeDescription";

const getRightsAgents = (
  rights: Rights | null,
  rolePrefix: string
): readonly WorkAgent[] => {
  const result: WorkAgent[] = [];

  if (!rights) {
    return result;
  }

  const creator = rights?.creator;
  if (creator && creator instanceof Agent) {
    result.push({
      agent: creator as Agent,
      role: rolePrefix + " creator",
    });
  }

  return result;
};

export class Work extends NamedModel {
  @Memoize()
  get abstract(): string | Text | null {
    return this.optionalStringOrText(DCTERMS.abstract);
  }

  @Memoize()
  get agents(): readonly WorkAgent[] {
    const result: WorkAgent[] = [];

    result.push(
      ...getRightsAgents(this.rights ?? this.institution.rights ?? null, "Work")
    );

    const abstract = this.abstract;
    if (abstract && abstract instanceof Text) {
      result.push(...getRightsAgents(abstract.rights, "Text"));
    }

    for (const image of this.originalImages) {
      result.push(...getRightsAgents(image.rights, "Image"));
    }

    return result;
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
        const rdfTypeQuads = this.store.getQuads(
          quad.object,
          RDF.type,
          PARADICMS.NamedValue,
          null
        );
        if (rdfTypeQuads.length == 0) {
          return;
        }
        result.push(
          new NamedValue({
            dataset: this.dataset,
            graphNode: rdfTypeQuads[0].graph as NamedNode,
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

  @Memoize()
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

  get temporal(): DateTimeDescription | string | null {
    return this.optionalDateTimeDescriptionOrString(DCTERMS.temporal);
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
