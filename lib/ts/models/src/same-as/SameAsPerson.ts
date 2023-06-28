import {Mixin} from "ts-mixer";
import {SameAsImagesMixin} from "./SameAsImagesMixin";
import {Person} from "../Person";
import {SameAsModel} from "./SameAsModel";
import {SameAsAgentMixin} from "./SameAsAgentMixin";

export class SameAsPerson extends Mixin(SameAsModel<Person>, SameAsAgentMixin<Person>, SameAsImagesMixin<Person>) implements Person {
    get homepage(): string | null {
        return this.getBestValue(model => model.homepage);
    }

    get familyName(): string | null {
        return this.getBestValue(model => model.familyName);
    }

    get givenName(): string | null {
        return this.getBestValue(model => model.givenName);
    }

    get type(): "Person" {
        return "Person";
    }

    get wikidataConceptIri(): string | null {
        return this.getBestValue(model => model.wikidataConceptIri);
    }

    get wikipediaUrl(): string | null {
        return this.getBestValue(model => model.wikipediaUrl);
    }
}
