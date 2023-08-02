import { useState } from "react";

import { useClearParams } from "../../../hooks";
import { FilterColorDisplay } from "..";
import { filterColours } from "../../../consts";

type Props = {
  query: URLSearchParams;
  setQuery: Function;
};

const FilterColorList = ({ query, setQuery }: Props) => {
  const [filter, setFilter] = useState<string[]>([
    ...new URLSearchParams(query).getAll("colors[]"),
  ]);

  const handleClear = () => {
    useClearParams("colors[]", setFilter, setQuery);
  };

  return (
    <div className="flex flex-col gap-4">
      <span onClick={handleClear} className="text-xs underline">
        Clear
      </span>
      <ul className="flex flex-col flex-wrap h-56 w-96 gap-4">
        {filterColours?.map((item) => (
          <FilterColorDisplay key={item.id} {...item} filter={filter} setFilter={setFilter} />
        ))}
      </ul>
    </div>
  );
};

export default FilterColorList;
