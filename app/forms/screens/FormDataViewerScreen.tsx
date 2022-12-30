import * as React from "react";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {FormDataViewer} from "@paradicms/react-native-shacl-forms";
import {useFormData} from "../hooks/useFormData";
import {CenteredView} from "../components/CenteredView";

export const FormDataViewerScreen: React.FunctionComponent<FormStackScreenProps<
  "FormDataViewerScreen"
>> = ({navigation, route}) => {
  const {error, formData} = useFormData(route.params.formData.id);

  if (error) {
    navigation.navigate("FormErrorViewerScreen", {
      ...route.params,
      formNodeData: null,
      formNodeTypeData: null,
      error,
    });
    return null;
  }

  if (!formData) {
    return null;
  }

  return (
    <CenteredView>
      <FormDataViewer
        formData={formData}
        onSelectFormNodeTypeData={formNodeTypeData =>
          navigation.push("FormNodeTypeDataViewerScreen", {
            ...route.params,
            formNodeTypeData: formNodeTypeData.summary,
          })
        }
      />
    </CenteredView>
  );
};
