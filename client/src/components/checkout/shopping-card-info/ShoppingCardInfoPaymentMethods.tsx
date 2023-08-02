import {
  applePay,
  visa,
  masterCard,
  americanExpress,
  unionPay,
  discover,
  jcb,
  klarna,
  payPal,
} from "../../../assets/card-icons";

const ShoppingCardInfoPaymentMethods = () => {
  return (
    <div className="flex flex-col mb-14">
      <h2 className="mb-2 text-xs font-medium">ICON ACCEPTS</h2>
      <div className="flex flex-row flex-wrap">
        <img src={applePay} className="h-8 w-12 mr-2 mb-[10px]" />
        <img src={visa} className="h-8 w-12 mr-2 mb-[10px]" />
        <img src={masterCard} className="h-8 w-12 mr-2 mb-[10px]" />
        <img src={americanExpress} className="h-8 w-12 mr-2 mb-[10px]" />
        <img src={unionPay} className="h-8 w-12 mr-2 mb-[10px]" />
        <img src={discover} className="h-8 w-12 mr-2 mb-[10px]" />
        <img src={jcb} className="h-8 w-12 mr-2 mb-[10px]" />
        <img src={klarna} className="h-8 w-12 mr-2 mb-[10px]" />
        <img src={payPal} className="h-8 w-12 mr-2 mb-[10px]" />
      </div>
    </div>
  );
};

export default ShoppingCardInfoPaymentMethods;
