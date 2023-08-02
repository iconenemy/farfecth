import {
  ShoppingCardDispalyList,
  CheckoutTitle,
  CheckoutWrapper,
  ShoppingCardWrapper,
  ShoppingCardInfoWrapper,
  ShoppingCardInfoPanel,
  ShoppingCardInfoDelivery,
  ShoppingCardInfoPaymentMethods,
  EmptyShoppingCard,
} from ".";
import { useAppSelector } from "../../app/hooks";
import { ICardState } from "../../features/card/cardType";

const CheckoutShoppingCard = () => {
  const { products_amount } = useAppSelector<ICardState>(
    (state) => state.persistedReducer.card
  );

  return (
    <CheckoutWrapper>
      {products_amount > 0 ? (
        <>
          <CheckoutTitle />
          <ShoppingCardWrapper>
            <ShoppingCardDispalyList />
            <ShoppingCardInfoWrapper>
              <ShoppingCardInfoPanel />
              <ShoppingCardInfoDelivery />
              <ShoppingCardInfoPaymentMethods />
            </ShoppingCardInfoWrapper>
          </ShoppingCardWrapper>
        </>
      ) : (
        <EmptyShoppingCard />
      )}
    </CheckoutWrapper>
  );
};

export default CheckoutShoppingCard;
