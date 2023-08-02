import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ProductContainer = ({ children }: Props) => {
  return <div className="w-full flex">{children}</div>;
};

export default ProductContainer;
