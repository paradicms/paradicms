import {Parser, ParserOptions, Store} from "n3";

export class DataGraph {
  constructor(private readonly store: Store) {}

  static parse(input: string, options?: ParserOptions): DataGraph {
    return new DataGraph(DataGraph.parseIntoStore(input, options));
  }

  private static parseIntoStore(input: string, options?: ParserOptions): Store {
    const parser = new Parser(options);
    const store = new Store();
    store.addQuads(parser.parse(input));
    return store;
  }
}
