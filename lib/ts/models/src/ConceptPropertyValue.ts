import { Concept } from "./Concept";
import { PropertyValue } from "./PropertyValue";
import { ThumbnailSelector } from "./ThumbnailSelector";

export class ConceptPropertyValue extends PropertyValue {
    constructor(readonly concept: Concept) {
        super();
    }

    get label() {
        return this.concept.label;
    }

    override thumbnail(selector: ThumbnailSelector) {
        return this.concept.thumbnail(selector);
    }

    get value() {
        return this.concept.value.value;
    }
}

