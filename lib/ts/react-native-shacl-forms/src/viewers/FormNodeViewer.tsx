import * as React from "react";
import {FormNode} from "@paradicms/shacl-forms";
import {ListItem} from "@rneui/themed";
import {FormPropertyViewerFactory} from "./FormPropertyViewerFactory";
import {Icons} from "../Icons";

export const FormNodeViewer: React.FunctionComponent<{
  formNode: FormNode;
  formPropertyViewerFactory: FormPropertyViewerFactory;
  icons: Icons;
}> = ({formNode, formPropertyViewerFactory, icons}) => {
  const formProperties = formNode.properties;
  return (
    <>
      {formNode.properties.map((formProperty, formPropertyI) => (
        <ListItem
          bottomDivider={
            formPropertyI + 1 < formProperties.length ? true : undefined
          }
          key={formProperty.id}
        >
          {formPropertyViewerFactory({formProperty, icons})}
        </ListItem>
      ))}
    </>
  );
};
