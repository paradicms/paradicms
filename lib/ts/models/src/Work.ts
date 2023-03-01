import {NamedModel} from "./NamedModel";
import {Collection} from "./Collection";
import {Rights} from "./Rights";
import {Text} from "./Text";
import {Memoize} from "typescript-memoize";
import {PropertyValue} from "./PropertyValue";
import {NamedValue} from "./NamedValue";
import {NamedNode} from "@rdfjs/types";
import {WorkAgent} from "./WorkAgent";
import {Mixin} from "ts-mixer";
import {DataFactory} from "@paradicms/rdf";
import {
  HasAbstract,
  HasImages,
  HasPage,
  HasRelations,
  HasRights,
  HasTitle,
} from "./mixins";
import {WorkEvent} from "./WorkEvent";
import {WorkLocation} from "./WorkLocation";
import {cms, dcterms, rdf} from "@paradicms/vocabularies";
import {Institution} from "./Institution";
import {mapTextObject} from "./mapTextObject";

const getRightsWorkAgents = (
  rights: Rights | null,
  rolePrefix: string
): readonly WorkAgent[] => {
  const result: WorkAgent[] = [];

  if (!rights) {
    return result;
  }

  for (const contributorAgent of rights.contributorAgents) {
    result.push({
      agent: contributorAgent,
      role: rolePrefix + " contributor",
    });
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

export class Work extends Mixin(
  NamedModel,
  HasAbstract,
  HasImages,
  HasPage,
  HasTitle,
  HasRelations,
  HasRights
) {
  @Memoize()
  get agents(): readonly WorkAgent[] {
    const result: WorkAgent[] = [];

    result.push(...getRightsWorkAgents(this.rights, "Work"));

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
      this.modelSet.collectionByUri(collectionUri)
    );
  }

  @Memoize()
  get collectionUris(): readonly string[] {
    return this.filterAndMapObjects(cms.collection, this.mapUriObject);
  }

  @Memoize()
  get description(): string | Text | null {
    return this.findAndMapObject(dcterms.abstract, term =>
      mapTextObject(this, term)
    );
  }

  @Memoize()
  get events(): readonly WorkEvent[] {
    return this.modelSet.workEventsByWork(this.uri);
  }

  @Memoize()
  get institution(): Institution | null {
    return this.institutionUri
      ? this.modelSet.institutionByUri(this.institutionUri)
      : null;
  }

  @Memoize()
  get institutionUri(): string | null {
    return this.findAndMapObject(cms.institution, this.mapUriObject);
  }

  @Memoize()
  get locations(): readonly WorkLocation[] {
    const locations: WorkLocation[] = [];

    for (const event of this.events) {
      const location = event.workLocation;
      if (location) {
        locations.push(location);
      }
    }

    return locations;
  }

  @Memoize()
  propertyNamedValues(propertyUri: string): readonly NamedValue[] {
    return this.filterAndMapObjects(
      DataFactory.namedNode(propertyUri),
      term => {
        if (term.termType !== "NamedNode") {
          return null;
        }
        for (const rdfTypeQuad of this.dataset.match(
          term,
          rdf.type,
          cms.NamedValue,
          null
        )) {
          return new NamedValue({
            modelSet: this.modelSet,
            graphNode: rdfTypeQuad.graph as NamedNode,
            node: term,
          });
        }
        return null;
      }
    );
  }

  @Memoize()
  propertyValues(propertyUri: string): readonly PropertyValue[] {
    return PropertyValue.fromQuads(
      this.modelSet,
      this.dataset
        .match(
          this.node,
          DataFactory.namedNode(propertyUri),
          null,
          this.graphNode
        )
        .toArray()
    );
  }
}
