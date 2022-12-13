import {FormProperty} from "@paradicms/shacl-forms";
import * as React from "react";
import {Icons} from "../Icons";

export type FormPropertyViewerFactory = (kwds: {
  formProperty: FormProperty;
  icons: Icons;
}) => React.ReactElement | null;
