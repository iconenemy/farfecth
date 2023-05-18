import { Link, useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import { useAppSelector } from "../app/hooks";
import { IAuthState } from "../features/auth/authType";
import { useGetUserInfoQuery } from "../features/user/userApiSlice";
import { DefaultButton } from "../components/inputs";
import { useLogoutMutation } from "../features/auth/authApiSlice";
import { persistor } from "../app/store";

const overview = () => {
  const navigate = useNavigate();

  const { user } = useAppSelector<IAuthState>(
    (state) => state.persistedReducer.auth
  );

  useGetUserInfoQuery(user?.id as string);

  const [logoutUser] = useLogoutMutation();

  const handleLogout = async () => {
    await logoutUser()
      .unwrap()
      .then(() => {
        persistor.purge();
        navigate("/");
      });
  };

  return (
    <>
      <div className="py-20 px-8 flex flex-col items-center ">
        <h1 className=" mb-2 text-2xl font-medium uppercase">
          hi {user?.first_name}
        </h1>
        <h3 className="font-medium">{user?.email}</h3>
      </div>
      <div className="w-full py-12 px-8 flex flex-row border-b-[#ccc] border-[1px]">
        <div className="w-4/12 flex flex-col">
          <h4 className="uppercase font-medium text-[14px]">order history</h4>
          <Link to="/" className="mt-2 underline">
            Start shopping
          </Link>
        </div>
        <div className="w-5/12 flex justify-start text-[14px]">
          <p>No orders have been found</p>
        </div>
        <div className="w-3/12 flex justify-center"></div>
      </div>

      <div className="w-full py-12 px-8 flex flex-row border-b-[#ccc] border-[1px]">
        <div className="w-4/12 flex flex-col">
          <h4 className="uppercase font-medium text-[14px]">
            profile details
          </h4>
          <Link
            to="/my-account/profile"
            className="mt-2 underline"
          >
            Edit profile
          </Link>
        </div>
        <ul className="w-5/12 flex flex-col gap-4 text-[14px]">
          <li className="flex justify-between flex-row">
            <div className="w-1/2">Name</div>
            <div className="w-1/2">{user?.first_name}</div>
          </li>
          <li className="flex justify-between flex-row">
            <div className="w-1/2">Email</div>
            <div className="w-1/2">{user?.email}</div>
          </li>
          <li className="flex justify-between flex-row">
            <div className="w-1/2">Password</div>
            <div className="w-1/2">**********</div>
          </li>
        </ul>
        <div className="w-3/12 flex justify-center"></div>
      </div>

      <div className="w-full py-12 px-8 flex flex-row border-b-[#ccc] border-[1px]">
        <div className="w-4/12 flex flex-col">
          <h4 className="uppercase font-medium text-[14px]">address book</h4>
          <Link to="/" className="mt-2 underline">
            Add address
          </Link>
        </div>
        <div className="w-5/12 flex justify-start text-[14px]">
          <p>No Address Stored</p>
        </div>
        <div className="w-3/12 flex justify-center"></div>
      </div>

      <div className="w-full py-12 px-8 flex flex-row border-b-[#ccc] border-[1px]">
        <div className="w-4/12 flex flex-col">
          <h4 className="uppercase font-medium text-[14px]">
            payment methods
          </h4>
        </div>
        <div className="w-5/12 flex justify-start text-[14px]">
          <p>No payment method stored</p>
        </div>
        <div className="w-3/12 flex justify-center"></div>
      </div>

      <div className="w-full py-12 px-8 flex flex-row border-b-[#ccc] border-[1px]">
        <div className="w-4/12 flex flex-col">
          <h4 className="uppercase font-medium text-[14px]">
            marketing preferences
          </h4>
          <Link to="/" className="mt-2 underline">
            Choose
          </Link>
        </div>
        <div className="w-5/12 flex justify-start text-[14px]">
          <p>You are not currently subscribed to any Burberry marketing.</p>
        </div>
        <div className="w-3/12 flex justify-center"></div>
      </div>

      <div className="w-full py-12 px-8 flex flex-row border-b-[#ccc] border-[1px]">
        <div className="w-4/12 flex flex-col">
          <h4 className="uppercase font-medium text-[14px]">can we help?</h4>
        </div>
        <div className="w-5/12 flex justify-start text-[14px]">
          <div className="flex flex-col">
            <p className="mb-2 leading-5 tracking-tight">
              Burberry offers worldwide assistance 24 hours a day, seven days a
              week. Please note, we may monitor or record your communication for
              training and quality control purposes.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex justify-between flex-row">
                <p className="w-1/2">Telephone</p>
                <p className="w-1/2">+1 877 217 4085</p>
              </li>
              <li className="flex justify-between flex-row">
                <p className="w-1/2">Email</p>
                <p className="w-1/2">iconenemy@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-3/12 flex justify-center"></div>
      </div>

      <div className="w-full py-12 px-8 flex justify-center items-center border-b-[#ccc] border-[1px]">
        <DefaultButton className="py-4 px-16" onClick={handleLogout}>
          <FiArrowRight size={20} />
          <p className="text-sm gap-1">sign out</p>
        </DefaultButton>
      </div>
    </>
  );
};

export default overview;
