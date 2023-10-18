import { schema } from "@paradicms/vocabularies";
import { Collection } from "../Collection";
import { Concept } from "../Concept";
import { DatasetModelReader } from "../DatasetModelReader";
import { Event } from "../Event";
import { Image } from "../Image";
import { Location } from "../Location";
import { ModelSet } from "../ModelSet";
import { Organization } from "../Organization";
import { Person } from "../Person";
import { Property } from "../Property";
import { Work } from "../Work";
import { SchemaCollection } from "./SchemaCollection";
import { SchemaCreativeWork } from "./SchemaCreativeWork";
import { SchemaDefinedTerm } from "./SchemaDefinedTerm";
import { SchemaEvent } from "./SchemaEvent";
import { SchemaExhibitionEvent } from "./SchemaExhibitionEvent";
import { SchemaImageObject } from "./SchemaImageObject";
import { SchemaOrganization } from "./SchemaOrganization";
import { SchemaPerson } from "./SchemaPerson";
import { SchemaPlace } from "./SchemaPlace";
import { SchemaProperty } from "./SchemaProperty";

export class SchemaModelReader extends DatasetModelReader {
    override readCollections(kwds: { modelSet: ModelSet }): readonly Collection[] {
        return this.readModels<Collection>({class_: schema.Collection, factory: SchemaCollection, modelSet: kwds.modelSet})
    }

    override readConcepts(kwds: { modelSet: ModelSet }): readonly Concept[] {
        return this.readModels<Concept>({class_: schema.DefinedTerm, factory: SchemaDefinedTerm, modelSet: kwds.modelSet})
    }

    override readEvents(kwds: { modelSet: ModelSet }): readonly Event[] {
        return [
            ...this.readModels<SchemaEvent>({class_: schema.Event, factory: SchemaEvent, includeSubclasses: false, modelSet: kwds.modelSet}),
            ...this.readModels<SchemaExhibitionEvent>({class_: schema.ExhibitionEvent, factory: SchemaExhibitionEvent, modelSet: kwds.modelSet}),
        ];
    }

    override readImages(kwds: { modelSet: ModelSet }): readonly Image[] {
        return this.readModels<Image>({class_: schema.ImageObject, factory: SchemaImageObject, modelSet: kwds.modelSet})
    }

    override readNamedLocations(kwds: { modelSet: ModelSet }): readonly Location[] {
        return this.readModels<Location>({class_: schema.Place, factory: SchemaPlace, modelSet: kwds.modelSet})
    }

    override readNamedOrganizations(kwds: { modelSet: ModelSet }): readonly Organization[] {
        return this.readModels<Organization>({class_: schema.Organization, factory: SchemaOrganization, modelSet: kwds.modelSet})
    }

    override readNamedPeople(kwds: { modelSet: ModelSet }): readonly Person[] {
        return this.readModels<Person>({class_: schema.Person, factory: SchemaPerson, modelSet: kwds.modelSet})
    }

    override readProperties(kwds: { modelSet: ModelSet }): readonly Property[] {
        return this.readModels<Property>({class_: schema.Property, factory: SchemaProperty, modelSet: kwds.modelSet})
    }

    override readWorks(kwds: { modelSet: ModelSet }): readonly Work[] {
        return this.readModels<Work>({class_: schema.CreativeWork, factory: SchemaCreativeWork, modelSet: kwds.modelSet})
    }
}
