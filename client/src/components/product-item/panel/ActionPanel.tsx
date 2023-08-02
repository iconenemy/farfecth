import { Dispatch, SetStateAction } from "react";
import { HiOutlineGift } from "react-icons/hi";

import { WhiteButton } from "../../inputs";
import { ICardProduct } from "../../../features/card/cardType";
import { useAppDispatch } from "../../../app/hooks";
import { addToCard } from "../../../features/card/cartSlice";
import { IProductRes } from "../../../features/clother/clotherType";

type Props = {
  product: IProductRes;
  existSize: boolean;
  selectedSize: string;
  setSizeError: Dispatch<SetStateAction<boolean>>;
};

const ActionPanel = ({
  product,
  existSize,
  selectedSize,
  setSizeError,
}: Props) => {
  const dispatch = useAppDispatch();

  const handleClick = (product: ICardProduct) => {
    if (selectedSize === "") setSizeError(true);
    else {
      dispatch(addToCard(product));
      setSizeError(false);
    }
  };

  return (
    <div className="w-full flex flex-col pt-8 pb-8">
      <div className="flex flex-row gap-8">
        <div className="w-1/2">
          {existSize ? (
            <WhiteButton
              onClick={() =>
                handleClick({
                  id: product.id,
                  name: product.name,
                  price: Number(product.price.toString().slice(1)),
                  image: product.image,
                  color: product.color,
                  size: selectedSize,
                  qty: 1,
                })
              }
              className="w-full py-3  text-xs font-medium text-white bg-black text-whit hover:bg-opacity-80"
            >
              ADD TO BUG
            </WhiteButton>
          ) : (
            <WhiteButton className="w-full py-3  text-xs font-medium text-white bg-black text-whit hover:bg-opacity-80">
              NOTIFY ME IF BACK IN STOCK
            </WhiteButton>
          )}
        </div>
        <div className="w-1/2">
          <WhiteButton className="w-full py-3 text-xs font-medium">
            SEND USING
            <HiOutlineGift size={"17px"} />
            GIFT
          </WhiteButton>
        </div>
      </div>
    </div>
  );
};

export default ActionPanel;
