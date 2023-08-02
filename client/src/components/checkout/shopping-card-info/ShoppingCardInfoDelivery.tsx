import { BsBox2Heart } from "react-icons/bs";

const ShoppingCardInfoDelivery = () => {
  return (
    <div className="flex flex-col mb-14">
      <div className="flex flex-row items-center">
        <BsBox2Heart size={"20px"} />
        <h2 className="ml-3 text-xs font-medium">FREE DELIVERY & RETURNS</h2>
      </div>
      <p className="mt-2 text-xs">Shop with confidence with free returns.</p>
    </div>
  );
};

export default ShoppingCardInfoDelivery;
