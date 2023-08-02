import { useContext, Dispatch, SetStateAction } from "react";
import { GrCheckmark } from "react-icons/gr";

import { ParamsContext } from "../../../routes/ProductList";
import { useFilterParams } from "../../../hooks";
import { useGetCountOfProductsQuery } from "../../../features/clother/clotherApiSlice";

type Props = {
  id: string;
  size: string;
  filter: string[]
  setFilter: Dispatch<SetStateAction<string[]>>
};

const FilterSizeDisplay = ({ id, size, filter, setFilter }: Props) => {
  const paramsContext = useContext(ParamsContext);

  const handleSort = (id: string) => {
    useFilterParams(id, "sizes[]", setFilter, paramsContext.setQueryParams);
  };

  const { data: qty } = useGetCountOfProductsQuery(
    new URLSearchParams({ "sizes[]": id }).toString()
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
        {size.toLocaleUpperCase()} ({qty})
      </div>
    </li>
  );
};

export default FilterSizeDisplay;
