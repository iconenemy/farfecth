import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CheckoutWrapper = ({ children }: Props) => {
  return <div className="pt-16 flex flex-col">{children}</div>;
};

export default CheckoutWrapper;
