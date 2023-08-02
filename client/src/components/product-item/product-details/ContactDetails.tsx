import { Dispatch, SetStateAction } from "react";
import { RiCloseLine } from "react-icons/ri";

type Props = {
  setDetailsSection: Dispatch<SetStateAction<string>>;
};

const ContactDetails = ({ setDetailsSection }: Props) => {
  return (
    <div className="flex flex-col">
      <h2 className="mb-7 relative text-sm font-medium">
        CAN WE HELP?
        <div
          onClick={() => setDetailsSection("")}
          className="absolute top-0 right-0 cursor-pointer"
        >
          <RiCloseLine size={"25px"} />
        </div>
      </h2>
      <ul className="flex flex-col gap-8">
        <li className="flex flex-col">
          <span className="mb-1 text-sm font-medium">Telephone</span>
          <span className="text-sm">
            Icon offers worldwide assistance 24 hours a day, seven days a week.
            Please note, we may monitor or record your communications for
            training and quality control purposes.
          </span>
        </li>
        <li className="flex flex-col">
          <span className="text-sm underline hover:text-[#76767676]">
            +1 877 217 4085
          </span>
        </li>
        <li className="flex flex-col">
          <span className="mb-1 text-sm font-medium">Email</span>
          <span className="text-sm underline hover:text-[#76767676]">
            ua.customerservice@icon.com
          </span>
        </li>
        <li className="flex flex-col">
          <span className="mb-1 text-sm font-medium">Twitter</span>
          <span className="text-sm underline hover:text-[#76767676]">
            @IconEnemy
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ContactDetails;
