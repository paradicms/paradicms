import * as React from "react";
import {FormNode} from "@paradicms/shacl-forms";
import {FormPropertyViewerFactory} from "./FormPropertyViewerFactory";
import {IconFactory} from "../IconFactory";
import {FormNodeLayout} from "../FormNodeLayout";

export const FormNodeViewer: React.FunctionComponent<{
  formNode: FormNode;
  formPropertyViewerFactory: FormPropertyViewerFactory;
  iconFactory: IconFactory;
}> = ({formPropertyViewerFactory, ...props}) => (
  <FormNodeLayout
    formPropertyWidgetFactory={formPropertyViewerFactory}
    {...props}
  />
);
