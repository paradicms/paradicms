import * as React from "react";
import {useEffect, useState} from "react";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {useFormShapeApi} from "../hooks/useFormShapeApi";
import {FormShapeSummariesViewer} from "../components/FormShapeSummariesViewer";
import {FormShapeSummary} from "@paradicms/shacl-forms";

export const FormShapeSummariesViewerScreen: React.FunctionComponent<FormStackScreenProps<
  "FormShapeSummariesViewerScreen"
>> = ({navigation, route}) => {
  const {formShapeApi} = useFormShapeApi();
  const [formShapeSummaries, setFormShapeSummaries] = useState<
    readonly FormShapeSummary[] | null
  >(null);

  useEffect(() => {
    if (formShapeApi) {
      formShapeApi.getFormShapeSummaries().then(setFormShapeSummaries);
    }
  }, [formShapeApi]);

  if (!formShapeSummaries) {
    return null;
  }

  return (
    <FormShapeSummariesViewer
      formShapeSummaries={formShapeSummaries}
      onSelectFormShapeSummary={formShapeSummary =>
        navigation.push("FormDataSummariesViewerScreen", {
          formShape: formShapeSummary,
        })
      }
    />
  );
};
