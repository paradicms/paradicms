import {Index} from "lunr";
import {ObjectIndexDocument} from "~/models/ObjectIndexDocument";
import {ObjectJson} from "~/graphql/types";

type Store = {[index: string]: ObjectIndexDocument};

export class ObjectIndex {
  private constructor(
    private readonly index: Index,
    private readonly store: Store
  ) {}

  static get available() {
    return typeof window !== "undefined" && (window as any).__LUNR__;
  }

  static readonly configOptions = {
    // Fields to index. If store === true value will be stored in index file.
    // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
    fields: [
      {name: "title", store: true},
      {name: "uri", store: true},
    ],
    languages: [
      {
        name: "en",
      },
    ],
    // How to resolve each field's value for a supported node type
    resolvers: {
      // For any node of type X, list how to resolve the fields' values
      ObjectJson: {
        title: (node: ObjectJson) => node.title,
        uri: (node: ObjectJson) => node.uri,
      },
    },
  };

  static async loaded(): Promise<ObjectIndex> {
    return (window as any).__LUNR__.__loaded.then((lunr: any) => {
      // @ts-ignore
      const index: Index = lunr.en.index;
      // @ts-ignore
      const store: Store = lunr.en.store;
      return new ObjectIndex(index, store);
    });
  }

  search(query: string): ObjectIndexDocument[] {
    return this.index.search(query).map(({ref}) => this.store[ref]);
  }
}
