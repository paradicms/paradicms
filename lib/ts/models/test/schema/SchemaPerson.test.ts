import {expect} from "chai";
import {describe} from "mocha";
import {testModelSet} from "../testModelSet";
import {requireNonNull} from "@paradicms/utilities";
import {SchemaPerson} from "../../src/schema/SchemaPerson";
import {behavesLikePerson} from "../behavesLikePerson";

describe("SchemaPerson", () => {
  const person = requireNonNull(
    testModelSet.personByIri("http://example.com/person5")
  );

  before(() => {
    expect(person).to.be.instanceof(SchemaPerson);
  });

  behavesLikePerson(person);
});
