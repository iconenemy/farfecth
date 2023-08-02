import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { HiMinus, HiPlus } from "react-icons/hi";

import { cardUpdate, removeProduct } from "../../../features/card/cartSlice";
import { useAppDispatch } from "../../../app/hooks";
import {
  useGetAllSizesQuery,
  useGetProductByIdQuery,
  useGetSizeByIdQuery,
} from "../../../features/clother/clotherApiSlice";
import Modal from "../../../portals/Modal";
import { WhiteButton } from "../../inputs";
import { usePortalScrollDisable } from "../../../hooks";
import { ICardProduct } from "../../../features/card/cardType";

type Props = {
  id: string;
  name: string;
  color: string;
  size: string;
  image: string;
  price: number;
  qty: number;
};

const ShoppingCardDisplayProduct = ({
  id,
  name,
  color,
  size,
  image,
  price,
  qty,
}: Props) => {
  const dispatch = useAppDispatch();

  const { data: sizeById } = useGetSizeByIdQuery(size);
  const { data: sizes } = useGetAllSizesQuery();
  const { data: product } = useGetProductByIdQuery(id);

  const [selectedSize, setSelectedSize] = useState<string>(size);
  const [productQty, setProductQty] = useState<number>(qty);

  const [open, setOpen] = useState<boolean>(false);

  usePortalScrollDisable(open);

  const handleRemove = (id: string) => {
    dispatch(removeProduct(id));
  };

  const handleSize = (id: string) => {
    product?.size.some((item) => item.id === id) ? setSelectedSize(id) : null;
  };

  const handleSave = (product: ICardProduct) => {
    dispatch(cardUpdate(product));
    setOpen(false);
  };

  return (
    <li
      key={id}
      className="w-full pt-12 pb-6 border-b-[#ccc] border-[1px] border-transparent"
    >
      <div className="flex flex-row">
        <div className="w-44">
          <img src={image} />
        </div>

        <div className="w-full pl-7 flex flex-col justify-between">
          <div className="flex flex-col">
            <h2 className="text-xs font-medium mb-4 tracking-tight">{name}</h2>
            <p className="text-xs mb-2 tracking-tight">
              {color.charAt(0).toUpperCase().concat(color.slice(1))}
            </p>
            <p className="text-xs mb-2 tracking-tight">
              Item: {id.slice(-8).toUpperCase()}
            </p>
            <div className="flex flex-row items-center">
              <p className="pr-2 text-xs border-r-black border-[1px] border-transparent tracking-tight">
                Size: {sizeById?.size.toUpperCase()}
              </p>
              <p className="px-2 text-xs border-r-black border-[1px] border-transparent tracking-tight">
                Qty: {qty}
              </p>
              <p
                className="pl-2 cursor-pointer text-xs underline hover:text-[#767676] tracking-tight"
                onClick={() => setOpen(true)}
              >
                Edit
              </p>
              {open && (
                <Modal>
                  <div className="relative h-[600px] w-[970px] flex justify-center">
                    <div className="w-full p-10 flex flex-col items-center">
                      <div className="w-full pb-7 flex justify-between items-center">
                        <h2 className="text-base font-medium">EDIT ITEM</h2>
                        <div
                          onClick={() => {
                            setOpen(false);
                            setProductQty(qty);
                          }}
                        >
                          <RiCloseLine size={"30px"} />
                        </div>
                      </div>
                      <div className="w-full flex justify-between">
                        <div>
                          <img src={image} className="h-[470px] w-[650px]" />
                        </div>
                        <div className="w-full px-5 flex flex-col">
                          <div className="pb-6 border-b-[#ccc] border-[1px] border-transparent">
                            <h2 className="mb-6 text-sm font-medium">{name}</h2>
                            <p className="mb-4 text-sm">Select quantity:</p>
                            <div className="flex flex-row items-center">
                              <button
                                onClick={() => {
                                  productQty > 1 &&
                                    setProductQty((prev) => --prev);
                                }}
                                className={`${
                                  productQty > 1 ? "" : "disabled text-[#ccc]"
                                }`}
                              >
                                <HiMinus size={"18px"} />
                              </button>
                              <span className="mx-5 text-base font-medium">
                                {productQty}
                              </span>
                              <button
                                onClick={() => setProductQty((prev) => ++prev)}
                              >
                                <HiPlus size={"18px"} />
                              </button>
                            </div>
                          </div>
                          <div className="py-6 border-b-[#ccc] border-[1px] border-transparent">
                            <p className="mb-4 text-sm">Select size (UK):</p>
                            <ul className="flex flex-row mt-4 mb-2 gap-2">
                              {sizes &&
                                sizes.map(({ id, size }) => (
                                  <li
                                    onClick={() => handleSize(id)}
                                    key={id}
                                    className={`${
                                      selectedSize === id
                                        ? "border-black border-[1px]"
                                        : "border-transparent"
                                    } ${
                                      product?.size.some(
                                        (item) => item.id === id
                                      )
                                        ? "hover:border-black border-[1px]"
                                        : "line-through text-[#ccc]"
                                    } p-[10px] text-sm`}
                                  >
                                    <div className="w-11 flex justify-center items-center">
                                      {size.toUpperCase()}
                                    </div>
                                  </li>
                                ))}
                            </ul>
                          </div>
                          <div className="mt-8">
                            <WhiteButton
                              onClick={() =>
                                handleSave({
                                  id,
                                  name,
                                  price: price / qty,
                                  image,
                                  color,
                                  size: selectedSize,
                                  qty: productQty,
                                })
                              }
                              className="w-full py-3 text-xs  text-white bg-black text-whit hover:bg-opacity-80"
                            >
                              SAVE
                            </WhiteButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
              )}
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex flex-row">
              <button
                onClick={() => handleRemove(id)}
                className="pr-4 text-xs underline border-r-black border-[1px] border-transparent tracking-tight hover:text-[#767676]"
              >
                Remove
              </button>
              <button className="px-4 text-xs underline tracking-tight hover:text-[#767676]">
                Safe for later
              </button>
            </div>
            <div className="text-xs font-medium tracking-tight">${price}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ShoppingCardDisplayProduct;
