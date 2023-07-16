import {textFactories} from "./textFactories";
import {
  cc,
  crm,
  dcmitype,
  dcterms,
  foaf,
  schema,
  time,
  wikibase,
} from "@paradicms/vocabularies";
import {imageFactories} from "./imageFactories";
import {licenseFactories} from "./licenseFactories";
import {locationFactories} from "./locationFactories";
import {agentFactories} from "./agentFactories";
import {rightsStatementFactories} from "./rightsStatementFactories";
import {CreativeCommonsLicense} from "./creative-commons/CreativeCommonsLicense";
import {dateTimeDescriptionFactories} from "./dateTimeDescriptionFactories";
import {OwlTimeDateTimeDescription} from "./owl-time/OwlTimeDateTimeDescription";
import {SchemaImageObject} from "./schema/SchemaImageObject";
import {SchemaTextObject} from "./schema/SchemaTextObject";
import {FoafOrganization} from "./foaf/FoafOrganization";
import {FoafPerson} from "./foaf/FoafPerson";
import {DcRightsStatement} from "./dc/DcRightsStatement";
import {DcLicenseDocument} from "./dc/DcLicenseDocument";
import {SchemaPlace} from "./schema/SchemaPlace";
import {DcText} from "./dc/DcText";
import {DcImage} from "./dc/DcImage";
import {WikibaseTimeValue} from "./wikibase/WikibaseTimeValue";
import {LinkedArtProduction} from "./linked-art/LinkedArtProduction";
import {LinkedArtPerson} from "./linked-art/LinkedArtPerson";
import {LinkedArtRight} from "./linked-art/LinkedArtRight";
import {LinkedArtLinguisticAppellation} from "./linked-art/LinkedArtLinguisticAppellation";
import {LinkedArtLinguisticObject} from "./linked-art/LinkedArtLinguisticObject";
import {LinkedArtVisualItem} from "./linked-art/LinkedArtVisualItem";
import {LinkedArtTimeSpan} from "./linked-art/LinkedArtTimeSpan";
import {linkedArtModelFactories} from "./linked-art/linkedArtModelFactories";

export const registerResourceBackedModelFactories = () => {
  agentFactories.register(foaf.Organization, FoafOrganization);
  agentFactories.register(foaf.Person, FoafPerson);

  dateTimeDescriptionFactories.register(
    time.DateTimeDescription,
    OwlTimeDateTimeDescription
  );
  dateTimeDescriptionFactories.register(wikibase.TimeValue, WikibaseTimeValue);

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
