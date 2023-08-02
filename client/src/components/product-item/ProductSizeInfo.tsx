import { Dispatch, SetStateAction } from "react";
import { useGetAllSizesQuery } from "../../features/clother/clotherApiSlice";
import { IProductRes, ISizeRes } from "../../features/clother/clotherType";

type Props = {
  product: IProductRes;
  selectedSize: string;
  setSelectedSize: Dispatch<SetStateAction<string>>;
  setExistSize: Dispatch<SetStateAction<boolean>>;
  setSizeError: Dispatch<SetStateAction<boolean>>;
};

const ProductSizeInfo = ({
  product,
  selectedSize,
  setExistSize,
  setSizeError,
  setSelectedSize,
}: Props) => {
  const { data: sizes } = useGetAllSizesQuery();

  const handleSize = (id: string) => {
    setSelectedSize(id);
    setExistSize(product.size.some(({ id: sizeId }) => sizeId === id));
    setSizeError(false);
  };

  return (
    <div className="w-full flex flex-col pt-6 pb-5 gap-2 border-y-[#ccc] border-[1px] border-transparent">
      <div className="flex flex-row gap-6">
        <h2 className="text-sm font-medium">SIZE:</h2>
        <div className="text-sm underline hover:text-[#666]">Size chart</div>
      </div>
      <ul className="flex flex-row mt-4 mb-2 gap-2">
        {sizes &&
          sizes.map(({ id, size }: ISizeRes) => (
            <li
              onClick={() => handleSize(id)}
              key={id}
              className={`${
                selectedSize === id
                  ? "border-black border-[1px]"
                  : " border-transparent"
              } p-[10px] text-sm hover:border-black border-[1px]`}
            >
              <div className="w-11 flex justify-center items-center">
                {size.toUpperCase()}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductSizeInfo;
