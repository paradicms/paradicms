import {describe} from "mocha";
import {behavesLikePerson} from "../behavesLikePerson";
import {requireNonNull} from "@paradicms/utilities";
import {expect} from "chai";
import {testModelSet} from "../testModelSet";
import {CmsPerson} from "../../src/cms/CmsPerson";

describe("CmsPerson", () => {
  const person = requireNonNull(
    testModelSet.personByIri("http://example.com/person4")
  );

  before(() => {
    expect(person).to.be.instanceof(CmsPerson);
  });

  behavesLikePerson(person);
});
