import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAuthState, TUserInfo } from "../types/Auth";

const initialState: TAuthState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") as string)
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state: TAuthState, action: PayloadAction<TUserInfo>) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state: TAuthState, action: PayloadAction<{ logout: null }>) => {
      state.userInfo = action.payload.logout;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
