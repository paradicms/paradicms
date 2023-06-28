import {describe} from "mocha";
import {behavesLikePerson} from "../behavesLikePerson";
import {requireNonNull} from "@paradicms/utilities";
import {expect} from "chai";
import {testModelSet} from "../testModelSet";
import {FoafPerson} from "../../src/foaf/FoafPerson";

describe("FoafPerson", () => {
  const person = requireNonNull(
    testModelSet.personByIri("http://example.com/person4")
  );

  before(() => {
    expect(person).to.be.instanceof(FoafPerson);
  });

  behavesLikePerson(person);
});
