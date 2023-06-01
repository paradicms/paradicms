import {SameAsNamedModel} from "./SameAsNamedModel";
import {Work} from "../Work";
import {Mixin} from "ts-mixer";
import {SameAsRightsMixin} from "./SameAsRightsMixin";
import {WorkAgent} from "../WorkAgent";
import {Collection} from "../Collection";
import {Text} from "../Text";
import {WorkEventUnion} from "../WorkEventUnion";
import {WorkLocation} from "../WorkLocation";
import {PropertyValue} from "../PropertyValue";
import {Memoize} from "typescript-memoize";
import {SameAsImagesMixin} from "./SameAsImagesMixin";
import {SameAsRelationsMixin} from "./SameAsRelationsMixin";

export class SameAsWork extends Mixin(SameAsNamedModel<Work>, SameAsImagesMixin<Work>, SameAsRelationsMixin, SameAsRightsMixin<Work>) implements Work {
    get agents(): readonly WorkAgent[] {
        return this.getAllValues(model => model.agents);
    }

    get collections(): readonly Collection[] {
        return this.getUniqueLinkedModels(model => model.collections);
    }

    get description(): Text | null {
        return this.getBestValue(model => model.description);
    }

    get displayDate(): string | null {
        return this.getBestValue(model => model.displayDate);
    }

    get events(): readonly WorkEventUnion[] {
        return this.getAllValues(model => model.events);
    }

    get label(): string {
        return this.getBestValue(model => model.label)!;
    }

    get location(): WorkLocation | null {
        return this.getBestValue(model => model.location);
    }

    get propertyValues(): readonly PropertyValue[] {
        return this.getAllValues(model => model.propertyValues);
    }

    @Memoize()
    propertyValuesByPropertyIri(propertyIri: string): readonly PropertyValue[] {
        const propertyValues: PropertyValue[] = [];
        for (const propertyValue of this.propertyValues) {
            if (propertyValue.property.iris.some(propertyValuePropertyIri => propertyValuePropertyIri === propertyIri)) {
                propertyValues.push(propertyValue);
            }
        }
        return propertyValues;
    }
}
