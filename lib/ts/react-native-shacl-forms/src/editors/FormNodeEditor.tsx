import * as React from "react";
import {FormNode} from "@paradicms/shacl-forms";
import {FormNodeLayout} from "../FormNodeLayout";
import {FormPropertyEditorFactory} from "./FormPropertyEditorFactory";
import {IconFactory} from "../IconFactory";

export const FormNodeEditor: React.FunctionComponent<{
  formPropertyEditorFactory: FormPropertyEditorFactory;
  formNode: FormNode;
  iconFactory: IconFactory;
  onChange: () => void;
}> = ({formPropertyEditorFactory, onChange, ...props}) => (
  <FormNodeLayout
    formPropertyWidgetFactory={formPropertyWidgetProps =>
      formPropertyEditorFactory({
        onChange,
        ...formPropertyWidgetProps,
      })
    }
    {...props}
  />
);
