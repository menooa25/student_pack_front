import React, { useReducer } from "react";
import { initialState, resetPasswordReducer } from "./reducer";

const ResetPassword = () => {
  const [state, dispatch] = useReducer(resetPasswordReducer, initialState);
  return (
    <div dir="rtl">
      <div>
        <label className="label pb-1">رمزعبور جدید</label>
        <input
          className="input input-sm input-bordered rounded-md"
          type="text"
          value={state.password_1.value}
          onChange={({ target: { value } }) =>
            dispatch({ type: "password_1", payload: value })
          }
        />
      </div>
      <div>
        <label className="label pb-1">تکرار رمز عبور جدید</label>
        <input
          className="input input-sm input-bordered rounded-md"
          type="text"
          value={state.password_2.value}
          onChange={({ target: { value } }) =>
            dispatch({ type: "password_2", payload: value })
          }
        />
      </div>
      <button className="btn btn-sm rounded-md w-full mt-3">
        بوزرسانی رمز عبور
      </button>
    </div>
  );
};

export default ResetPassword;
