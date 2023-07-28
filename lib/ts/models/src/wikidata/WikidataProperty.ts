import {WikibaseProperty} from "@paradicms/wikibase";
import {DatasetCore, NamedNode, Term} from "@rdfjs/types";
import invariant from "ts-invariant";
import {requireDefined} from "@paradicms/utilities";
import {ModelSet} from "../ModelSet";
import {Property} from "../Property";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {Image} from "../Image";
import {ResourceBackedModel} from "../ResourceBackedModel";

const ensureModelGraphIdentifier = (graph: Term) => {
  invariant(graph.termType === "NamedNode");
  return graph as NamedNode;
};

export class WikidataProperty extends ResourceBackedModel implements Property {
  private readonly wikibaseProperty: WikibaseProperty;

  constructor(kwds: {
    dataset: DatasetCore;
    modelSet: ModelSet;
    wikibaseProperty: WikibaseProperty;
  }) {
    super({
      dataset: kwds.dataset,
      graph: ensureModelGraphIdentifier(kwds.wikibaseProperty.graph),
      identifier: kwds.wikibaseProperty.node,
      modelSet: kwds.modelSet,
    });
    this.wikibaseProperty = kwds.wikibaseProperty;
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
    invariant(this.wikibaseProperty.labels.length > 0);
    return requireDefined(
      this.wikibaseProperty.labels.find(
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
