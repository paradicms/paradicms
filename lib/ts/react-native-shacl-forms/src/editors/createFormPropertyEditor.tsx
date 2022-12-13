import * as React from "react";
import {dash} from "@paradicms/vocabularies";
import {TextInputFormPropertyEditor} from "./TextInputFormPropertyEditor";
import {FormPropertyEditorFactory} from "./FormPropertyEditorFactory";

export const createFormPropertyEditor: FormPropertyEditorFactory = ({
  formProperty,
  onChange,
}) => {
  const editor = formProperty.editor;
  if (!editor) {
    console.warn(`form property ${formProperty.id} has no editor`);
    return null;
  }

  if (editor.equals(dash.TextFieldEditor)) {
    return (
      <TextInputFormPropertyEditor
        formProperty={formProperty}
        onChange={onChange}
      />
    );
  } else {
    console.warn(
      `form property ${formProperty.id} has unsupported editor ${editor.value}`
    );
    return null;
  }
};
