import {getRdfInstanceQuads} from "@paradicms/rdf";
import {cms, configuration} from "@paradicms/vocabularies";
import {AppConfiguration} from "../AppConfiguration";
import {DatasetModelReader} from "../DatasetModelReader";
import {ModelSet} from "../ModelSet";
import {PropertyGroup} from "../PropertyGroup";
import {CmsPropertyGroup} from "./CmsPropertyGroup";
import {ModelIdentifier} from "../ModelIdentifier";
import {ModelGraphIdentifier} from "../ModelGraphIdentifier";

export class CmsModelReader extends DatasetModelReader {
  override readAppConfiguration(kwds: {modelSet: ModelSet}): AppConfiguration | null {
    for (const quad of getRdfInstanceQuads({
      class_: configuration.AppConfiguration,
      dataset: this.dataset,
      includeSubclasses: true
    }).values()) {
      this.checkModelGraph({
        modelGraph: quad.graph as ModelGraphIdentifier,
        modelIdentifier: quad.subject as ModelIdentifier,
      });
      return new AppConfiguration({
        dataset: this.dataset,
        modelSet: kwds.modelSet,
        graph: quad.graph as ModelGraphIdentifier,
        identifier: quad.subject as ModelIdentifier,
      });
    }
    return null;
  }

  override readPropertyGroups(kwds: {modelSet: ModelSet}): readonly PropertyGroup[] {
    return this.readNamedModels({
      class_: cms.PropertyGroup,
      factory: CmsPropertyGroup,
      ...kwds,
    });
  }
}
