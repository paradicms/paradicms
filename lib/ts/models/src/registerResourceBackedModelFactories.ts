import {
  cc,
  crm,
  dcmitype,
  dcterms,
  foaf,
  schema,
  skos,
  time,
  wikibase,
} from "@paradicms/vocabularies";
import {agentFactories} from "./agentFactories";
import {conceptFactories} from "./conceptFactories";
import {CreativeCommonsLicense} from "./creative-commons/CreativeCommonsLicense";
import {DcImage} from "./dc/DcImage";
import {DcLicenseDocument} from "./dc/DcLicenseDocument";
import {DcRightsStatement} from "./dc/DcRightsStatement";
import {DcText} from "./dc/DcText";
import {FoafOrganization} from "./foaf/FoafOrganization";
import {FoafPerson} from "./foaf/FoafPerson";
import {imageFactories} from "./imageFactories";
import {licenseFactories} from "./licenseFactories";
import {LinkedArtLinguisticAppellation} from "./linked-art/LinkedArtLinguisticAppellation";
import {LinkedArtLinguisticObject} from "./linked-art/LinkedArtLinguisticObject";
import {LinkedArtPerson} from "./linked-art/LinkedArtPerson";
import {LinkedArtProduction} from "./linked-art/LinkedArtProduction";
import {LinkedArtRight} from "./linked-art/LinkedArtRight";
import {LinkedArtTimeSpan} from "./linked-art/LinkedArtTimeSpan";
import {LinkedArtVisualItem} from "./linked-art/LinkedArtVisualItem";
import {linkedArtModelFactories} from "./linked-art/linkedArtModelFactories";
import {locationFactories} from "./locationFactories";
import {OwlTimePartialDateTimeDescription} from "./owl-time/OwlTimePartialDateTimeDescription";
import {partialDateTimeDescriptionFactories} from "./partialDateTimeDescriptionFactories";
import {rightsStatementFactories} from "./rightsStatementFactories";
import {SchemaDefinedTerm} from "./schema/SchemaDefinedTerm";
import {SchemaImageObject} from "./schema/SchemaImageObject";
import {SchemaPlace} from "./schema/SchemaPlace";
import {SchemaTextObject} from "./schema/SchemaTextObject";
import {SkosConcept} from "./skos/SkosConcept";
import {textFactories} from "./textFactories";
import {WikibaseTimeValue} from "./wikibase/WikibaseTimeValue";

export const registerResourceBackedModelFactories = () => {
  agentFactories.register(foaf.Organization, FoafOrganization);
  agentFactories.register(foaf.Person, FoafPerson);

  conceptFactories.register(skos.Concept, SkosConcept);
  conceptFactories.register(schema.DefinedTerm, SchemaDefinedTerm);

  partialDateTimeDescriptionFactories.register(
    time.DateTimeDescription,
    OwlTimePartialDateTimeDescription
  );
  partialDateTimeDescriptionFactories.register(
    wikibase.TimeValue,
    WikibaseTimeValue
  );

  imageFactories.register(dcmitype.Image, DcImage);
  imageFactories.register(schema.ImageObject, SchemaImageObject);

  licenseFactories.register(dcterms.LicenseDocument, DcLicenseDocument);
  licenseFactories.register(cc.License, CreativeCommonsLicense);

  linkedArtModelFactories.register(crm.E12_Production, LinkedArtProduction);
  linkedArtModelFactories.register(crm.E21_Person, LinkedArtPerson);
  linkedArtModelFactories.register(crm.E30_Right, LinkedArtRight);
  linkedArtModelFactories.register(
    crm.E33_E41_Linguistic_Appellation,
    LinkedArtLinguisticAppellation
  );
  linkedArtModelFactories.register(
    crm.E33_Linguistic_Object,
    LinkedArtLinguisticObject
  );
  linkedArtModelFactories.register(crm.E36_Visual_Item, LinkedArtVisualItem);
  linkedArtModelFactories.register(crm["E52_Time-Span"], LinkedArtTimeSpan);

  locationFactories.register(schema.Place, SchemaPlace);

  rightsStatementFactories.register(dcterms.RightsStatement, DcRightsStatement);

  textFactories.register(dcmitype.Text, DcText);
  textFactories.register(schema.TextObject, SchemaTextObject);
};
