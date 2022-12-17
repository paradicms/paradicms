import * as React from "react";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {useForm} from "../hooks/useForm";
import {FormNodeViewer} from "@paradicms/react-native-shacl-forms/dist/viewers/FormNodeViewer";
import {createFormPropertyViewer} from "@paradicms/react-native-shacl-forms/dist/viewers/createFormPropertyViewer";
import {fontAwesomeIconFactory} from "../fontAwesomeIconFactory";

export const FormNodeViewerScreen: React.FunctionComponent<FormStackScreenProps<
  "FormNodeViewerScreen"
>> = ({navigation, route}) => {
  const {form} = useForm();

  if (!form) {
    return null;
  }

  const formNodeType = form.nodeTypeById(route.params.formNodeTypeId);
  const formNode = formNodeType.nodeById(route.params.formNodeId);

  return (
    <FormNodeViewer
      formNode={formNode}
      formPropertyViewerFactory={createFormPropertyViewer}
      iconFactory={fontAwesomeIconFactory}
    />
  );
};
