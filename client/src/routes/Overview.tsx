import { useAppSelector } from "../app/hooks";
import {
  OrderHistory,
  Title,
  ProfileDetails,
  AddressBook,
  PaymentMethod,
  MarketPreference,
  Help,
  Logout,
} from "../components/overview";
import { IAuthState } from "../features/auth/authType";
import { useGetUserInfoQuery } from "../features/user/userApiSlice";

const Overview = () => {
  const { user } = useAppSelector<IAuthState>(
    (state) => state.persistedReducer.auth
  );

  useGetUserInfoQuery(user!.id as string);

  return (
    <>
      <Title />
      <OrderHistory />
      <ProfileDetails />
      <AddressBook />
      <PaymentMethod />
      <MarketPreference />
      <Help />
      <Logout />
    </>
  );
};

export default Overview;
