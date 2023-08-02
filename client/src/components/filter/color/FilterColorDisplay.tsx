import { useContext, Dispatch, SetStateAction } from "react";
import { GrCheckmark } from "react-icons/gr";

import { useFilterParams } from "../../../hooks";
import { ParamsContext } from "../../../routes/ProductList";
import { useGetCountOfProductsQuery } from "../../../features/clother/clotherApiSlice";

type Props = {
  id: string;
  color: string;
  filter: string[];
  setFilter: Dispatch<SetStateAction<string[]>>;
};

const FilterColorDisplay = ({ id, color, filter, setFilter }: Props) => {
  const paramsContext = useContext(ParamsContext)
  
  const { data: qty } = useGetCountOfProductsQuery(
    new URLSearchParams({ "colors[]": color }).toString()
  );

  const handleSort = (colorName: string) => {
    useFilterParams(colorName, "colors[]", setFilter, paramsContext.setQueryParams);
  };
  
  return (
    <li
      key={id}
      onClick={() => handleSort(color)}
      className={`${
        filter.includes(color) ? "font-medium text-black" : "font-normal"
      }  text-xs hover:text-[#898989]`}
    >
      <div className="flex flex-row gap-1">
        {filter.includes(color) && <GrCheckmark size={"14px"} />}
        {color.charAt(0).toUpperCase().concat(color.slice(1))} ({qty})
      </div>
    </li>
  );
};

export default FilterColorDisplay;
