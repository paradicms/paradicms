import {textFactories} from "./textFactories";
import {cc, cms, dcterms, schema, time} from "@paradicms/vocabularies";
import {CmsText} from "./cms/CmsText";
import {imageFactories} from "./imageFactories";
import {CmsImage} from "./cms/CmsImage";
import {licenseFactories} from "./licenseFactories";
import {CmsLicense} from "./cms/CmsLicense";
import {locationFactories} from "./locationFactories";
import {CmsLocation} from "./cms/CmsLocation";
import {agentFactories} from "./agentFactories";
import {CmsOrganization} from "./cms/CmsOrganization";
import {CmsPerson} from "./cms/CmsPerson";
import {rightsStatementFactories} from "./rightsStatementFactories";
import {CmsRightsStatement} from "./cms/CmsRightsStatement";
import {CreativeCommonsLicense} from "./creative-commons/CreativeCommonsLicense";
import {dateTimeDescriptionFactories} from "./dateTimeDescriptionFactories";
import {OwlTimeDateTimeDescription} from "./owl-time/OwlTimeDateTimeDescription";
import {RightsStatementsDotOrgRightsStatement} from "./rights-statements-dot-org/RightsStatementsDotOrgRightsStatement";
import {SchemaImageObject} from "./schema/SchemaImageObject";
import {workEventFactories} from "./workEventFactories";
import {CmsWorkClosing} from "./cms/CmsWorkClosing";
import {CmsWorkCreation} from "./cms/CmsWorkCreation";
import {CmsWorkOpening} from "./cms/CmsWorkOpening";

export const registerResourceBackedModelFactories = () => {
  agentFactories.register(cms.Organization, CmsOrganization);
  agentFactories.register(cms.Person, CmsPerson);

  dateTimeDescriptionFactories.register(
    time.DateTimeDescription,
    OwlTimeDateTimeDescription
  );

  imageFactories.register(cms.Image, CmsImage);
  imageFactories.register(schema.ImageObject, SchemaImageObject);

  licenseFactories.register(cms.License, CmsLicense);
  licenseFactories.register(cc.License, CreativeCommonsLicense);

  locationFactories.register(cms.Location, CmsLocation);

  rightsStatementFactories.register(cms.RightsStatement, CmsRightsStatement);
  rightsStatementFactories.register(
    dcterms.RightsStatement,
    RightsStatementsDotOrgRightsStatement
  );

  textFactories.register(cms.Text, CmsText);

  workEventFactories.register(cms.WorkClosing, CmsWorkClosing);
  workEventFactories.register(cms.WorkCreation, CmsWorkCreation);
  workEventFactories.register(cms.WorkOpening, CmsWorkOpening);
};
