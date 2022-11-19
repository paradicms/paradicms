import * as React from "react";
import {dash} from "@paradicms/vocabularies";
import {FormProperty} from "@paradicms/shacl-forms";
import {TextInputFormPropertyEditor} from "./TextInputFormPropertyEditor";

export const createFormPropertyEditor = (kwds: {
  formProperty: FormProperty;
  onChange: () => void;
}): React.ReactElement | null => {
  const {formProperty, onChange} = kwds;

  const editor = formProperty.editor;
  if (!editor) {
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
    return null;
  }
};
