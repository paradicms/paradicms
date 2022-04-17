import * as yup from "yup";

export const userJsonSchema = yup.object({
  emailAddress: yup.string().required(),
  emailAddressVerified: yup.boolean(),
  familyName: yup.string(),
  givenName: yup.string(),
  identityProvider: yup.number().required(),
  identityProviderId: yup.string().required(),
  locale: yup.string(),
  name: yup.string(),
  pictureUrl: yup.string(),
});
