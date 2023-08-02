import { RiCloseLine } from "react-icons/ri";

import { deliveryDetails } from "../../../consts";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setDetailsSection: Dispatch<SetStateAction<string>>;
};

const DeliveryDetails = ({ setDetailsSection }: Props) => {
  return (
    <div className="flex flex-col">
      <h2 className="mb-7 relative text-sm font-medium">
        DELIVERY DETAILS
        <div
          onClick={() => setDetailsSection("")}
          className="absolute top-0 right-0 cursor-pointer"
        >
          <RiCloseLine size={"25px"} />
        </div>
      </h2>
      <ul className="flex flex-col gap-8">
        {deliveryDetails.map((item) => (
          <li key={item.id} className="flex flex-col">
            <span className="mb-1 text-sm font-medium">{item.title}</span>
            <span className="text-sm">{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryDetails;
