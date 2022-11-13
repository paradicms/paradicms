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
import {
  HasAbstract,
  HasImages,
  HasInstitution,
  HasPage,
  HasRelations,
  HasRights,
  HasTitle,
} from "./mixins";
import {WorkEvent} from "./WorkEvent";
import {WorkLocation} from "./WorkLocation";
import {visitWorkEvent} from "./WorkEventVisitor";
import {WorkCreation} from "./WorkCreation";
import {Location} from "./Location";
import {cms, dcterms, rdf} from "@paradicms/vocabularies";

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
  HasInstitution,
  HasPage,
  HasTitle,
  HasRelations,
  HasRights
) {
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
      this.modelSet.collectionByUri(collectionUri)
    );
  }

  @Memoize()
  get collectionUris(): readonly string[] {
    return this.getObjects(cms.collection)
      .filter(term => term.termType === "NamedNode")
      .map(term => term.value);
  }

  @Memoize()
  get description(): string | Text | null {
    for (const term of this.getObjects(dcterms.abstract)) {
      switch (term.termType) {
        case "BlankNode":
          return new Text({
            modelSet: this.modelSet,
            graphNode: this.graphNode,
            node: term,
          });
        case "Literal":
          return term.value;
      }
    }
    return null;
  }

  get events(): readonly WorkEvent[] {
    return this.modelSet.workEventsByWork(this.uri);
  }

  @Memoize()
  get locations(): readonly WorkLocation[] {
    const result: WorkLocation[] = [];

    for (const event of this.events) {
      visitWorkEvent(event, {
        visitWorkCreation(workCreation: WorkCreation): void {
          if (workCreation.location instanceof Location) {
            result.push({
              location: workCreation.location,
              role: "Creation",
              title: workCreation.title
                ? workCreation.displayDate
                  ? `${workCreation.displayDate}: ${workCreation.title}`
                  : workCreation.title
                : null,
            });
          }
        },
      });
    }

    return result;
  }

  @Memoize()
  propertyNamedValues(propertyUri: string): readonly NamedValue[] {
    const result: NamedValue[] = [];
    this.dataset.forEach(
      quad => {
        if (quad.object.termType !== "NamedNode") {
          return;
        }
        const rdfTypeQuads = this.dataset.match(
          quad.object,
          rdf.type,
          cms.NamedValue,
          null
        );
        if (rdfTypeQuads.size == 0) {
          return;
        }
        result.push(
          new NamedValue({
            modelSet: this.modelSet,
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
      this.modelSet,
      this.dataset.getQuads(
        this.node,
        new NamedNode(propertyUri),
        null,
        this.graphNode
      )
    );
  }
}
