import {Dataset} from "@rdfjs/types";
import {Writer, WriterOptions} from "n3";
import {defaultDatasetStringFormat} from "./defaultDatasetStringFormat";

export const datasetToString = (
  dataset: Dataset,
  options?: WriterOptions
): string => {
  const augmentedOptions: WriterOptions = {...options};

  if (!augmentedOptions.format) {
    augmentedOptions.format = defaultDatasetStringFormat;
  }
  const writer = new Writer(augmentedOptions);
  for (const quad of dataset) {
    writer.addQuad(quad);
  }
  let resultString: string;
  writer.end((error, result: string) => (resultString = result));
  return resultString!;
};
