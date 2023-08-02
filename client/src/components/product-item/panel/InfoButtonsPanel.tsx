import { Dispatch, SetStateAction } from "react";

type Props = {
  setDetailsSection: Dispatch<SetStateAction<string>>;
};

const InfoButtonsPanel = ({ setDetailsSection }: Props) => {
  return (
    <div className="pb-4 pt-4 flex flex-row items-center align-baseline">
      <button
        onClick={() => setDetailsSection("description")}
        className="text-sm underline tracking-tight hover:text-[#767676]"
      >
        More datails
      </button>
      <div className="mx-6 h-full text-sm border-r-[#ccc] border-[1px]"></div>
      <button
        onClick={() => setDetailsSection("contacts")}
        className="text-sm underline tracking-tight hover:text-[#767676]"
      >
        Contact us
      </button>
    </div>
  );
};

export default InfoButtonsPanel;
