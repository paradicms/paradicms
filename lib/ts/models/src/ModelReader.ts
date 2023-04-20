import {AppConfiguration} from "./AppConfiguration";
import {Collection} from "./Collection";
import {Concept} from "./Concept";
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
import {WorkEvent} from "./WorkEvent";

export interface ModelReader {
  readAppConfiguration(kwds: {modelSet: ModelSet}): AppConfiguration | null;
  readCollections(kwds: {modelSet: ModelSet}): readonly Collection[];
  readConcepts(kwds: {modelSet: ModelSet}): readonly Concept[];
  readImages(kwds: {modelSet: ModelSet}): readonly Image[];
  readNamedLicenses(kwds: {modelSet: ModelSet}): readonly License[];
  readNamedLocations(kwds: {modelSet: ModelSet}): readonly Location[];
  readNamedOrganizations(kwds: {modelSet: ModelSet}): readonly Organization[];
  readNamedPeople(kwds: {modelSet: ModelSet}): readonly Person[];
  readProperties(kwds: {modelSet: ModelSet}): readonly Property[];
  readPropertyGroups(kwds: {modelSet: ModelSet}): readonly PropertyGroup[];
  readNamedRightsStatements(kwds: {
    modelSet: ModelSet;
  }): readonly RightsStatement[];
  readWorkEvents(kwds: {modelSet: ModelSet}): readonly WorkEvent[];
  readWorks(kwds: {modelSet: ModelSet}): readonly Work[];
}
