import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {NamedNode} from "@rdfjs/types";
import TermMap from "@rdfjs/term-map";
import {ResourceBackedModelFactory} from "./ResourceBackedModelFactory";

export class ResourceBackedModelFactories<ResourceBackedModelT> {
  private factories: TermMap<
    NamedNode,
    {
      new (kwds: ResourceBackedModelParameters): ResourceBackedModelT;
    }
  > = new TermMap();

  get(
    rdfType: NamedNode
  ): ResourceBackedModelFactory<ResourceBackedModelT> | null {
    return this.factories.get(rdfType) ?? null;
  }

  register(
    rdfType: NamedNode,
    resourceBackedModelFactory: ResourceBackedModelFactory<ResourceBackedModelT>
  ) {
    this.factories.set(rdfType, resourceBackedModelFactory);
  }
}
