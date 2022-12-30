import * as React from "react";
import {useEffect, useState} from "react";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {useFormDataApi} from "../hooks/useFormDataApi";
import {FormDataSummariesViewer} from "../components/FormDataSummariesViewer";
import {FormDataSummary} from "@paradicms/shacl-forms";

export const FormDataSummariesViewerScreen: React.FunctionComponent<FormStackScreenProps<
  "FormDataSummariesViewerScreen"
>> = ({navigation, route}) => {
  const {formDataApi} = useFormDataApi();
  const [formDataSummaries, setFormDataSummaries] = useState<
    readonly FormDataSummary[] | null
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
