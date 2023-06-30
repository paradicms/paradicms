import {getRdfInstanceQuads} from "@paradicms/rdf";
import {cms, configuration} from "@paradicms/vocabularies";
import {AppConfiguration} from "../AppConfiguration";
import {Collection} from "../Collection";
import {DatasetModelReader} from "../DatasetModelReader";
import {Image} from "../Image";
import {Location} from "../Location";
import {ModelSet} from "../ModelSet";
import {PropertyGroup} from "../PropertyGroup";
import {Work} from "../Work";
import {CmsCollection} from "./CmsCollection";
import {CmsImage} from "./CmsImage";
import {CmsLocation} from "./CmsLocation";
import {CmsPropertyGroup} from "./CmsPropertyGroup";
import {CmsWork} from "./CmsWork";
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

  override readCollections(kwds: {modelSet: ModelSet}): readonly Collection[] {
    return this.readNamedModels({
      class_: cms.Collection,
      factory: CmsCollection,
      ...kwds,
    });
  }

  override readImages(kwds: {modelSet: ModelSet}): readonly Image[] {
    return this.readNamedModels({
      class_: cms.Image,
      factory: CmsImage,
      ...kwds,
    });
  }

  override readNamedLocations(kwds: {modelSet: ModelSet}): readonly Location[] {
    return this.readNamedModels({
      class_: cms.Location,
      factory: CmsLocation,
      ...kwds,
    });
  }

  override readPropertyGroups(kwds: {modelSet: ModelSet}): readonly PropertyGroup[] {
    return this.readNamedModels({
      class_: cms.PropertyGroup,
      factory: CmsPropertyGroup,
      ...kwds,
    });
  }

  override readWorks(kwds: {modelSet: ModelSet}): readonly Work[] {
    return this.readNamedModels({
      class_: cms.Work,
      factory: CmsWork,
      ...kwds,
    });
  }
}
