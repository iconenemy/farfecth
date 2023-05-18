import { NavLink } from "react-router-dom";

const navLinks = [
  "gifts",
  "new in",
  "men",
  "women",
  "the trench coat",
  "bags",
  "stories",
];

const NavbarSection = () => {
  return (
    <nav className="flex justify-start flex-row gap-6 uppercase cursor-pointer font-medium">
      {navLinks.map((item, idx) => (
        <NavLink
          to={item.toLocaleLowerCase().replace(/\s/g, "-")}
          key={idx}
          className={({isActive}) => isActive ? 'bg-slate-700' : 'text-xs hover:underline underline-offset-2 decoration-2 '}
        >
          {item}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavbarSection;
