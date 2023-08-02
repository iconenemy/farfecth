import { Link } from "react-router-dom";

import { collectionImage1, collectionImage2 } from "../../assets/home-page";
import { ROUTE } from "../../consts";

const Collection = () => {
  return (
    <div className="w-full mt-[87vh] relative flex">
      <img
        src={collectionImage1}
        className="w-1/2 h-screen object-cover object-top"
      />
      <img
        src={collectionImage2}
        className="w-1/2  h-screen object-cover object-top"
      />
      <h1 className="absolute bottom-32 left-0 right-0 ml-auto mr-auto w-60 text-2xl font-light z-20 text-white">
        Summer Collection
      </h1>
      <div className="absolute bottom-20 left-0 right-0 ml-auto mr-auto w-60 text-sm font-light z-20 text-white">
        <Link
          to={ROUTE.WOMEN_SECTION}
          className="ml-[20%] mr-[15%] py-1 hover:border-b-[1px]"
        >
          Women
        </Link>
        <Link to={ROUTE.MEN_SECTION} className="py-1 hover:border-b-[1px]">
          Men
        </Link>
      </div>
    </div>
  );
};

export default Collection;
