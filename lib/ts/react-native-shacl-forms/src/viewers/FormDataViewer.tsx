import * as React from "react";
import {FormData, FormNodeTypeData} from "@paradicms/shacl-forms";
import {FormModelSummariesViewer} from "./FormModelSummariesViewer";

export const FormDataViewer: React.FunctionComponent<{
  formData: FormData;
  onSelectFormNodeTypeData: (formNodeTypeData: FormNodeTypeData) => void;
}> = ({formData, onSelectFormNodeTypeData}) => {
  return (
    <FormModelSummariesViewer
      formModelSummaries={formData.nodeTypes}
      onSelect={onSelectFormNodeTypeData}
    />
  );
};
