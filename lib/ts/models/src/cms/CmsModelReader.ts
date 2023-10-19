import { getRdfInstanceQuads } from "@paradicms/rdf";
import { cms, configuration } from "@paradicms/vocabularies";
import { NamedNode } from "@rdfjs/types";
import { AppConfiguration } from "../AppConfiguration";
import { DatasetModelReader } from "../DatasetModelReader";
import { ModelSet } from "../ModelSet";
import { PropertyGroup } from "../PropertyGroup";
import { CmsAppConfiguration } from "./CmsAppConfiguration";
import { CmsPropertyGroup } from "./CmsPropertyGroup";

export class CmsModelReader extends DatasetModelReader {
  override readAppConfiguration(kwds: {modelSet: ModelSet}): AppConfiguration | null {
    for (const quad of getRdfInstanceQuads({
      class_: configuration.AppConfiguration,
      dataset: this.dataset,
      includeSubclasses: true
    }).values()) {
      if (quad.graph.termType !== "NamedNode") {
        continue;
      }
      if (quad.subject.termType !== "NamedNode") {
        continue;
      }

      this.checkModelGraph({
        modelGraph: quad.graph as NamedNode,
        modelIri: quad.subject as NamedNode,
      });
      return new CmsAppConfiguration({
        dataset: this.dataset,
        modelSet: kwds.modelSet,
        graph: quad.graph as NamedNode,
        iri: quad.subject as NamedNode,
      });
    }
    return null;
  }

  override readPropertyGroups(kwds: {modelSet: ModelSet}): readonly PropertyGroup[] {
    return this.readModels({
      class_: cms.PropertyGroup,
      factory: CmsPropertyGroup,
      ...kwds,
    });
  }
}
