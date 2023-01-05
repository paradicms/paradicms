import * as React from "react";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {useFormData} from "../hooks/useFormData";
import {FormNodeTypeDataViewer} from "@paradicms/react-native-shacl-forms";
import {CenteredView} from "../components/CenteredView";

export const FormNodeTypeDataViewerScreen: React.FunctionComponent<FormStackScreenProps<
  "FormNodeTypeDataViewerScreen"
>> = ({navigation, route}) => {
  const {error, formData} = useFormData(route.params.formData.id);

  if (error) {
    navigation.navigate("FormErrorViewerScreen", {
      ...route.params,
      formNodeData: null,
      error,
    });
    return null;
  }

  if (!formData) {
    return null;
  }

  const formNodeTypeData = formData.nodeTypeById(
    route.params.formNodeTypeData.id
  );

  return (
    <CenteredView>
      <FormNodeTypeDataViewer
        formNodeTypeData={formNodeTypeData}
        onSelectFormNodeData={formNodeData =>
          navigation.push("FormNodeDataViewerScreen", {
            ...route.params,
            formNodeData: formNodeData.summary,
          })
        }
      />
    </CenteredView>
  );
};
