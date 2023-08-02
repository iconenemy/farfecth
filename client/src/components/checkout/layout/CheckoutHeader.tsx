import { FiArrowLeft } from "react-icons/fi";

import { blackLogo } from '../../../assets/logo'
import { useNavigate } from "react-router-dom";

const CheckoutHeader = () => {
  const navigate = useNavigate()
  return (
    <div className="relative ">
      <div onClick={() => navigate(-1)} className="absolute top-0 left-0 cursor-pointer">
          <FiArrowLeft size={"30px"} />
      </div>
      <div className="flex justify-center h-12  ">
        <img src={blackLogo} />
      </div>
    </div>
  );
};

export default CheckoutHeader;
