import * as React from "react";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {fontAwesomeIconFactory} from "../fontAwesomeIconFactory";
import {
  createFormPropertyDataEditor,
  FormNodeDataEditor,
} from "@paradicms/react-native-shacl-forms";
import {useFormData} from "../hooks/useFormData";

export const FormNodeDataEditorScreen: React.FunctionComponent<FormStackScreenProps<
  "FormNodeDataEditorScreen"
>> = ({navigation, route}) => {
  const {error, formData, saveFormData} = useFormData(route.params.formData.id);

  if (error) {
    navigation.navigate("FormErrorScreen", {...route.params, error});
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
    <FormNodeDataEditor
      formPropertyDataEditorFactory={createFormPropertyDataEditor}
      formNodeData={formNodeData}
      iconFactory={fontAwesomeIconFactory}
      onChange={saveFormData}
    />
  );
};
