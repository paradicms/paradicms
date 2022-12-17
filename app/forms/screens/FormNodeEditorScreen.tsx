import * as React from "react";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {useForm} from "../hooks/useForm";
import {FormNodeEditor} from "@paradicms/react-native-shacl-forms";
import {createFormPropertyEditor} from "@paradicms/react-native-shacl-forms/dist/editors/createFormPropertyEditor";
import {fontAwesomeIconFactory} from "../fontAwesomeIconFactory";

export const FormNodeEditorScreen: React.FunctionComponent<FormStackScreenProps<
  "FormNodeEditorScreen"
>> = ({navigation, route}) => {
  const {dispatchForm, form} = useForm();

  if (!form) {
    return null;
  }

  const formNodeType = form.nodeTypeById(route.params.formNodeTypeId);
  const formNode = formNodeType.nodeById(route.params.formNodeId);

  return (
    <FormNodeEditor
      formPropertyEditorFactory={createFormPropertyEditor}
      formNode={formNode}
      iconFactory={fontAwesomeIconFactory}
      onChange={dispatchForm}
    />
  );
};
