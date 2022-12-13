import * as React from "react";
import {ScrollView} from "react-native";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {useForm} from "../hooks/useForm";
import {FormNodeViewer} from "@paradicms/react-native-shacl-forms/dist/viewers/FormNodeViewer";
import {createFormPropertyViewer} from "@paradicms/react-native-shacl-forms/dist/viewers/createFormPropertyViewer";
import {FontAwesomeIcons} from "../FontAwesomeIcons";

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
    <ScrollView>
      <FormNodeViewer
        formNode={formNode}
        formPropertyViewerFactory={createFormPropertyViewer}
        icons={FontAwesomeIcons}
      />
    </ScrollView>
  );
};
