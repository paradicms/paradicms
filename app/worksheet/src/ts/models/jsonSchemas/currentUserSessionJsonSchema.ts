import * as yup from "yup";

export const currentUserSessionJsonSchema = yup.object({
  accessToken: yup.string().required(),
  expiresAt: yup.date().required(),
});
