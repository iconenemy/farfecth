import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import { useAppDispatch } from "../../app/hooks";
import { clearCard } from "../../features/card/cartSlice";

type Props = {
  amount_value: string;
};

const Paypal = ({ amount_value }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "AXheS3py0dM8ZbYk81kJ4K7QKE6IsfjOb4JVpfu1ETkKNWw0-8Tw644-kcMBJk2HKKBmOEgd8MUhkzY4",
      }}
    >
      <PayPalButtons
        fundingSource="paypal"
        style={{ color: "black" }}
        forceReRender={["paypal", { color: "black" }, amount_value, "USD"]}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: amount_value,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions!.order!.capture().then(function (details) {
            dispatch(clearCard());
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default Paypal;
