import * as React from "react";
import {dash} from "@paradicms/vocabularies";
import {TextFormPropertyDataViewer} from "./TextFormPropertyDataViewer";
import {BlankNodeFormPropertyDataViewer} from "./BlankNodeFormPropertyDataViewer";
import {FormPropertyDataViewerFactory} from "./FormPropertyDataViewerFactory";

export const createFormPropertyDataViewer: FormPropertyDataViewerFactory = ({
  formPropertyData,
  iconFactory,
}) => {
  const viewer = formPropertyData.viewer;
  if (!viewer) {
    console.info(`form property ${formPropertyData.id} has no viewer`);
    return null;
  }

  if (viewer.equals(dash.BlankNodeViewer)) {
    return (
      <BlankNodeFormPropertyDataViewer
        formPropertyData={formPropertyData}
        formPropertyDataViewerFactory={createFormPropertyDataViewer}
        iconFactory={iconFactory}
      />
    );
  } else if (viewer.equals(dash.LiteralViewer)) {
    return <TextFormPropertyDataViewer formPropertyData={formPropertyData} />;
  } else {
    console.info(
      `form property ${formPropertyData.id} has unsupported viewer ${viewer.value}`
    );
    return null;
  }
};
