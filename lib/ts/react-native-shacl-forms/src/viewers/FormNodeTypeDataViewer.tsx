import * as React from "react";
import {FormNodeData, FormNodeTypeData} from "@paradicms/shacl-forms";
import {View} from "react-native";
import {Button, ListItem} from "@rneui/themed";

export const FormNodeTypeDataViewer: React.FunctionComponent<{
  formNodeTypeData: FormNodeTypeData;
  onSelectFormNode: (formNodeData: FormNodeData) => void;
}> = ({formNodeTypeData, onSelectFormNode}) => (
  <View>
    {formNodeTypeData.nodes.map(formNode => (
      <ListItem key={formNode.id}>
        <Button
          onPress={() => onSelectFormNode(formNode)}
          title={formNode.label}
        />
      </ListItem>
    ))}
  </View>
);
