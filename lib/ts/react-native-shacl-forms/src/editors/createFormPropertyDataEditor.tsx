import * as React from "react";
import {dash} from "@paradicms/vocabularies";
import {TextInputFormPropertyDataEditor} from "./TextInputFormPropertyDataEditor";
import {FormPropertyDataEditorFactory} from "./FormPropertyDataEditorFactory";
import {DateTimePickerFormPropertyDataEditor} from "./DateTimePickerFormPropertyDataEditor";
import {DropDownPickerFormPropertyDataEditor} from "./DropDownPickerFormPropertyDataEditor";

export const createFormPropertyDataEditor: FormPropertyDataEditorFactory = ({
  formPropertyData,
  onChange,
}) => {
  const editor = formPropertyData.editor;
  if (!editor) {
    // console.warn(`form property ${formProperty.id} has no editor`);
    return null;
  }

  if (editor.equals(dash.DatePickerEditor)) {
    return (
      <DateTimePickerFormPropertyDataEditor
        formPropertyData={formPropertyData}
        mode="date"
        onChange={onChange}
      />
    );
  } else if (editor.equals(dash.EnumSelectEditor)) {
    return (
      <DropDownPickerFormPropertyDataEditor
        formPropertyData={formPropertyData}
        onChange={onChange}
      />
    );
  } else if (editor.equals(dash.TextFieldEditor)) {
    return (
      <TextInputFormPropertyDataEditor
        formPropertyData={formPropertyData}
        onChange={onChange}
      />
    );
  } else {
    console.warn(
      `form property ${formPropertyData.id} has unsupported editor ${editor.value}`
    );
    return null;
  }
};
