import * as React from "react";
import {FormNodeData} from "@paradicms/shacl-forms";
import {FormNodeDataLayout} from "../FormNodeDataLayout";
import {FormPropertyDataEditorFactory} from "./FormPropertyDataEditorFactory";
import {IconFactory} from "../IconFactory";

export const FormNodeDataEditor: React.FunctionComponent<{
  formPropertyDataEditorFactory: FormPropertyDataEditorFactory;
  formNodeData: FormNodeData;
  iconFactory: IconFactory;
  onChange: () => void;
}> = ({formPropertyDataEditorFactory, onChange, ...props}) => (
  <FormNodeDataLayout
    formPropertyDataWidgetFactory={formPropertyWidgetProps =>
      formPropertyDataEditorFactory({
        onChange,
        ...formPropertyWidgetProps,
      })
    }
    {...props}
  />
);
