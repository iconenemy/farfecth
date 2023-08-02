import { useState, useContext } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { useScrollDirection } from "../../hooks";
import {
  FilterCategoriesList,
  FilterColorList,
  FilterSizesList,
  FilterSortList,
} from ".";
import { ParamsContext } from "../../routes/ProductList";
import { filterSection } from "../../consts";

const Filter = () => {
  const paramsContext = useContext(ParamsContext);
  const scrollDirection = useScrollDirection();
  const [hoverId, setHoverId] = useState<number | null>(null);

  const getCountOfFilter = (filter: string) =>
    new URLSearchParams(paramsContext.queryParams).getAll(filter).length ||
    null;

  return (
    <>
      <div
        className={`
        sticky ${scrollDirection === "down" ? "top-0" : "top-24"} 
        group py-2 pl-8 transition-all duration-700 flex flex-col border-t-[1px] border-b-[1px] border-[#ccc] bg-white z-20`}
      >
        <ul className="group flex flex-row gap-6 uppercase text-xs font-medium">
          {filterSection.map(({ filterName, id, filter }) => (
            <li
              key={id}
              onMouseEnter={() => setHoverId(id)}
              className="flex flex-row items-center gap-3 first:pr-4 first:border-r-[1px] first:border-[#ccc]"
            >
              <div className="relative px-2 py-2">
                {filterName}
                <div
                  className={`absolute top-0 right-0 text-[10px] text-[#767676]`}
                >
                  {getCountOfFilter(filter)}
                </div>
              </div>
              {id === hoverId ? (
                <IoIosArrowUp id={id} size={"15px"} />
              ) : (
                <IoIosArrowDown id={id} size={"15px"} />
              )}
            </li>
          ))}
        </ul>
        {hoverId && (
          <div
            onMouseLeave={() => setHoverId(null)}
            className={`absolute h-96 w-full left-0 top-[49px] flex flex-col transition-all duration-700  bg-white z-10 `}
          >
            <div className="m-auto h-full py-8 w-11/12 flex justify-start align-top">
              {hoverId === 1 && (
                <FilterSortList
                  query={paramsContext.queryParams}
                  setQuery={paramsContext.setQueryParams}
                />
              )}
              {hoverId === 2 && (
                <FilterCategoriesList
                  query={paramsContext.queryParams}
                  setQuery={paramsContext.setQueryParams}
                />
              )}
              {hoverId === 3 && (
                <FilterColorList
                  query={paramsContext.queryParams}
                  setQuery={paramsContext.setQueryParams}
                />
              )}
              {hoverId === 4 && (
                <FilterSizesList
                  query={paramsContext.queryParams}
                  setQuery={paramsContext.setQueryParams}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Filter;
