import {Dataset} from "@rdfjs/types";
import {datasetCoreToDataset} from "./datasetCoreToDataset";
import {Store} from "n3";

export const createDataset = (): Dataset => datasetCoreToDataset(new Store());
