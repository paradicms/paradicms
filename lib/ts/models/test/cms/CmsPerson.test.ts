import {describe} from "mocha";
import {behavesLikePerson} from "../behavesLikePerson";
import {testCmsModelSet} from "./testCmsModelSet";
import {requireNonNull} from "@paradicms/utilities";

describe("CmsPerson", () => {
  const person = requireNonNull(
    testCmsModelSet.personByIri("http://example.com/person4")
  );

  behavesLikePerson(person);
});
