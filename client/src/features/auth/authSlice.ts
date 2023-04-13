import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAuth,
  IAuthState,
  IError,
  ILoginAuth,
  IRefreshResonse,
} from "./authType";

export const loginUser = createAsyncThunk<
  IAuth,
  ILoginAuth,
  { rejectValue: IError }
>("auth/loginUser", async (loginDto, thunkApi) => {
  const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginDto),
  });
  if (response.status === 400) {
    return thunkApi.rejectWithValue((await response.json()) as IError);
  }
  return (await response.json()) as IAuth;
});

const initialState: IAuthState = {
  accessToken: null,
  refreshToken: null,
  user: null,
  loading: false,
  errors: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // // TODO: Test  logout: () => initialState,
    logout: () => initialState,
    tokenReceived: (state, action: PayloadAction<IRefreshResonse>) => {
      console.log(action);
      
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user
    },  
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.errors = [];
      })
      .addCase(loginUser.rejected, (state, { payload }) => {})
  },
});

export const { logout, tokenReceived } = authSlice.actions;

export default authSlice.reducer;
