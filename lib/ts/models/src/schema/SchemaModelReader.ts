import {DatasetModelReader} from "../DatasetModelReader";
import {Collection} from "../Collection";
import {ModelSet} from "../ModelSet";
import {schema} from "@paradicms/vocabularies";
import {SchemaCollection} from "./SchemaCollection";
import {Event} from "../Event";
import {Work} from "../Work";
import {SchemaCreativeWork} from "./SchemaCreativeWork";
import {Property} from "../Property";
import {SchemaProperty} from "./SchemaProperty";
import {Image} from "../Image";
import {SchemaImageObject} from "./SchemaImageObject";
import {Concept} from "../Concept";
import {SchemaDefinedTerm} from "./SchemaDefinedTerm";
import {Person} from "../Person";
import {SchemaPerson} from "./SchemaPerson";
import {Organization} from "../Organization";
import {SchemaOrganization} from "./SchemaOrganization";
import {Location} from "../Location";
import {SchemaPlace} from "./SchemaPlace";
import {SchemaEvent} from "./SchemaEvent";
import {SchemaExhibitionEvent} from "./SchemaExhibitionEvent";

export class SchemaModelReader extends DatasetModelReader {
    override readCollections(kwds: { modelSet: ModelSet }): readonly Collection[] {
        return this.readNamedModels<Collection>({class_: schema.Collection, factory: SchemaCollection, modelSet: kwds.modelSet})
    }

    override readConcepts(kwds: { modelSet: ModelSet }): readonly Concept[] {
        return this.readNamedModels<Concept>({class_: schema.DefinedTerm, factory: SchemaDefinedTerm, modelSet: kwds.modelSet})
    }

    override readEvents(kwds: { modelSet: ModelSet }): readonly Event[] {
        return [
            ...this.readModels<SchemaEvent>({class_: schema.Event, factory: SchemaEvent, modelSet: kwds.modelSet}),
            ...this.readModels<SchemaExhibitionEvent>({class_: schema.ExhibitionEvent, factory: SchemaEvent, modelSet: kwds.modelSet}),
        ];
    }

    override readImages(kwds: { modelSet: ModelSet }): readonly Image[] {
        return this.readNamedModels<Image>({class_: schema.ImageObject, factory: SchemaImageObject, modelSet: kwds.modelSet})
    }

    override readNamedLocations(kwds: { modelSet: ModelSet }): readonly Location[] {
        return this.readNamedModels<Location>({class_: schema.Place, factory: SchemaPlace, modelSet: kwds.modelSet})
    }

    override readNamedOrganizations(kwds: { modelSet: ModelSet }): readonly Organization[] {
        return this.readNamedModels<Organization>({class_: schema.Organization, factory: SchemaOrganization, modelSet: kwds.modelSet})
    }

    override readNamedPeople(kwds: { modelSet: ModelSet }): readonly Person[] {
        return this.readNamedModels<Person>({class_: schema.Person, factory: SchemaPerson, modelSet: kwds.modelSet})
    }

    override readProperties(kwds: { modelSet: ModelSet }): readonly Property[] {
        return this.readNamedModels<Property>({class_: schema.Property, factory: SchemaProperty, modelSet: kwds.modelSet})
    }

    override readWorks(kwds: { modelSet: ModelSet }): readonly Work[] {
        return this.readNamedModels<Work>({class_: schema.CreativeWork, factory: SchemaCreativeWork, modelSet: kwds.modelSet})
    }
}
