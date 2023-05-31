import {Mixin} from "ts-mixer";
import {SameAsImagesMixin} from "./SameAsImagesMixin";
import {SameAsRelationsMixin} from "./SameAsRelationsMixin";
import {Person} from "../Person";
import {SameAsModel} from "./SameAsModel";
import {SameAsAgentMixin} from "./SameAsAgentMixin";

export class SameAsPerson extends Mixin(SameAsModel<Person>, SameAsAgentMixin<Person>, SameAsImagesMixin<Person>, SameAsRelationsMixin) implements Person {
    get familyName(): string | null {
        return this.getBestValue(model => model.familyName);
    }

    get givenName(): string | null {
        return this.getBestValue(model => model.givenName);
    }

    get sameAs(): readonly Person[] {
        return [];
    }

    get sortName(): string | null {
        return this.getBestValue(model => model.sortName);
    }

    get type(): "Person" {
        return "Person";
    }
}
