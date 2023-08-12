import {ImageDimensions} from "@paradicms/models";
import {Array, Optional, Record, Static, String} from "runtypes";

export const ValueFacetValueThumbnail = Record({
  creators: Array(String).asReadonly(),
  exactDimensions: Optional(ImageDimensions),
  licenses: Array(String).asReadonly(),
  maxDimensions: Optional(ImageDimensions),
  rightsHolders: Array(String).asReadonly(),
  rightsStatements: Array(String).asReadonly(),
  src: String, // Should not be readonly
});

export type ValueFacetValueThumbnail = Static<typeof ValueFacetValueThumbnail>;
