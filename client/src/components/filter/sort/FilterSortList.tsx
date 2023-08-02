import { useState } from "react";
import { GrCheckmark } from "react-icons/gr";

import { sortList } from "../../../consts";

type Props = {
  query: URLSearchParams;
  setQuery: Function;
};

const FilterSort = ({ query, setQuery }: Props) => {
  const [filter, setFilter] = useState<string>(
    new URLSearchParams(query).has("sort")
      ? new URLSearchParams(query).getAll("sort").toString()
      : sortList[0].value
  );

  const handleSort = (id: number) => {
    if (id !== 1) {
      const searchParams = new URLSearchParams(query);
      searchParams.delete("sort");
      const findFilter = sortList.find(({ id: sortId }) => sortId === id);
      if (findFilter) {
        searchParams.append(findFilter.key, findFilter.value);
        setQuery(searchParams);
        setFilter(findFilter.value);
      }
    } else {
      clearParams();
    }
  };

  const clearParams = () => {
    const searchParams = new URLSearchParams(query);
    searchParams.delete("sort");
    setQuery(searchParams.toString());
    setFilter("1");
  };

  return (
    <ul className="flex flex-col gap-4">
      {sortList.map(({ name, id, value }) => (
        <li
          key={id}
          onClick={() => handleSort(id)}
          className={`${
            filter === value ? "font-medium text-black" : "font-normal"
          } text-xs hover:text-[#898989] `}
        >
          <div className="flex flex-row gap-1">
            {filter === value && <GrCheckmark size={"14px"} />}
            <p className={`${filter === value && "font-medium"}`}>{name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FilterSort;
