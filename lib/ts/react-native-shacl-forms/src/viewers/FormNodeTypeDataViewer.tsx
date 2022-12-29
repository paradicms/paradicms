import * as React from "react";
import {FormNodeData, FormNodeTypeData} from "@paradicms/shacl-forms";
import {View} from "react-native";
import {Button, ListItem} from "@rneui/themed";

export const FormNodeTypeDataViewer: React.FunctionComponent<{
  formNodeTypeData: FormNodeTypeData;
  onSelectFormNodeData: (formNodeData: FormNodeData) => void;
}> = ({formNodeTypeData, onSelectFormNodeData}) => (
  <View>
    {formNodeTypeData.nodes.map(formNode => (
      <ListItem key={formNode.id}>
        <Button
          onPress={() => onSelectFormNodeData(formNode)}
          title={formNode.label}
        />
      </ListItem>
    ))}
  </View>
);
