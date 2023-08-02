import { MdStoreMallDirectory } from "react-icons/md";
import { RiCalendarTodoFill } from "react-icons/ri";

const LinksPanel = () => {
  return (
    <div className=" mt-8 flex flex-col ">
      <div className="relative pl-7 mb-6  flex flex-col items-start">
        <button className="underline text-sm tracking-tight hover:text-[#767676]">
          Find in store
        </button>
        <div className="text-sm tracking-tight">
          Find this item in your closest Icon store.
        </div>
        <div className="absolute top-0 left-0">
          <MdStoreMallDirectory size={"20px"} />
        </div>
      </div>

      <div className="relative pl-7 flex flex-col items-start">
        <button className="underline text-sm tracking-tight hover:text-[#767676]">
          Book an Appointment
        </button>
        <div className="text-sm tracking-tight">
          In-store, virtual, or after-care appointment – depending on your
          country.
        </div>
        <div className="absolute top-0 left-0">
          {" "}
          <RiCalendarTodoFill size={"20px"} />
        </div>
      </div>
    </div>
  );
};

export default LinksPanel;
