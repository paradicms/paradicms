import * as yup from "yup";

export const userSettingsJsonSchema = yup.object({
  test: yup.string().required(),
});
