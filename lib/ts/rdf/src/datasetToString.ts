import {Dataset} from "@rdfjs/types";
import {Writer, WriterOptions} from "n3";

export const datasetToString = (
  dataset: Dataset,
  options?: WriterOptions
): string => {
  const augmentedOptions: WriterOptions = {...options};

  if (!augmentedOptions.format) {
    augmentedOptions.format = "Turtle";
  }
  const writer = new Writer(augmentedOptions);
  writer.addQuads(dataset.toArray());
  let resultString: string;
  writer.end((error, result: string) => (resultString = result));
  return resultString!;
};
