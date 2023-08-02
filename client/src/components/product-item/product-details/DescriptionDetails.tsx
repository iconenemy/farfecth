import { Dispatch, SetStateAction } from "react";
import { RiCloseLine } from "react-icons/ri";

type Props = {
  description: string;
  setDetailsSection: Dispatch<SetStateAction<string>>;
};

const DescriptionDetails = ({ description, setDetailsSection }: Props) => {
  return (
    <div className="flex flex-col">
      <h2 className="relative text-sm font-medium">
        PRODUCT DETAILS
        <div
          onClick={() => setDetailsSection("")}
          className="absolute top-0 right-0 cursor-pointer"
        >
          <RiCloseLine size={"25px"} />
        </div>
      </h2>
      <ul className="mt-10 flex flex-col gap-2">
        {description.split(".").map((item, idx) => (
          <li key={idx} className="text-sm font-normal">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DescriptionDetails;
