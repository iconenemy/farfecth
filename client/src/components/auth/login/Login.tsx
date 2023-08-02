import { useFormik } from "formik";
import { FcGoogle } from "react-icons/fc";

import { IAuthState, ISignInReq } from "../../../features/auth/authType";
import { TextField, WhiteButton } from "../../inputs";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { signIn } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector<IAuthState>(
    (state) => state.persistedReducer.auth
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    } as ISignInReq,
    onSubmit: async (values): Promise<void> => {
      await dispatch(signIn(values)).unwrap().then(() => navigate('/'));
    },
  });

  const loginWithGoogleHandle = async () => {
    window.open("http://localhost:5000/api/auth/google", "_self");
  };

  return (
    <section className="max-w-[610] w-[47%] flex flex-col items-center">
      <p className="mb-6 uppercase font-medium text-[14px] tracking-tight">sign in</p>
      <p className="mb-2 text-[13px] font-medium tracking-tight">
        Sign in to acccess your account
      </p>
      {isAuth && <h1>Logged</h1>}
      <form className="w-full mb-3" onSubmit={formik.handleSubmit}>
        <div className="w-full mb-10 flex flex-col ">
          <div className="h-16 flex items-center">
            <TextField
              id="Email"
              name="email"
              type="text"
              placeholder="Your email*"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="h-16 flex items-center mb-2">
            <TextField
              id="password"
              name="password"
              type="password"
              placeholder="Password*"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
        </div>
        <WhiteButton type={"submit"} className="w-full py-3 text-xs">
          sign in
        </WhiteButton>
      </form>
      <WhiteButton
        className="w-full py-3 text-xs"
        onClick={loginWithGoogleHandle}
      >
        <FcGoogle />
        sign in with google
      </WhiteButton>
      
    </section>
  );
};

export default Login;
