import {FormProperty} from "@paradicms/shacl-forms";
import {IconFactory} from "../IconFactory";
import * as React from "react";

export type FormPropertyViewerFactory = (kwds: {
  formProperty: FormProperty;
  iconFactory: IconFactory;
}) => React.ReactElement | null;
