import {AppConfiguration} from "./AppConfiguration";
import {Collection} from "./Collection";
import {Concept} from "./Concept";
import {Event} from "./Event";
import {Image} from "./Image";
import {License} from "./License";
import {Location} from "./Location";
import {ModelSet} from "./ModelSet";
import {Organization} from "./Organization";
import {Person} from "./Person";
import {Property} from "./Property";
import {PropertyGroup} from "./PropertyGroup";
import {RightsStatement} from "./RightsStatement";
import {Work} from "./Work";

export interface ModelReader {
  readAppConfiguration(kwds: {modelSet: ModelSet}): AppConfiguration | null;
  readCollections(kwds: {modelSet: ModelSet}): readonly Collection[];
  readConcepts(kwds: {modelSet: ModelSet}): readonly Concept[];
  readEvents(kwds: {modelSet: ModelSet}): readonly Event[];
  readImages(kwds: {modelSet: ModelSet}): readonly Image[];
  readNamedLicenses(kwds: {modelSet: ModelSet}): readonly License[];
  readNamedLocations(kwds: {modelSet: ModelSet}): readonly Location[];
  readNamedOrganizations(kwds: {modelSet: ModelSet}): readonly Organization[];
  readNamedPeople(kwds: {modelSet: ModelSet}): readonly Person[];
  readNamedRightsStatements(kwds: {
    modelSet: ModelSet;
  }): readonly RightsStatement[];
  readProperties(kwds: {modelSet: ModelSet}): readonly Property[];
  readPropertyGroups(kwds: {modelSet: ModelSet}): readonly PropertyGroup[];
  readWorks(kwds: {modelSet: ModelSet}): readonly Work[];
}
