import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAuthState,
  IError,
  ISignUpRes,
  IRefreshRes,
  ISignInReq,
  ISignInRes,
  ISignUpReq,
  IUser
} from "./authType";
import { PURGE } from "redux-persist";
import { apiSlice } from "../../app/api/apiSlice";
import { userApiSliece } from "../user/userApiSlice";

export const signIn = createAsyncThunk<
  ISignInRes,
  ISignInReq,
  { rejectValue: IError }
>("auth/signInUser", async (loginDto, thunkApi) => {
  const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginDto),
  });
  if (response.status !== 201) {
    return thunkApi.rejectWithValue((await response.json()) as IError);
  }
  return (await response.json()) as ISignInRes;
});

export const signUp = createAsyncThunk<
  ISignUpRes,
  ISignUpReq,
  { rejectValue: IError }
>("auth/signUpUser", async (signUpDto, thunkApi) => {
  const response = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signUpDto),
  });
  if (response.status !== 201) {
    return thunkApi.rejectWithValue((await response.json()) as IError);
  }
  return (await response.json()) as ISignUpRes;
});


const initialState: IAuthState = {
  accessToken: null,
  refreshToken: null,
  user: null,
  loading: false,
  errors: [],
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      initialState;
    },
    tokenReceived: (state, action: PayloadAction<IRefreshRes>) => {
      state.isAuth = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.errors = [];
        state.isAuth = true;
      })
      .addCase(signIn.rejected, () => {})
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(PURGE, () => initialState)
      .addMatcher(apiSlice.endpoints.refresh.matchFulfilled, (state, action: PayloadAction<IRefreshRes>) => {
        state.isAuth = true
        state.user = action.payload.user
        state.accessToken = action.payload.accessToken
        state.refreshToken = action.payload.refreshToken
      })
      .addMatcher(userApiSliece.endpoints.getUserInfo.matchFulfilled, (state, action: PayloadAction<IUser>) => {
        state.isAuth = true
        state.user = action.payload
      })
      .addMatcher(userApiSliece.endpoints.updateUser.matchFulfilled, (state, { payload}) => {
        state.isAuth = true
        state.user = payload
      })
  },
});

export const { tokenReceived, logout } = authSlice.actions;

export default authSlice.reducer;
