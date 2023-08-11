import {Concept} from "./Concept";
import {PropertyValue} from "./PropertyValue";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {Property} from "./Property";

export class ConceptPropertyValue extends PropertyValue {
    constructor(readonly concept: Concept, property: Property) {
        super(property);
    }

    get label() {
        return this.concept.label;
    }

    override thumbnail(selector: ThumbnailSelector) {
        return this.concept.thumbnail(selector);
    }

    readonly type = "Concept";

    get value() {
        return this.concept.value.value;
    }
}

