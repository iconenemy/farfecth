import { IoIosArrowDown } from "react-icons/io";

import { useScrollDirection } from "../../hooks/useScrollDirection";

const filterSection = ["sort by", "category", "style", "colour", "size"];

const Filter = () => {
  const scrollDirection = useScrollDirection();
  return (
    <div
      className={`sticky ${
        scrollDirection === "down" ? "top-0" : "top-24"
      } py-4 pl-8 transition-all duration-700 flex justify-start border-t-[1px] border-b-[1px] border-[#ccc] bg-white z-20`}
    >
      <ul className="flex flex-row gap-6 uppercase text-xs font-medium">
        {filterSection.map((item, idx) => (
          <li
            key={idx}
            className="flex flex-row items-center gap-3 first:pr-4 first:border-r-[1px] first:border-[#ccc]"
          >
            {item} <IoIosArrowDown size={"20px"} />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
