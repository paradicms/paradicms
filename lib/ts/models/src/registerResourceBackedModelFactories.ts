import {textFactories} from "./textFactories";
import {cc, cms, dcterms, foaf, schema, time} from "@paradicms/vocabularies";
import {CmsText} from "./cms/CmsText";
import {imageFactories} from "./imageFactories";
import {CmsImage} from "./cms/CmsImage";
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

export const registerResourceBackedModelFactories = () => {
  agentFactories.register(foaf.Organization, FoafOrganization);
  agentFactories.register(foaf.Person, FoafPerson);

  dateTimeDescriptionFactories.register(
    time.DateTimeDescription,
    OwlTimeDateTimeDescription
  );

  imageFactories.register(cms.Image, CmsImage);
  imageFactories.register(schema.ImageObject, SchemaImageObject);

  licenseFactories.register(dcterms.LicenseDocument, DcLicenseDocument);
  licenseFactories.register(cc.License, CreativeCommonsLicense);

  locationFactories.register(schema.Place, SchemaPlace);

  rightsStatementFactories.register(dcterms.RightsStatement, DcRightsStatement);

  textFactories.register(cms.Text, CmsText);
  textFactories.register(schema.TextObject, SchemaTextObject);
};
