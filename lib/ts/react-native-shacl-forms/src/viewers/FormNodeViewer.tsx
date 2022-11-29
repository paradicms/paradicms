import * as React from "react";
import {FormNode} from "@paradicms/shacl-forms";
import {ScrollView} from "react-native";
import {ListItem} from "@rneui/themed";
import {FormPropertyViewerFactory} from "./FormPropertyViewerFactory";

export const FormNodeViewer: React.FunctionComponent<{
  formNode: FormNode;
  formPropertyViewerFactory: FormPropertyViewerFactory;
}> = ({formNode, formPropertyViewerFactory}) => {
  const formProperties = formNode.properties;
  return (
    <ScrollView>
      {formProperties.map((formProperty, formPropertyI) => (
        <ListItem
          bottomDivider={
            formPropertyI + 1 < formProperties.length ? true : undefined
          }
          key={formProperty.id}
        >
          {formPropertyViewerFactory({formProperty})}
        </ListItem>
      ))}
    </ScrollView>
  );
};
