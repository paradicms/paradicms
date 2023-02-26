import {Dataset} from "@rdfjs/types";
import {Writer} from "n3";

export const datasetToFastString = (dataset: Dataset): string => {
  const writer = new Writer({
    format: "N-Quads",
  });
  for (const quad of dataset) {
    writer.addQuad(quad);
  }
  let resultString: string;
  writer.end((error, result: string) => (resultString = result));
  return resultString!;
};
