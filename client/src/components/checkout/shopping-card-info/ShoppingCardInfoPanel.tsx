import { useAppSelector } from "../../../app/hooks";
import { ICardState } from "../../../features/card/cardType";
import { Paypal, WhiteButton } from "../../inputs";

const ShoppingCardInfoPanel = () => {
  const { total_price, products_amount } = useAppSelector<ICardState>(
    (state) => state.persistedReducer.card
  );

  return (
    <div className="mb-10 bg-[#f6f6f6]">
      <div className="py-6 px-4 flex flex-col">
        <ul className="flex flex-col">
          <li className="pb-2 flex justify-between py-2 text-xs">
            <span className="w-1/2">Subtotal</span>
            <span className="w-1/2 text-end">${total_price}</span>
          </li>
          <li className="py-2 flex justify-between  text-xs">
            <span className="w-1/2">Estimated Shipping</span>
            <span className="w-1/2 text-end">Free</span>
          </li>
          <li className="pt-2 pb-6 flex justify-between  text-xs">
            <span className="w-1/2">Sales Tax</span>
            <span className="w-1/2 text-right">
              Calculated on Review & Pay step
            </span>
          </li>
          <li className="flex justify-between py-6 text-xs font-medium border-t-[#ccc] border-[1px] border-transparent">
            <span className="w-1/2">Total</span>
            <span className="w-1/2 text-right">${total_price}</span>
          </li>
        </ul>
        <div className="mt-6">
          <div>
            <WhiteButton className="w-full py-3 text-xs  text-white bg-black text-whit hover:bg-opacity-80">
              Checkout ({products_amount})
            </WhiteButton>
          </div>
          <div className="mt-4 z-10">
            <Paypal amount_value={total_price.toString()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCardInfoPanel;
