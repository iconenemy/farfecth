import { Dispatch, SetStateAction } from "react";
import { RiErrorWarningLine } from "react-icons/ri";

type Props = {
  existSize: boolean;
  setDetailsSection: Dispatch<SetStateAction<string>>
};

const MessagePanel = ({ existSize, setDetailsSection }: Props) => {
  return (
    <>
      {existSize ? (
        <div className="flex flex-row gap-2">
          <div className="text-sm tracking-tight">
            Free Shipping and Returns
          </div>
          <div onClick={() => setDetailsSection('delivery')} className="text-sm tracking-tight underline hover:text-[#767676]">
            More details
          </div>
        </div>
      ) : (
        <div className="flex flex-col relative pl-7">
          <div className="mb-2 text-sm font-medium text-[#cb512c]">
            This product is currently unavailable
          </div>
          <span className="text-sm tracking-tighter">
            If the product becomes available &nbsp;
            <button className="underline tracking-tighter"> Notify me, </button>
            &nbsp; or &nbsp;
            <button className="underline tracking-tighter">
              {" "}
              Find in store{" "}
            </button>
          </span>
          <div className="absolute top-0 left-0">
            <RiErrorWarningLine color={"#cb512c"} size={"20px"} />
          </div>
        </div>
      )}
    </>
  );
};

export default MessagePanel;
