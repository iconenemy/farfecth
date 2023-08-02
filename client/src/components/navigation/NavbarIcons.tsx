import { Dispatch, SetStateAction } from 'react'
import { Link, NavLink } from "react-router-dom";
import { CiUser, CiSearch, CiShoppingCart } from "react-icons/ci";
import { IAuthState } from "../../features/auth/authType";
import { useAppSelector } from "../../app/hooks";
import { ICardState } from "../../features/card/cardType";
import { ROUTE } from '../../consts';

type Props = {
  small: boolean;
  pathname: string;
  hoverName: string
  setHoverName: Dispatch<SetStateAction<string>>
};

const NavbarIcons = ({ small, pathname, hoverName, setHoverName }: Props) => {
  const { isAuth } = useAppSelector<IAuthState>(
    (state) => state.persistedReducer.auth
  );
  const { products_amount } = useAppSelector<ICardState>(
    (state) => state.persistedReducer.card
  );

  return (
      <div className="flex flex-row gap-6">
        <div>
          <button onMouseEnter={() => setHoverName('search')} className={`${!small && pathname === "/" && hoverName === '' &&  "text-white"}`}>
            <CiSearch size={"25px"} />
          </button>
        </div>
        <NavLink
          to={isAuth ? ROUTE.OVERVIEW_ABSOLUTE : ROUTE.AUTH_ABSOLUTE}
          className={`${!small && pathname === "/" && hoverName === '' && "text-white"}`}
        >
          <CiUser size={"25px"} />
        </NavLink>
        <div>
          <Link to={ROUTE.CHECKOUT_SHOPPING_BAG}
            className={`${
              !small && pathname === "/" && hoverName === '' && "text-white"
            } flex flex-row items-center gap-2`}
            onMouseEnter={() => setHoverName('card')}
          >
            <CiShoppingCart size={"25px"} />
            {products_amount > 0 && (
              <span className="text-xs font-medium">{products_amount}</span>
            )}
          </Link>
        </div>
      </div>
  );
};

export default NavbarIcons;
