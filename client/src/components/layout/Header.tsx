import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { mainImage } from '../../assets/home-page'
import { blackLogo, whiteLogo } from '../../assets/logo'

import { useScrollDirection } from "../../hooks";
import { NavbarIcons, NavbarSection } from "../navigation";
import { useAppSelector } from "../../app/hooks";
import { ICardState } from "../../features/card/cardType";
import { TextField, WhiteButton } from "../inputs";
import { ROUTE } from "../../consts";

const Header = () => {
  const { products, total_price } = useAppSelector<ICardState>(
    (state) => state.persistedReducer.card
  );
  const { pathname } = useLocation();
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (scrollDirection === "down") setHoverName("");
  }, [scrollDirection]);

  const [small, setSmall] = useState<boolean>(false);
  const [hoverName, setHoverName] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.scrollY > 0));
    }
  }, []);

  return (
    <>
      <div
        className={`sticky ${
          pathname === "/" && !small
            ? ""
            : scrollDirection === "down"
            ? "-top-24"
            : "top-0"
        } relative h-24 transition-all ${
          (small || hoverName !== "") && "bg-white"
        } duration-700 z-30 `}
      >
        <div className="max-w-[1420px] h-full mx-auto flex justify-between items-center">
          <div className="flex justify-around items-center">
            <NavLink to={ROUTE.HOME} className="mr-10">
              <img
                src={`${
                  pathname === "/" && !small && hoverName === ""
                    ? whiteLogo
                    : blackLogo
                }`}
                className="w-36 h-7 justify-between"
              />
            </NavLink>
            <NavbarSection
              small={small}
              pathname={pathname}
              hoverName={hoverName}
            />
          </div>
          <NavbarIcons
            small={small}
            pathname={pathname}
            hoverName={hoverName}
            setHoverName={setHoverName}
          />
        </div>
        {hoverName === "card" && products.length > 0 && (
          <div
            onMouseLeave={() => setHoverName("")}
            className="absolute h-[450px] w-[370px] right-0 top-24 flex flex-col bg-white z-50 border-x-[#ccc] border-b-[#ccc] border-[1px] border-transparent"
          >
            <div className="flex flex-col px-9">
              <ul className="flex flex-col overflow-y-auto w-full h-80 gap-6 mb-5 mt-2">
                {products.map(({ id, image, name, qty, price }) => (
                  <li key={id} className="w-full flex flex-row h-28 gap-2">
                    <img src={image} width={"90px"} />
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-xs font-medium">{name}</h2>
                        <div className="text-xs text-[#7676776]">
                          Quantity: {qty}
                        </div>
                      </div>
                      <div className="text-xs text-[#7676776]">${price}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="w-full flex justify-between mb-5">
                <div className="text-xs font-medium">Sub total</div>
                <div className="text-xs">${total_price}</div>
              </div>
              <WhiteButton className="py-2 text-[10px] text-white bg-black text-whit hover:bg-opacity-80">
                <Link to={ROUTE.CHECKOUT_SHOPPING_BAG} className="w-full">
                  Checkout
                </Link>
              </WhiteButton>
            </div>
          </div>
        )}
        {hoverName === "card" && products.length === 0 && (
          <div
            onMouseLeave={() => setHoverName("")}
            className="transition-all ease-in duration-7000 absolute h-16 w-[370px] right-0 top-24 flex flex-col bg-white z-50 border-x-[#ccc] border-b-[#ccc] border-[1px] border-transparent"
          >
            <div className="h-full flex items-center px-9 text-xs font-medium">
              Your bag is empty
            </div>
          </div>
        )}
        {hoverName === "search" && (
          <div
            onMouseLeave={() => setHoverName("")}
            className="absolute h-96 w-full right-0 top-24 flex flex-col bg-white border-x-[#ccc] border-b-[#ccc] border-[1px] border-transparent z-50"
          >
            <div className="h-full flex items-start px-9 text-xs font-medium">
              <TextField type="text" placeholder="Search" className="text-sm" />
            </div>
          </div>
        )}
      </div>
      {pathname === "/" && (
        <div className="w-100% absolute top-0 left-0 z-20">
          <img src={mainImage} className="w-screen h-screen object-cover" />
          <div className="absolute top-[35%] left-0 right-0 ml-auto mr-auto w-max uppercase text-5xl text-white">
            Clothes are not a habit but a tradition
          </div>
        </div>
      )}
      {hoverName !== "" && (
        <div className="absolute top-0 left-0 w-full bg-[#ccc] opacity-90 z-90"></div>
      )}
    </>
  );
};

export default Header;
