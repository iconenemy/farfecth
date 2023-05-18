import { useScrollDirection } from "../../hooks/useScrollDirection";
import { IoIosArrowUp } from "react-icons/io";

const ScrollUp = () => {
    const scrollDirection = useScrollDirection();
  return (
    <div
        className={`sticky ${
          scrollDirection === "up" ? "bottom-28" : ""
        }  h-10 pr-9 transition-all duration-700 flex justify-end`}
      >
        <button className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center">
          <IoIosArrowUp size={"30px"} />
        </button>
      </div>
  )
}

export default ScrollUp