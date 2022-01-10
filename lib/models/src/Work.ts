import {NamedModel} from "./NamedModel";
import {DCTERMS, FOAF, PARADICMS, RDF, XSD} from "./vocabularies";
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
import {DateTimeDescription} from "./DateTimeDescription";
import {WorkEvent} from "./WorkEvent";
import {WorkEventDateTime} from "./WorkEventDateTime";
import {requireDefined} from "./requireDefined";

const getRightsWorkAgents = (
  rights: Rights | null,
  rolePrefix: string
): readonly WorkAgent[] => {
  const result: WorkAgent[] = [];

  if (!rights) {
    return result;
  }

  for (const creatorAgent of rights.creatorAgents) {
    result.push({
      agent: creatorAgent,
      role: rolePrefix + " creator",
    });
  }

  for (const holderAgent of rights.holderAgents) {
    result.push({
      agent: holderAgent,
      role: rolePrefix + " holder",
    });
  }

  return result;
};

export class Work extends NamedModel {
  @Memoize()
  get abstract(): string | Text | null {
    for (const term of this.propertyObjects(DCTERMS.abstract)) {
      switch (term.termType) {
        case "BlankNode":
          return new Text({
            dataset: this.dataset,
            graphNode: this.graphNode,
            node: term,
          });
        case "Literal":
          return term.value;
      }
    }
    return null;
  }

  @Memoize()
  get agents(): readonly WorkAgent[] {
    const result: WorkAgent[] = [];

    result.push(
      ...getRightsWorkAgents(
        this.rights ?? this.institution.rights ?? null,
        "Work"
      )
    );

    if (this.abstract && this.abstract instanceof Text) {
      result.push(...getRightsWorkAgents(this.abstract.rights, "Text"));
    }

    for (const image of this.originalImages) {
      result.push(...getRightsWorkAgents(image.rights, "Image"));
    }

    return result;
  }

  @Memoize()
  get agentUris(): readonly string[] {
    const result: string[] = [];

    if (this.rights) {
      result.push(...this.rights.agentUris);
    } else if (this.institution.rights) {
      result.push(...this.institution.rights.agentUris);
    }

    if (
      this.abstract &&
      this.abstract instanceof Text &&
      this.abstract.rights
    ) {
      result.push(...this.abstract.rights.agentUris);
    }

    for (const image of this.originalImages) {
      if (image.rights) {
        result.push(...image.rights.agentUris);
      }
    }

    return result;
  }

  get collections(): readonly Collection[] {
    return this.collectionUris.map(collectionUri =>
      this.dataset.collectionByUri(collectionUri)
    );
  }

  get collectionUris(): readonly string[] {
    return this.propertyObjects(PARADICMS.collection)
      .filter(term => term.termType === "NamedNode")
      .map(term => term.value);
  }

  @Memoize()
  get created(): DateTimeDescription | number | string | null {
    for (const term of this.propertyObjects(DCTERMS.created)) {
      switch (term.termType) {
        case "BlankNode":
          return new DateTimeDescription({
            dataset: this.dataset,
            graphNode: this.graphNode,
            node: term,
          });
        case "Literal":
          if (term.datatype.value === XSD.integer.value) {
            return parseInt(term.value);
          } else {
            return term.value;
          }
      }
    }
    return null;
  }

  get events(): readonly WorkEvent[] {
    const toWorkEventDateTime = (
      dateTime: DateTimeDescription | number | string | null
    ): WorkEventDateTime | null => {
      if (dateTime === null) {
        return null;
      }
      if (typeof dateTime === "number") {
        return {
          day: 1,
          month: 1,
          year: dateTime,
        };
      } else if (typeof dateTime === "string") {
        return null;
      } else {
        // DateTimeDescription
        if (dateTime.year == null) {
          return null;
        }
        return {
          day: dateTime.day,
          month: dateTime.month,
          year: dateTime.year,
        };
      }
    };

    const events: WorkEvent[] = [];

    const created = toWorkEventDateTime(this.created);
    if (created !== null) {
      events.push({
        dateTime: created,
        type: "Creation",
      });
    }

    return events;
  }

  get images(): readonly Image[] {
    return this.dataset.imagesByDepictsUri(this.uri);
  }

  get institution(): Institution {
    return this.dataset.institutionByUri(this.institutionUri);
  }

  get institutionUri(): string {
    return requireDefined(
      this.propertyObjects(PARADICMS.institution).find(
        term => term.termType === "NamedNode"
      )
    ).value;
  }

  get originalImages(): readonly Image[] {
    return this.images.filter(image => image.isOriginal);
  }

  get page(): string | null {
    return (
      this.propertyObjects(FOAF.page).find(term => {
        switch (term.termType) {
          case "Literal":
          case "NamedNode":
            return true;
          default:
            return false;
        }
      })?.value ?? null
    );
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

  thumbnail(selector: ThumbnailSelector): Image | null {
    return selectThumbnail(this.images, selector);
  }

  get title(): string {
    return requireDefined(
      this.propertyObjects(DCTERMS.title).find(
        term => term.termType === "Literal"
      )
    ).value;
  }

  get wikidataConceptUri(): string | null {
    return this._wikidataConceptUri;
  }

  get wikipediaUrl(): string | null {
    return this._wikipediaUrl;
  }
}
