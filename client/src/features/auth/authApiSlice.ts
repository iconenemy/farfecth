import { apiSlice } from "../../app/api/apiSlice";
import { IUser } from "./authType";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    logout: builder.mutation<void, void>({
      query: () => ({ url: "auth/logout" }),
    }),
    getData: builder.mutation<string, IUser>({
      query: () => ({ url: "auth/profile" }),
    }),
  }),
});

export const { useLogoutMutation, useGetDataMutation } = authApiSlice;
