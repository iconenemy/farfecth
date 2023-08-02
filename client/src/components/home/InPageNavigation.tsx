import { Link } from "react-router-dom";
import { ROUTE } from "../../consts";

const InPageNavigation = () => {
  return (
    <div className="flex justify-center py-20">
      <ul className="flex flex-col items-center text-2xl font-light">
        <Link to={ROUTE.MEN_SECTION} className="my-1 p-1 hover:text-[#767676]">
          Men's clother
        </Link>
        <Link to={ROUTE.WOMEN_SECTION} className="my-1 p-1 hover:text-[#767676]">
          Women's clother
        </Link>
        <Link to={ROUTE.GIFTS_SECTION} className="my-1 p-1 hover:text-[#767676]">
          Gifts
        </Link>
      </ul>
    </div>
  );
};

export default InPageNavigation;
