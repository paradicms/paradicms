import * as React from "react";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {useFormData} from "../hooks/useFormData";
import {fontAwesomeIconFactory} from "../fontAwesomeIconFactory";
import {
  createFormPropertyDataViewer,
  FormNodeDataViewer,
} from "@paradicms/react-native-shacl-forms";

export const FormNodeDataViewerScreen: React.FunctionComponent<FormStackScreenProps<
  "FormNodeDataViewerScreen"
>> = ({navigation, route}) => {
  const {error, formData} = useFormData(route.params.formData.id);

  if (error) {
    navigation.navigate("FormErrorViewerScreen", {...route.params, error});
    return null;
  }

  if (!formData) {
    return null;
  }

  const formNodeTypeData = formData.nodeTypeById(
    route.params.formNodeTypeData.id
  );
  const formNodeData = formNodeTypeData.nodeById(route.params.formNodeData.id);

  return (
    <FormNodeDataViewer
      formNodeData={formNodeData}
      formPropertyDataViewerFactory={createFormPropertyDataViewer}
      iconFactory={fontAwesomeIconFactory}
    />
  );
};
