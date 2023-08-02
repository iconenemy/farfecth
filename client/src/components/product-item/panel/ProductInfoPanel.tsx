import { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";

import { klarnaTransparentBg } from "../../../assets/card-icons";
import Modal from "../../../portals/Modal";
import { IProductRes } from "../../../features/clother/clotherType";
import { usePortalScrollDisable } from "../../../hooks";

type Props = {
  product: IProductRes;
};

const ProductInfoPanel = ({ product }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  usePortalScrollDisable(open);
  
  return (
    <div className="w-full pt-6 pb-4 border-transparent border-b-[#ccc] border-[1px] ">
      <div className="mb-8 flex flex-row text-sm">
        <div className="hover:text-[#767676]">
          {product.section.section_name
            .charAt(0)
            .toUpperCase()
            .concat(product.section.section_name.slice(1))}
        </div>
        <div className="mx-2 text-xs text-[#ccc]">|</div>
        <div className="hover:text-[#767676]">
          {product.category.category_name
            .charAt(0)
            .toUpperCase()
            .concat(product.category.category_name.slice(1))}
        </div>
        <div className="mx-2 text-xs text-[#ccc]">|</div>
        <div className="hover:text-[#767676]">
          {product.color.charAt(0).toUpperCase().concat(product.color.slice(1))}
        </div>
      </div>
      <div className="my-3 text-base font-medium ">{product.name}</div>
      <div className="pb-2 text-sm">{product.price}</div>
      {product.in_stock && (
        <div className="pb-2 flex flex-row items-center gap-1 text-xs text-[#666] hover:underline decoration-inherit">
          <div onClick={() => setOpen(true)}>Instalment payments available</div>
          {open && (
            <Modal>
              <div className="w-[580px] h-[220px]">
                <div className="flex flex-col pb-10">
                  <div className="px-10 pt-10 pb-6 flex justify-between">
                    <div className="flex flex-row items-center">
                      <h2 className="mr-2 text-sm font-medium tracking-tighter">
                        PAY IN INSTALMENTS WITH
                      </h2>
                      <img src={klarnaTransparentBg} className="w-12 h-3" />
                    </div>
                    <div onClick={() => setOpen(false)}>
                      <RiCloseLine size={"20px"} />
                    </div>
                  </div>
                  <div className="px-10">
                    <p className="mb-4 text-sm tracking-tighter">
                      We’ve partnered with Klarna to provide instalment payment
                      options so you can enjoy your purchase now and pay over
                      time. Just select Klarna at checkout.
                    </p>
                    <div>
                      <p
                        onClick={() =>
                          window.open("https://www.klarna.com/us/pay-in-4/")
                        }
                        className="text-sm underline hover:text-[#767676]"
                      >
                        Learn more
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          )}
          <IoIosInformationCircleOutline size={"20px"} />
        </div>
      )}
    </div>
  );
};

export default ProductInfoPanel;
