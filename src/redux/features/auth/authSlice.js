import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  readOnly: null,
  token: null,
  adminName: null,
  adminRole: null,
  adminSite: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.readOnly = payload.readOnly;
      state.token = payload.adminToken;
      state.adminName = payload.adminName;
      state.adminRole = payload.adminRole;
      state.adminSite = payload.adminSite;
    },
    logout: (state) => {
      state.readOnly = null;
      state.token = null;
      state.adminName = null;
      state.adminRole = null;
      state.adminSite = null;
    },
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
export const userToken = (state) => state.auth.token;
