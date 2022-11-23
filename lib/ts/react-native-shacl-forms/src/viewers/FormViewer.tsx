import * as React from "react";
import {Form, FormNodeType} from "@paradicms/shacl-forms";
import {Button, View} from "react-native";

export const FormViewer: React.FunctionComponent<{
  form: Form;
  onSelectFormNodeType: (formNodeType: FormNodeType) => void;
}> = ({form, onSelectFormNodeType}) => {
  return (
    <View>
      {form.nodeTypes.map(formNodeType => (
        <Button
          key={formNodeType.rdfType.value}
          onPress={() => onSelectFormNodeType(formNodeType)}
          title={formNodeType.label}
        />
      ))}
    </View>
  );
};
