import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";

export type ResourceBackedModelFactory<ResourceBackedModelT> = {
  new (kwds: ResourceBackedModelParameters): ResourceBackedModelT;
};
