import * as React from "react";
import {dash} from "@paradicms/vocabularies";
import {FormProperty} from "@paradicms/shacl-forms";
import {TextFormPropertyViewer} from "./TextFormPropertyViewer";

export const createFormPropertyViewer = (kwds: {
  formProperty: FormProperty;
}): React.ReactElement | null => {
  const {formProperty} = kwds;

  const viewer = formProperty.viewer;
  if (!viewer) {
    console.warn(`form property ${formProperty.id} has no viewer`);
    return null;
  }

  if (viewer.equals(dash.LiteralViewer)) {
    return <TextFormPropertyViewer formProperty={formProperty} />;
  } else {
    console.warn(
      `form property ${formProperty.id} has unsupported viewer ${viewer.value}`
    );
    return null;
  }
};
