import { useAppSelector } from "../../app/hooks";
import { ICardState } from "../../features/card/cardType";

const CheckoutTitle = () => {
  const { products_amount } = useAppSelector<ICardState>(
    (state) => state.persistedReducer.card
  );
  
  return (
    <div className="flex justify-center mb-16">
      <h1 className="text-base font-medium tracking-tight">
        SHOPPING BAG ({products_amount})
      </h1>
    </div>
  );
};

export default CheckoutTitle;
