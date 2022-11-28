import {FormProperty} from "@paradicms/shacl-forms";
import * as React from "react";

export type FormPropertyViewerFactory = (kwds: {
  formProperty: FormProperty;
}) => React.ReactElement | null;
