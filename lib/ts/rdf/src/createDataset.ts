import {Dataset} from "@rdfjs/types";
import {n3StoreToDataset} from "./n3StoreToDataset";
import {Store} from "n3";

export const createDataset = (): Dataset => n3StoreToDataset(new Store());
