import {z} from "zod";
import {workCollectionValueFilterSchema} from "./workCollectionValueFilterSchema";

export type WorkCollectionValueFilter = z.infer<
  typeof workCollectionValueFilterSchema
>;
