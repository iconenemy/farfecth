import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ProductInfoWrapper = ({ children }: Props) => {
  return (
    <div className="pt-8 pb-6 border-b-[#ccc] border-[1px] border-transparent">
      {children}
    </div>
  );
};

export default ProductInfoWrapper;
