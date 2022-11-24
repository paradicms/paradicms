import * as React from "react";
import {FormNode} from "@paradicms/shacl-forms";
import {View} from "react-native";
import {createFormPropertyEditor} from "./createFormPropertyEditor";
import {Text} from "@rneui/themed";

export const FormNodeEditor: React.FunctionComponent<{
  formNode: FormNode;
  onChange: () => void;
}> = ({formNode, onChange}) => {
  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <Text>{formNode.dataGraphNode.value}</Text>
      {formNode.properties.map(formProperty =>
        createFormPropertyEditor({formProperty, onChange})
      )}
    </View>
  );
};
