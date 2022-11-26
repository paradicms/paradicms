import * as React from "react";
import {Form, FormNodeType} from "@paradicms/shacl-forms";
import {View} from "react-native";
import {Button, ListItem} from "@rneui/themed";

export const FormViewer: React.FunctionComponent<{
  form: Form;
  onSelectFormNodeType: (formNodeType: FormNodeType) => void;
}> = ({form, onSelectFormNodeType}) => {
  return (
    <View>
      {form.nodeTypes.map(formNodeType => (
        <ListItem bottomDivider key={formNodeType.id}>
          <Button
            onPress={() => onSelectFormNodeType(formNodeType)}
            title={formNodeType.label}
          />
        </ListItem>
      ))}
    </View>
  );
};
