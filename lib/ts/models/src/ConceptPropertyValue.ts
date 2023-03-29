import {Concept} from "./Concept";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {PropertyValue} from "./PropertyValue";

export class ConceptPropertyValue extends PropertyValue {
    constructor(readonly concept: Concept) {
        super();
    }

    get label() {
        return this.concept.prefLabel ?? this.value;
    }

    override thumbnail(selector: ThumbnailSelector) {
        return this.concept.thumbnail(selector);
    }

    get value() {
        return this.concept.value.value;
    }
}

