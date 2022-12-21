import * as React from "react";
import {FormData, FormNodeTypeData} from "@paradicms/shacl-forms";
import {View} from "react-native";
import {Button, ListItem} from "@rneui/themed";

export const FormDataViewer: React.FunctionComponent<{
  formData: FormData;
  onSelectFormNodeType: (formNodeTypeData: FormNodeTypeData) => void;
}> = ({formData, onSelectFormNodeType}) => {
  return (
    <View>
      {formData.nodeTypes.map(formNodeType => (
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
