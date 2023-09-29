import {requireDefined} from "@paradicms/utilities";
import {WikibaseProperty} from "@paradicms/wikibase";
import {DatasetCore, NamedNode, Term} from "@rdfjs/types";
import invariant from "ts-invariant";
import {Image} from "../Image";
import {ModelSet} from "../ModelSet";
import {Property} from "../Property";
import {ResourceBackedModel} from "../ResourceBackedModel";
import {ThumbnailSelector} from "../ThumbnailSelector";

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
  readonly groups = [];
  readonly filterable = false;
  readonly hidden = false;
  readonly images = [];

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
  readonly rangeValues = [];

  readonly searchable = false;

  thumbnail(selector: ThumbnailSelector): Image | null {
    return null;
  }
}
