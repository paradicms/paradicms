import {Dataset} from "@rdfjs/types";

export class DataGraph {
  constructor(readonly dataset: Dataset) {}

  // static parse(input: string, options?: ParserOptions): DataGraph {
  //   return new DataGraph(DataGraph.parseIntoDataset(input, options));
  // }
  //
  // private static parseIntoDataset(
  //   input: string,
  //   options?: ParserOptions
  // ): Dataset {
  //   const parser = new Parser(options);
  //   const dataset = new Dataset();
  //   dataset.addQuads(parser.parse(input));
  //   return dataset;
  // }
}
