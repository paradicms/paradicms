import * as yup from "yup";

export const userJsonSchema = yup.object({
  emailAddress: yup.string().required(),
  emailAddressVerified: yup.boolean(),
  familyName: yup.string(),
  givenName: yup.string(),
  id: yup.string().required(),
  identityProvider: yup.number().required(),
  locale: yup.string(),
  name: yup.string(),
  nickname: yup.string(),
  pictureUrl: yup.string(),
});
