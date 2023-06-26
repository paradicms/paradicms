import {describe} from "mocha";
import {behavesLikeWork} from "../behavesLikeWork";
import {requireNonNull} from "@paradicms/utilities";
import {testSchemaModelSet} from "./testSchemaModelSet";

describe("SchemaCreativeWork", () => {
  const work = requireNonNull(
    testSchemaModelSet.workByIri("http://example.com/collection0/work1")
  );

  behavesLikeWork(work);
});
