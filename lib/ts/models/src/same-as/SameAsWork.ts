import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { AgentUnion } from "../AgentUnion";
import { PropertyValue } from "../PropertyValue";
import { SomeImageThumbnailMixin } from "../SomeImageThumbnailMixin";
import { Text } from "../Text";
import { Work } from "../Work";
import { WorkAgent } from "../WorkAgent";
import { WorkEventUnion } from "../WorkEventUnion";
import { WorkLocation } from "../WorkLocation";
import { SameAsImagesMixin } from "./SameAsImagesMixin";
import { SameAsModel } from "./SameAsModel";

export class SameAsWork extends Mixin(SameAsModel<Work>, SameAsImagesMixin<Work>, SomeImageThumbnailMixin) implements Work {
    get agents(): readonly WorkAgent[] {
        return this.getAllValues(model => model.agents);
    }

    get contributors(): readonly AgentUnion[] {
        return this.getUniqueLinkedModels(model => model.contributors);
    }

    get creators(): readonly AgentUnion[] {
        return this.getUniqueLinkedModels(model => model.creators);
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

    get wikidataConceptIri(): string | null {
        return this.getBestValue(model => model.wikidataConceptIri);
    }

    get wikipediaUrl(): string | null {
        return this.getBestValue(model => model.wikipediaUrl);
    }
}
