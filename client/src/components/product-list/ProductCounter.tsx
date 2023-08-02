import { useContext } from "react";
import { useGetCountOfProductsQuery } from "../../features/clother/clotherApiSlice";
import { ParamsContext } from "../../routes/ProductList";

type Props = {
  sectionId: string;
};

const ProductCounter = ({ sectionId }: Props) => {
  const paramsContext = useContext(ParamsContext)
  const { data: productsQty } = useGetCountOfProductsQuery(
    new URLSearchParams({ section: sectionId }).toString().concat('&', paramsContext.queryParams.toString())
  );

  return (
    <div className="flex justify-center py-12 text-xs">
      {productsQty} results
    </div>
  );
};

export default ProductCounter;
