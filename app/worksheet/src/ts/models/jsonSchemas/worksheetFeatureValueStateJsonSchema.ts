import * as yup from "yup";

export const worksheetFeatureValueStateJsonSchema = yup.object({
  selected: yup.boolean(),
  uri: yup.string().required(),
});
