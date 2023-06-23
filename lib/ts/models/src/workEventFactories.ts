import {ResourceBackedModelFactories} from "./ResourceBackedModelFactories";
import {WorkEventUnion} from "./WorkEventUnion";

export const workEventFactories = new ResourceBackedModelFactories<
  WorkEventUnion
>();
