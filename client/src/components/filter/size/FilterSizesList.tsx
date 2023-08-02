import { useState } from "react";

import { useGetAllSizesQuery } from "../../../features/clother/clotherApiSlice";
import { useClearParams } from "../../../hooks";
import { FilterSizeDisplay } from "..";

type Props = {
  query: URLSearchParams;
  setQuery: Function;
};

const FilterSizesList = ({ query, setQuery }: Props) => {
  const { data: sizes } = useGetAllSizesQuery();
  const [filter, setFilter] = useState<string[]>([
    ...new URLSearchParams(query).getAll("sizes[]"),
  ]);

  const handleClear = () => {
    useClearParams("sizes[]", setFilter, setQuery);
  };

  return (
    <ul className="flex flex-col gap-4">
      <span onClick={handleClear} className="text-xs underline">
        Clear
      </span>
      {sizes?.map((item) => (
        <FilterSizeDisplay
          key={item.id}
          {...item}
          filter={filter}
          setFilter={setFilter}
        />
      ))}
    </ul>
  );
};

export default FilterSizesList;
