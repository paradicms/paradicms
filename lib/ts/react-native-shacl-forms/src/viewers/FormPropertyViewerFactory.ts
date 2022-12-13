import {FormProperty} from "@paradicms/shacl-forms";
import * as React from "react";
import {IconFactory} from "../IconFactory";

export type FormPropertyViewerFactory = (kwds: {
  formProperty: FormProperty;
  iconFactory: IconFactory;
}) => React.ReactElement | null;
