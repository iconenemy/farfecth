import { IUser } from "../auth/authType";

export type UserUpdateBodyReq = Pick<IUser, "first_name" | "last_name" | "phone_number">;
export type UserUpdateRes = Pick<IUser, "first_name" | "last_name" | "phone_number">
export type UserUpdateReq = Pick<IUser,  "id" | "first_name" | "last_name" | "phone_number">