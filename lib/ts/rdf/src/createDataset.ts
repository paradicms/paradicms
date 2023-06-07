import {DatasetCore} from "@rdfjs/types";
import {Store} from "n3";

export const createDataset = (): DatasetCore => new Store();
