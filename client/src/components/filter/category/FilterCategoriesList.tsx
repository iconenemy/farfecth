import { useState } from "react";

import { useGetAllCategoriesQuery } from "../../../features/clother/clotherApiSlice";
import { useClearParams } from "../../../hooks";
import { FilterCategoryDisplay } from "..";

type Props = {
  query: URLSearchParams;
  setQuery: Function;
};

const FilterCategoriesList = ({ query, setQuery }: Props) => {
  const { data: categories } = useGetAllCategoriesQuery();
  const [filter, setFilter] = useState<string[]>([
    ...new URLSearchParams(query).getAll("categories[]"),
  ]);

  const handleClear = () => {
    useClearParams("categories[]", setFilter, setQuery);
  };

  return (
    <ul className="flex flex-col gap-4">
      <span onClick={handleClear} className="text-xs underline">
        Clear
      </span>
      {categories?.map((item) => (
        <FilterCategoryDisplay
          key={item.id}
          {...item}
          filter={filter}
          setFilter={setFilter}
        />
      ))}
    </ul>
  );
};

export default FilterCategoriesList;
