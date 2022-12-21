import * as React from "react";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {useFormData} from "../hooks/useFormData";
import {fontAwesomeIconFactory} from "../fontAwesomeIconFactory";
import {
  createFormPropertyDataEditor,
  FormNodeDataEditor,
} from "@paradicms/react-native-shacl-forms";

export const FormNodeDataEditorScreen: React.FunctionComponent<FormStackScreenProps<
  "FormNodeDataEditorScreen"
>> = ({navigation, route}) => {
  const {dispatchForm, formData} = useFormData();

  if (!formData) {
    return null;
  }

  const formNodeTypeData = formData.nodeTypeById(route.params.formNodeTypeId);
  const formNodeData = formNodeTypeData.nodeById(route.params.formNodeId);

  return (
    <FormNodeDataEditor
      formPropertyDataEditorFactory={createFormPropertyDataEditor}
      formNodeData={formNodeData}
      iconFactory={fontAwesomeIconFactory}
      onChange={dispatchForm}
    />
  );
};
