import {DataFactory} from "@paradicms/rdf";
import {requireNonNull} from "@paradicms/utilities";
import {expect} from "chai";
import {describe} from "mocha";
import {SchemaPerson} from "../../src/schema/SchemaPerson";
import {behavesLikePerson} from "../behavesLikePerson";
import {testModelSet} from "../testModelSet";

describe("SchemaPerson", () => {
  const person = requireNonNull(
    testModelSet.personByIri(
      DataFactory.namedNode("http://example.com/person5")
    )
  );

  before(() => {
    expect(person).to.be.instanceof(SchemaPerson);
  });

  behavesLikePerson(person);
});
