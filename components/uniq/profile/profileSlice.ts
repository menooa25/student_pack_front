import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "cookies-next";
export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface Profile extends Token {
  isLogin: boolean;
}
const initialState: Profile = {
  accessToken: (getCookie("access") as string) ?? "",
  refreshToken: (getCookie("refresh") as string) ?? "",
  isLogin: false,
};

export const ProfileSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<Token>) => {
      const payload = action.payload;
      setCookie("access", payload.accessToken);
      setCookie("refresh", payload.refreshToken);
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
    setLogin: (state, action: PayloadAction<boolean>) => {
      const payload = action.payload;
      state.isLogin = payload;
    },
  },
});

export const { setToken, setLogin } = ProfileSlice.actions;

export default ProfileSlice.reducer;
