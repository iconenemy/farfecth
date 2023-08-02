import { NavLink } from "react-router-dom";
import { useGetAllSectionsQuery } from "../../features/clother/clotherApiSlice";
import { ISectionRes } from "../../features/clother/clotherType";

type Props = {
  small: boolean;
  pathname: string;
  hoverName: string
};

const NavbarSection = ({ small, pathname, hoverName }: Props) => {
  const { data: sections } = useGetAllSectionsQuery();
    
  return (
    <nav className="flex justify-start flex-row gap-6 uppercase cursor-pointer font-medium">
      {sections &&
        sections.map(({ id, section_name }: ISectionRes) => (
          <NavLink
            to={section_name.toLocaleLowerCase().replace(/\s/g, "-")}
            key={id}
            state={{ id, section_name, sections }}
            className={({ isActive }) =>
              pathname === "/"
                ? isActive
                  ? "text-slate-700 text-xs"
                  : `${
                      pathname === "/" && !small && hoverName === '' &&  "text-white"
                    } text-xs hover:underline underline-offset-2 decoration-2`
                : isActive
                ? "text-xs underline underline-offset-2 decoration-2"
                : "text-xs hover:underline underline-offset-2 decoration-2"
            }
          >
            {section_name}
          </NavLink>
        ))}
    </nav>
  );
};

export default NavbarSection;
