import * as React from "react";
import {FormNodeData} from "@paradicms/shacl-forms";
import {FormPropertyDataViewerFactory} from "./FormPropertyDataViewerFactory";
import {IconFactory} from "../IconFactory";
import {FormNodeDataLayout} from "../FormNodeDataLayout";

export const FormNodeDataViewer: React.FunctionComponent<{
  formNodeData: FormNodeData;
  formPropertyDataViewerFactory: FormPropertyDataViewerFactory;
  iconFactory: IconFactory;
}> = ({formPropertyDataViewerFactory, ...props}) => (
  <FormNodeDataLayout
    formPropertyDataWidgetFactory={formPropertyDataViewerFactory}
    {...props}
  />
);
