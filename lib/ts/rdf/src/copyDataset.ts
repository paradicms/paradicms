import {Dataset} from "@rdfjs/types";
import {createDataset} from "./createDataset";

export const copyDataset = (dataset: Dataset): Dataset => {
  const copy = createDataset();
  copy.addAll(dataset);
  return copy;
};
