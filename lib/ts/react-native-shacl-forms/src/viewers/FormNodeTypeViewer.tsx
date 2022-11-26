import * as React from "react";
import {FormNode, FormNodeType} from "@paradicms/shacl-forms";
import {View} from "react-native";
import {Button, ListItem} from "@rneui/themed";

export const FormNodeTypeViewer: React.FunctionComponent<{
  formNodeType: FormNodeType;
  onSelectFormNode: (formNode: FormNode) => void;
}> = ({formNodeType, onSelectFormNode}) => (
  <View>
    {formNodeType.nodes.map(formNode => (
      <ListItem key={formNode.id}>
        <Button
          onPress={() => onSelectFormNode(formNode)}
          title={formNode.label}
        />
      </ListItem>
    ))}
  </View>
);
