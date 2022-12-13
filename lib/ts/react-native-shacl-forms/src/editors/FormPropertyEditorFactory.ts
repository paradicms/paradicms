import {FormProperty} from "@paradicms/shacl-forms";
import * as React from "react";
import {IconFactory} from "../IconFactory";

export type FormPropertyEditorFactory = (kwds: {
  formProperty: FormProperty;
  iconFactory: IconFactory;
  onChange: () => void;
}) => React.ReactElement | null;
