import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ShoppingCardWrapper = ({ children }: Props) => {
  return <div className="pb-28 flex justify-between">{children}</div>;
};

export default ShoppingCardWrapper;
