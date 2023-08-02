import { Link } from "react-router-dom";
import { ROUTE } from "../../consts";

const AddressBook = () => {
  return (
    <div className="w-full py-12 px-8 flex flex-row border-b-[#ccc] border-[1px]">
      <div className="w-4/12 flex flex-col">
        <h4 className="uppercase font-medium text-[14px]">address book</h4>
        <Link to={ROUTE.ABSOLUTE} className="mt-2 underline">
          Add address
        </Link>
      </div>
      <div className="w-5/12 flex justify-start text-[14px]">
        <p>No Address Stored</p>
      </div>
      <div className="w-3/12 flex justify-center"></div>
    </div>
  );
};

export default AddressBook;
