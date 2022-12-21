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
>> = ({route}) => {
  const {formData} = useFormData();

  if (!formData) {
    return null;
  }

  const formNodeTypeData = formData.nodeTypeById(route.params.formNodeTypeId);
  const formNodeData = formNodeTypeData.nodeById(route.params.formNodeId);

  return (
    <FormNodeDataViewer
      formNodeData={formNodeData}
      formPropertyDataViewerFactory={createFormPropertyDataViewer}
      iconFactory={fontAwesomeIconFactory}
    />
  );
};
