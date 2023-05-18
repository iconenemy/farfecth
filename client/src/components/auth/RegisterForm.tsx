import { useFormik } from "formik";
import { TextField, RadioButton, WhiteButton } from "../inputs";
import { IReqSignUp } from "../../features/auth/authType";
import { useAppDispatch } from "../../app/hooks";
import { signUp } from "../../features/auth/authSlice";


const RegisterForm = () => {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone_number: "",
    } as IReqSignUp,
    onSubmit: async (values: IReqSignUp) => {
      await dispatch(signUp(values))
    },
  });
  
  return (
    <form className="w-full" onSubmit={formik.handleSubmit}>
      <label htmlFor="Title" className="text-[13px] text-[#3e3e3e]">
        Title*
      </label>
      <div className="w-full mb-4 flex flex-wrap">
        <RadioButton label="Mrs" name={"title"} className="w-1/2" />
        <RadioButton label="Mr" name={"title"} className="w-1/2" />
        <RadioButton label="Ms" name={"title"} className="w-1/2" />
        <RadioButton label="Miss" name={"title"} className="w-1/2" />
      </div>
      <div className="mb-6">
        <TextField
          id="first_name"
          name="first_name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.first_name}
          placeholder="First name*"
        />
      </div>
      <div className="mb-6">
        <TextField
          id="last_name"
          name="last_name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.last_name}
          placeholder="Last name*"
        />
      </div>
      <div className="mb-6">
        <TextField
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Your email*"
        />
      </div>
      <div className="mb-6">
        <TextField
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Create password*"
        />
      </div>
      <div className="mb-6">
        <TextField
          id="phone_number"
          name="phone_number"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phone_number}
          placeholder="Phone number*"
        />
      </div>
      <div className="mb-6">
        <p className="text-xs">
          Your personal information will be managed by Burberry Limited, with
          its company address at Horseferry House, Horseferry Road, London SW1P
          2AW and may be stored outside your country of residence (including in
          the U.K., Europe and USA). Burberry uses your personal information to
          offer an enhanced customer service tailored to your preferences and
          may share your personal information with Burberry group companies and
          third parties who support Burberry in providing products and services
          to you on Burberry’s behalf. By continuing, you confirm you have read
          our Privacy Policy and, where consent is required under local laws,
          you agree to the use of your personal information as described in our
          Privacy Policy, including in relation to the transfer and storage of
          your personal information outside your country of residence.
        </p>
      </div>
      <WhiteButton className={"w-full py-3 text-xs"} type={"submit"}>
        create an account
      </WhiteButton>
    </form>
  );
};

export default RegisterForm;
