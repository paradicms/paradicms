import * as React from "react";
import {useEffect, useState} from "react";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {useFormShapeApi} from "../hooks/useFormShapeApi";
import {AppFormShapeSummary} from "../models/AppFormShapeSummary";
import {FormShapeSummariesViewer} from "../components/FormShapeSummariesViewer";

export const FormShapeSummariesViewerScreen: React.FunctionComponent<FormStackScreenProps<
  "FormShapeSummariesViewerScreen"
>> = ({navigation, route}) => {
  const {formShapeApi} = useFormShapeApi();
  const [formShapeSummaries, setFormShapeSummaries] = useState<
    readonly AppFormShapeSummary[] | null
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
        navigation.navigate("FormDataSummariesViewerScreen", {
          formShape: {
            id: formShapeSummary.id,
            label: formShapeSummary.label,
          },
        })
      }
    />
  );
};
