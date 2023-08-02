import { Link } from "react-router-dom";

import { visaVerified, safeKey, masterCardSecure } from '../../../assets/card-icons'
import { ROUTE } from "../../../consts";

const CheckoutFooter = () => {
  return (
    <div className="w-full py-14 border-t-[#cccc] border-[1px] border-transparent">
      <div className="max-w-[1366px] mx-auto flex justify-center">
        <div className="w-full px-5 flex flex-row items-center">
          <div className="w-1/2 px-5 flex flex-col items-start">
            <div className="mb-5 text-xs font-medium">HELP WITH YOUR ORDER</div>
            <button className="text-xs underline hover:text-[#767676]">
              +380 97 250 1996
            </button>
            <button className="mt-4 text-xs underline hover:text-[#767676]">
              customerservice@icon.com
            </button>
          </div>

          <div className="w-1/2 py-5 flex flex-col items-start">
            <div className="mb-5 text-xs font-medium">HELP WITH YOUR ORDER</div>
            <span className="text-xs tracking-tight">
              Your security is important to us. For full details of how we
              protect your payment and personal details, please read our{" "}
              <Link
                to={ROUTE.HOME}
                className="tracking-tight underline hover:text-[#767676]"
              >
                Privacy Statement
              </Link>
            </span>
            <div className="mt-6 flex flex-row items-center">
              <img src={safeKey} className="mr-2 h-5 w-14" />

              <img src={masterCardSecure} className="mr-2 h-5 w-14" />
              <img src={visaVerified} className="h-5 w-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutFooter;
