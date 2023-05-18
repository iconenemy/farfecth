import { NavLink } from "react-router-dom";
import { CiUser, CiSearch, CiShoppingCart } from "react-icons/ci";
import { IAuthState } from "../../features/auth/authType";
import { useAppSelector } from "../../app/hooks";

const NavbarIcons = () => {
  const {isAuth} = useAppSelector<IAuthState>(state => state.persistedReducer.auth)
  return (
    <div className="flex flex-row gap-6">
      <div>
        <button>
          <CiSearch size={"25px"} />
        </button>
      </div>
      <NavLink to={isAuth ? "/my-account/overview"  : "/my-account/sign-in-register"}>
        <CiUser size={"25px"} />
      </NavLink>
      <div>
        <button>
          <CiShoppingCart size={"25px"} />
        </button>
      </div>
    </div>
  );
};

export default NavbarIcons;
