import { useContext, Dispatch, SetStateAction } from "react";
import { GrCheckmark } from "react-icons/gr";

import { useGetCountOfProductsQuery } from "../../../features/clother/clotherApiSlice";
import { ParamsContext } from "../../../routes/ProductList";
import { useFilterParams } from "../../../hooks";

type Props = {
  id: string;
  category_name: string;
  filter: string[]
  setFilter: Dispatch<SetStateAction<string[]>>
};

const FilterCategoryDisplay = ({ id, category_name, filter, setFilter }: Props) => {
  const paramsContext = useContext(ParamsContext);

  const handleSort = (id: string) => {
    useFilterParams(
      id,
      "categories[]",
      setFilter,
      paramsContext.setQueryParams
    );
  };

  const { data: qty } = useGetCountOfProductsQuery(
    new URLSearchParams({ "categories[]": id }).toString()
  );

  return (
    <li
      key={id}
      onClick={() => handleSort(id)}
      className={`${
        filter.includes(id) ? "font-medium text-black" : "font-normal"
      }  text-xs hover:text-[#898989]`}
    >
      <div className="flex flex-row gap-1">
        {filter.includes(id) && <GrCheckmark size={"14px"} />}
        {category_name} ({qty})
      </div>
    </li>
  );
};

export default FilterCategoryDisplay;
