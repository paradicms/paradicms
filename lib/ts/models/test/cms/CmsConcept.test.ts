import {testModelSet} from "../testModelSet";
import {describe} from "mocha";
import {CmsConcept} from "../../src/cms/CmsConcept";
import {behavesLikeConcept} from "../behavesLikeConcept";

describe("Concept", () => {
  const concept: CmsConcept = testModelSet.conceptByIri(
    "urn:paradicms_etl:pipeline:synthetic_data:concept:0"
  )! as CmsConcept;

  behavesLikeConcept(concept);
});
