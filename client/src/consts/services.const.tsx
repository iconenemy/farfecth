import { CgGift } from "react-icons/cg";
import { RiInboxArchiveLine, RiStore3Line } from "react-icons/ri";

const services = [
  {
    id: "free-shipping",
    label: "Free shipping and returns",
    icon: <RiInboxArchiveLine size={"20px"} />,
  },
  {
    id: "free-gift",
    label: "free gift packaging",
    icon: <CgGift size={"20px"} />,
  },
  {
    id: "collect-in-store",
    label: "collect-in-store",
    icon: <RiStore3Line size={"20px"} />,
  },
];

export default services