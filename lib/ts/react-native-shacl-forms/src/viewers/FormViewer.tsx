import * as React from "react";
import {Form, FormNodeType} from "@paradicms/shacl-forms";
import {View} from "react-native";
import {Button} from "@rneui/themed";

export const FormViewer: React.FunctionComponent<{
  form: Form;
  onSelectFormNodeType: (formNodeType: FormNodeType) => void;
}> = ({form, onSelectFormNodeType}) => {
  return (
    <View>
      {form.nodeTypes.map(formNodeType => (
        <Button
          key={formNodeType.id}
          onPress={() => onSelectFormNodeType(formNodeType)}
          title={formNodeType.label}
        />
      ))}
    </View>
  );
};
