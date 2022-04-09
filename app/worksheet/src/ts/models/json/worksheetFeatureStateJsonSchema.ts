import * as yup from "yup";

export const worksheetFeatureStateJsonSchema = yup.object({
  featureUri: yup.string().required(),
  selectedFeatureValueUris: yup.array(yup.string()),
  text: yup.string(),
});
