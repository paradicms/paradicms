export type FormStackParamList = {
  FormErrorScreen: {
    formDataId: string | null;
    formNodeDataId: string | null;
    formNodeTypeDataId: string | null;
    error: any;
  };
  FormNodeDataEditorScreen: {
    formDataId: string;
    formNodeDataId: string;
    formNodeTypeDataId: string;
  };
  FormNodeTypeDataViewerScreen: {
    formDataId: string;
    formNodeTypeDataId: string;
  };
  FormNodeDataViewerScreen: {
    formDataId: string;
    formNodeDataId: string;
    formNodeTypeDataId: string;
  };
  FormDataSummariesViewerScreen: {formShapeId: string};
  FormDataViewerScreen: {formDataId: string};
  FormShapeSummariesViewerScreen: undefined;
};
