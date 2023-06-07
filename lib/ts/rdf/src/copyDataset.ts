import {DatasetCore} from "@rdfjs/types";
import {createDataset} from "./createDataset";

export const copyDataset = (dataset: DatasetCore): DatasetCore => {
  const copy = createDataset();
  for (const quad of dataset) {
    copy.add(quad);
  }
  return copy;
};
