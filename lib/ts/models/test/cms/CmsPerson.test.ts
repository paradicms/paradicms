import {describe} from "mocha";
import {behavesLikePerson} from "../behavesLikePerson";
import {testModelSet} from "../testModelSet";

describe("CmsPerson", () => {
  const person = testModelSet.personByIri("http://example.com/person4")!;

  behavesLikePerson(person);
});
