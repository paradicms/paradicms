import {DatasetCore} from "@rdfjs/types";
import {createDataset} from "./createDataset";

export const copyDataset = (dataset: DatasetCore): DatasetCore => {
  const copy = createDataset();
  copy.addAll(dataset);
  return copy;
};
