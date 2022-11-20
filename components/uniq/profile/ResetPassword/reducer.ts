import { cloneDeep as _cloneDeep } from "lodash";

export interface State {
  password_1: {
    errorMessage: string;
    value: string;
  };
  password_2: {
    errorMessage: string;
    value: string;
  };
}
interface Action {
  type: "password_1" | "password_1_error" | "password_2" | "password_2_error";
  payload: string;
}
export const initialState: State = {
  password_1: {
    errorMessage: "",
    value: "",
  },
  password_2: {
    errorMessage: "",
    value: "",
  },
};
export const resetPasswordReducer = (state: State, action: Action): State => {
  const { payload } = action;
  switch (action.type) {
    case "password_1":
      state.password_1.value = payload;
      return _cloneDeep(state);
    case "password_2":
      state.password_2.value = payload;
      return _cloneDeep(state);
    case "password_1_error":
      state.password_1.errorMessage = payload;
      return _cloneDeep(state);
    case "password_2_error":
      state.password_2.errorMessage = payload;
      return _cloneDeep(state);
    default:
      return state;
  }
};
