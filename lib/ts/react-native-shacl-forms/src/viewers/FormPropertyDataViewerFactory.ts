import {FormPropertyData} from "@paradicms/shacl-forms";
import {IconFactory} from "../IconFactory";
import * as React from "react";

export type FormPropertyDataViewerFactory = (kwds: {
  formPropertyData: FormPropertyData;
  iconFactory: IconFactory;
}) => React.ReactElement | null;
