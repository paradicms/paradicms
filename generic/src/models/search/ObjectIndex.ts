import {Index} from "lunr";
import {ObjectIndexDocument} from "~/models/search/ObjectIndexDocument";
import {ObjectQuery} from "~/models/search/ObjectQuery";
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
      {name: "collectionUri", store: true},
      {name: "institutionUri", store: true},
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
        collectionUri: (node: ObjectJson) => node.collection_uris[0],
        institutionUri: (node: ObjectJson) => node.institution_uri,
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

  search(query: ObjectQuery): ObjectIndexDocument[] {
    const lunrQuery = [];
    if (query.text) {
      lunrQuery.push(query.text);
    }
    return this.index
      .search(lunrQuery.join(" "))
      .map(({ref}) => this.store[ref]);
  }
}
