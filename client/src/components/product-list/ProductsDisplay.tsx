import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  useGetAllProductsQuery,
  useGetCountOfProductsQuery,
} from "../../features/clother/clotherApiSlice";
import { IProductRes } from "../../features/clother/clotherType";
import { ParamsContext } from "../../routes/ProductList";
import { WhiteButton } from "../inputs";

type Props = {
  section: string;
  category: string;
  categoryName: string;
};

const ProductsDisplay = ({ section, category, categoryName }: Props) => {
  const params = useContext(ParamsContext);
  const [filteredQuery, setFilteredQuery] = useState<string>("");
  useEffect(() => {
    const newQuery = new URLSearchParams(params.queryParams);
    newQuery.delete("categories[]");
    setFilteredQuery(newQuery.toString());
  }, [params.queryParams]);

  const { data: products } = useGetAllProductsQuery(
    new URLSearchParams({ section, "categories[]": category })
      .toString()
      .concat("&", filteredQuery)
  );

  const { data: qtyOfProducts } = useGetCountOfProductsQuery(
    new URLSearchParams({ section, "categories[]": category })
      .toString()
      .concat("&", filteredQuery)
  );

  return (
    <>
      {!!qtyOfProducts && (
        <>
          <div className="flex justify-center font-medium text-sm">
            {categoryName}
          </div>
          <div className="w-full flex flex-col justify-center mt-14 mb-16 border-b-2 border-[#ccc]">
            <ul className="flex justify-center flex-wrap gap-1">
              {products?.map(({ id, image, name, price }: IProductRes) => (
                <li key={id} className="flex flex-col">
                  <Link to={`${btoa(id)}`}>
                    <img src={image} className="w-[375px] h-[500px]" />
                    <div className="pt-4 pb-16 flex flex-col items-center gap-1">
                      <div className="text-xs font-medium">{name}</div>
                      <div className="pt-1 text-xs font-normal">{price}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            {(qtyOfProducts as number) - 8 > 0 && (
              <div className="mt-6 mb-28 flex justify-center">
                <WhiteButton className="px-14 py-3 text-xs font-medium">
                  view {(qtyOfProducts as number) - 8} more
                </WhiteButton>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ProductsDisplay;
