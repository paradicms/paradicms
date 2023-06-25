import {describe} from "mocha";
import {CmsConcept} from "../../src/cms/CmsConcept";
import {behavesLikeConcept} from "../behavesLikeConcept";
import {testCmsModelSet} from "./testCmsModelSet";
import {requireNonNull} from "@paradicms/utilities";

describe("CmsConcept", () => {
  const concept: CmsConcept = requireNonNull(
    testCmsModelSet.conceptByIri(
      "urn:paradicms_etl:pipeline:synthetic_data:concept:0"
    )
  ) as CmsConcept;

  behavesLikeConcept(concept);
});
