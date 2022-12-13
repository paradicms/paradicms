import * as React from "react";
import {FormNode} from "@paradicms/shacl-forms";
import {ListItem} from "@rneui/themed";
import {FormPropertyViewerFactory} from "./FormPropertyViewerFactory";
import {IconFactory} from "../IconFactory";

export const FormNodeViewer: React.FunctionComponent<{
  formNode: FormNode;
  formPropertyViewerFactory: FormPropertyViewerFactory;
  iconFactory: IconFactory;
}> = ({formNode, formPropertyViewerFactory, iconFactory}) => {
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
          {formPropertyViewerFactory({formProperty, iconFactory})}
        </ListItem>
      ))}
    </>
  );
};
