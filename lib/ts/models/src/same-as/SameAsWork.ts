import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { Agent } from "../Agent";
import { PropertyValue } from "../PropertyValue";
import { SomeImageThumbnailMixin } from "../SomeImageThumbnailMixin";
import { Text } from "../Text";
import { Work } from "../Work";
import { WorkAgent } from "../WorkAgent";
import { WorkEvent } from "../WorkEvent";
import { WorkLocation } from "../WorkLocation";
import { WorkSubject } from "../WorkSubject";
import { SameAsImagesMixin } from "./SameAsImagesMixin";
import { SameAsModel } from "./SameAsModel";

export class SameAsWork extends Mixin(SameAsModel<Work>, SameAsImagesMixin<Work>, SomeImageThumbnailMixin) implements Work {
    get agents(): readonly WorkAgent[] {
        return this.getAllValues(model => model.agents);
    }

    get contributors(): readonly Agent[] {
        return this.getUniqueLinkedModels(model => model.contributors);
    }

    get creators(): readonly Agent[] {
        return this.getUniqueLinkedModels(model => model.creators);
    }

    get description(): Text | null {
        return this.getBestValue(model => model.description);
    }

    get displayDate(): string | null {
        return this.getBestValue(model => model.displayDate);
    }

    get events(): readonly WorkEvent[] {
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

    get subjects(): readonly WorkSubject[] {
        return this.getAllValues(model => model.subjects);
    }

    get wikidataConceptIri(): string | null {
        return this.getBestValue(model => model.wikidataConceptIri);
    }

    get wikipediaUrl(): string | null {
        return this.getBestValue(model => model.wikipediaUrl);
    }
}
