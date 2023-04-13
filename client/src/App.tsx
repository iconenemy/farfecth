import { loginUser, logout } from "./features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  useGetProfileMutation,
  useLogoutUserMutation,
} from "./app/api/apiSlice";
import { useEffect } from "react";

const App = () => {
  const dispatch = useAppDispatch();
  const { accessToken, user, refreshToken } = useAppSelector<any>(
    (state) => state.auth
  );

  const [getProfile, { data: fetchProfileData }] = useGetProfileMutation();
  const [logoutUSer] = useLogoutUserMutation();
  const data = {
    email: "hello@gmail.com",
    password: "123456789",
  };

  useEffect(() => {
    console.log("User: ", user);
  }, [user]);

  useEffect(() => {
    console.log("fetchProfileData: ", fetchProfileData);
    console.log("User: ", user);
  }, [fetchProfileData]);

  const handleClick = async (
    event: React.MouseEvent,
    data: any
  ): Promise<void> => {
    event.preventDefault();
    await dispatch(loginUser(data));
  };

  const loginWithGoogleHandle = () => {
    window.open("http://localhost:5000/api/auth/google", "_self");
  };

  const fetchProfile = async (event: React.MouseEvent): Promise<void> => {
    event.preventDefault();
    await getProfile();
  };

  const logoutFunc = async (event: React.MouseEvent): Promise<void> => {
    event.preventDefault();
    await logoutUSer().unwrap();
    dispatch(logout());
  };

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "column" }}>
        <button onClick={(e: React.MouseEvent) => handleClick(e, data)}>
          Login
        </button>
        <button onClick={loginWithGoogleHandle}>Login with Google</button>
        <button onClick={fetchProfile}>Fetch Profile</button>
        <button onClick={logoutFunc}>Logout</button>
      </div>
    </div>
  );
};

export default App;
