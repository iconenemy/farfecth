import { NavLink } from "react-router-dom";

import { NavbarIcons, NavbarSection } from "../navigation";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import logo from "../../assets/Burberry-logo.png";

const Header = () => {
  const scrollDirection = useScrollDirection();
  return (
    <div
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } h-24 transition-all duration-700 bg-white z-30`}
    >
      <div className="max-w-[1420px] mx-auto flex justify-between items-center">
        <div className="flex justify-around items-center">
          <NavLink to="/" className="mr-10">
            <img src={logo} className="w-44 h-24 justify-between" />
          </NavLink>
          <NavbarSection />
        </div>
        <NavbarIcons />
      </div>
    </div>
  );
};

export default Header;
