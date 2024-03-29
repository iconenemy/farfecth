import { apiSlice } from "../../app/api/apiSlice";
import { IUser} from "../auth/authType";
import { UserUpdateBodyReq, UserUpdateReq, UserUpdateRes } from "./userType";

export const userApiSliece = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query<IUser, string>({
      query: (id) => ({ url: `users/${id}` }),
    }),
    updateUser: builder.mutation<UserUpdateRes, UserUpdateReq>({
      query: ({ id, first_name, last_name, phone_number }) => ({
        url: `users/${id}`,
        method: "PUT",
        body: {
          first_name,
          last_name,
          phone_number,
        } as UserUpdateBodyReq,
      }),
    }),
  }),
});

export const { useGetUserInfoQuery, useUpdateUserMutation } = userApiSliece;
