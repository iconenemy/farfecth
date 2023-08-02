import { ShoppingCardDisplayProduct } from "..";
import { useAppSelector } from "../../../app/hooks";
import { ICardState } from "../../../features/card/cardType";

const ShoppingCardDispalyList = () => {
  const { products } = useAppSelector<ICardState>(
    (state) => state.persistedReducer.card
  );

  return (
    <div className="w-7/12 px-5 border-t-[#ccc] border-[1px]  border-transparent">
      <ul>
        {products.map((item) => (
          <ShoppingCardDisplayProduct key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCardDispalyList;
