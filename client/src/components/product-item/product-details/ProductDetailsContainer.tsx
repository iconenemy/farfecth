import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ProductDetailsContainer = ({ children }: Props) => {
  return (
    <div className="w-1/2 px-10 flex flex-col items-start border-l-black border-[1px]">
      {children}
    </div>
  );
};

export default ProductDetailsContainer;
