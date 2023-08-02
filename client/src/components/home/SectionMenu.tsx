import { Link } from "react-router-dom";

import { womanSection, manSection, giftSection } from "../../assets/home-page";
import { ROUTE } from "../../consts";

const SectionMenu = () => {
  return (
    <div className="w-100% flex">
      <Link to={ROUTE.WOMEN_SECTION} className="relative w-1/3">
        <img src={womanSection} className="w-full h-screen object-cover" />
        <div className="absolute flex justify-center w-full bg-gray-300 bg-opacity-60 py-10 bottom-0 text-black text-2xl">
          <div className="hover:text-[#0000008f]">Women's Clothes</div>
        </div>
      </Link>
      <Link to={ROUTE.GIFTS_SECTION} className="relative w-1/3">
        <img src={giftSection} className="w-full h-screen object-cover" />
        <div className="absolute flex justify-center w-full bg-gray-300 bg-opacity-60 py-10 bottom-0 text-black text-2xl">
          <div className="hover:text-[#0000008f]">Gifts</div>
        </div>
      </Link>
      <Link to={ROUTE.MEN_SECTION} className="relative w-1/3 ">
        <img src={manSection} className="w-full h-screen object-cover" />
        <div className="absolute flex justify-center w-full bg-gray-300 bg-opacity-60 py-10 bottom-0 text-black text-2xl">
          <div className="hover:text-[#0000008f]">Men's Clothes</div>
        </div>
      </Link>
    </div>
  );
};

export default SectionMenu;
