import { createSlice } from "@reduxjs/toolkit";
import { createUser, getUserByMe, userLogin, userLogout } from "./UserAPI";


// initialState
const initialState = {
  users: [],
  loading: false,
  loginState: false,
  message: "",
  error: null
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder
      .addCase(createUser.pending, (state, { type, payload }) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, { type, payload }) => {
        state.loading = false;
        state.users = [...state.users, payload.data];
        state.message = payload.msg
        state.loginState = true
      })
      .addCase(createUser.rejected, (state, { type, payload }) => {
        state.loading = false;
        state.error = payload;
        state.message = payload
      })
      .addCase(userLogin.pending, (state, { type, payload }) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, { type, payload }) => {
        state.loading = false;
        state.users = payload;
      })
      .addCase(userLogin.rejected, (state, { type, payload }) => {
        state.loading = false;
        state.loginState = false;
        state.loginState = false
      }).addCase(getUserByMe.pending, (state, {type, payload}) => {
        state.loading = false;
        state.loginState = false;
      }).addCase(getUserByMe.fulfilled, (state, {type, payload}) => {
        state.loading = false;
        state.loginState = true;
        state.users = payload.data;
      }).addCase(getUserByMe.rejected, (state, {type, payload}) => {
        state.loading = false;
        state.loginState = false;
        state.message = payload;
      }).addCase(userLogout.fulfilled, (state, {type, payload}) => {
        state.loginState = payload
      });
  }
});

// export slice
export default UserSlice.reducer;
