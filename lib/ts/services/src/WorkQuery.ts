/**
 * Query passed to the WorkQueryService.
 *
 * Queries are never passed over getStaticProps, but they are serialized to the browser query string,
 * so it's preferable to allow the optional fields to be undefined rather than null.
 */
import {z} from "zod";
import {workQuerySchema} from "./workQuerySchema";

export type WorkQuery = z.infer<typeof workQuerySchema>;
