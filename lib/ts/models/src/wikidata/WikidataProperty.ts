import {WikibasePropertyDefinition} from "@paradicms/wikibase";
import {DatasetCore} from "@rdfjs/types";
import invariant from "ts-invariant";
import {requireDefined} from "@paradicms/utilities";
import {ResourceBackedNamedModel} from "../ResourceBackedNamedModel";
import {ModelSet} from "../ModelSet";
import {Property} from "../Property";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {Image} from "../Image";

export class WikidataProperty extends ResourceBackedNamedModel
  implements Property {
  private readonly wikibasePropertyDefinition: WikibasePropertyDefinition;

  constructor(kwds: {
    dataset: DatasetCore;
    modelSet: ModelSet;
    wikibasePropertyDefinition: WikibasePropertyDefinition;
  }) {
    super({
      dataset: kwds.dataset,
      graph: kwds.wikibasePropertyDefinition.graph,
      identifier: kwds.wikibasePropertyDefinition.node,
      modelSet: kwds.modelSet,
    });
    this.wikibasePropertyDefinition = kwds.wikibasePropertyDefinition;
  }

  readonly comment = null;

  get groups() {
    return [];
  }

  readonly filterable = false;
  readonly hidden = false;

  get images() {
    return [];
  }

  get label(): string {
    invariant(this.wikibasePropertyDefinition.labels.length > 0);
    return requireDefined(
      this.wikibasePropertyDefinition.labels.find(
        literal => literal.language === "" || literal.language === "en"
      )
    ).value;
  }

  readonly order = 0;
  readonly range = null;

  get rangeValues() {
    return [];
  }

  readonly searchable = false;

  thumbnail(selector: ThumbnailSelector): Image | null {
    return null;
  }
}
