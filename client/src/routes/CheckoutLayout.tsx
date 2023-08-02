import {
  CheckoutFooter,
  CheckoutHeader,
  ShoppingCard,
} from "../components/checkout";
import { Suspense } from "react";
import { Loading } from ".";

const CheckoutLayout = () => {
  return (
    <>
      <div className="flex flex-col pt-8 m-auto max-w-[1366px] px-10">
        <CheckoutHeader />
        <Suspense fallback={<Loading />}>
          <ShoppingCard />
        </Suspense>
      </div>
      <CheckoutFooter />
    </>
  );
};

export default CheckoutLayout;
