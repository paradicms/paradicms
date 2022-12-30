import * as React from "react";
import {useEffect, useState} from "react";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {useFormDataApi} from "../hooks/useFormDataApi";
import {FormDataSummariesViewer} from "../components/FormDataSummariesViewer";
import {AppFormDataSummary} from "../models/AppFormDataSummary";

export const FormDataSummariesViewerScreen: React.FunctionComponent<FormStackScreenProps<
  "FormDataSummariesViewerScreen"
>> = ({navigation, route}) => {
  const {formDataApi} = useFormDataApi();
  const [formDataSummaries, setFormDataSummaries] = useState<
    readonly AppFormDataSummary[] | null
  >(null);

  useEffect(() => {
    if (formDataApi) {
      formDataApi.getFormDataSummaries().then(setFormDataSummaries);
    }
  }, [formDataApi]);

  if (!formDataSummaries) {
    return null;
  }

  return (
    <FormDataSummariesViewer
      formDataSummaries={formDataSummaries}
      onSelectFormDataSummary={formDataSummary =>
        navigation.push("FormDataViewerScreen", {
          formData: {
            id: formDataSummary.id,
            label: formDataSummary.label,
          },
        })
      }
    />
  );
};
