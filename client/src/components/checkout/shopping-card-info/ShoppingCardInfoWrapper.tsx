import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ShoppingCardInfoWrapper = ({ children }: Props) => {
  return <div className="h-full w-4/12 px-5 ">{children}</div>;
};

export default ShoppingCardInfoWrapper;
