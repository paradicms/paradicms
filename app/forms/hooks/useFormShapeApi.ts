import {FormShapeApi} from "../api/FormShapeApi";
import {useEffect, useReducer} from "react";
import {AsyncStorageFormShapeApi} from "../api/AsyncStorageFormShapeApi";
import {testFormShape} from "../data/testFormShape";

export interface ReducerAction {
  payload: FormShapeApi;
}

interface ReducerState {
  formShapeApi: FormShapeApi | null;
}

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
  return {formShapeApi: action.payload!};
};

export const useFormShapeApi = (): {formShapeApi: FormShapeApi | null} => {
  const [state, dispatch] = useReducer(reducer, {
    formShapeApi: null,
  });

  useEffect(() => {
    if (state.formShapeApi) {
      return;
    }

    // Prepopulate
    const formShapeApi = new AsyncStorageFormShapeApi();
    formShapeApi
      .putFormShape(testFormShape)
      .then(() => dispatch({payload: formShapeApi}));
  }, []);

  return {formShapeApi: state.formShapeApi};
};
