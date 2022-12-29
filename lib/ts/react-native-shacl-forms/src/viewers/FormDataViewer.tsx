import * as React from "react";
import {FormData, FormNodeTypeData} from "@paradicms/shacl-forms";
import {View} from "react-native";
import {Button, ListItem} from "@rneui/themed";

export const FormDataViewer: React.FunctionComponent<{
  formData: FormData;
  onSelectFormNodeTypeData: (formNodeTypeData: FormNodeTypeData) => void;
}> = ({formData, onSelectFormNodeTypeData}) => {
  return (
    <View>
      {formData.nodeTypes.map(formNodeType => (
        <ListItem bottomDivider key={formNodeType.id}>
          <Button
            onPress={() => onSelectFormNodeTypeData(formNodeType)}
            title={formNodeType.label}
          />
        </ListItem>
      ))}
    </View>
  );
};
