import {
  FormDataSummary,
  FormModelSummary,
  FormShapeSummary,
} from "@paradicms/shacl-forms";

export type FormStackParamList = {
  FormErrorViewerScreen: {
    formData: FormDataSummary | null;
    formNodeData: FormModelSummary | null;
    formNodeTypeData: FormModelSummary | null;
    error: any;
  };
  FormNodeDataEditorScreen: {
    formData: FormDataSummary;
    formNodeData: FormModelSummary;
    formNodeTypeData: FormModelSummary;
  };
  FormNodeTypeDataViewerScreen: {
    formData: FormDataSummary;
    formNodeTypeData: FormModelSummary;
  };
  FormNodeDataViewerScreen: {
    formData: FormDataSummary;
    formNodeData: FormModelSummary;
    formNodeTypeData: FormModelSummary;
  };
  FormDataSummariesViewerScreen: {formShape: FormShapeSummary};
  FormDataViewerScreen: {formData: FormDataSummary};
  FormShapeSummariesViewerScreen: undefined;
};
