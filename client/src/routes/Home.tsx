import { CgGift } from "react-icons/cg";
import { RiInboxArchiveLine, RiStore3Line } from "react-icons/ri";

import image from "../assets/t-shirt.png";
import { WhiteButton } from "../components/inputs";
import { ScrollUp } from "../components/navigation";
import Filter from "../components/layout/Filter";
import { useRefreshQuery } from "../app/api/apiSlice";

const arr = [
  {
    img: image,
    title: "EKB Technical",
    price: "420",
  },
  {
    img: image,
    title: "Monogram Motif",
    price: "350",
  },
  {
    img: image,
    title: "Logo Detail Wool",
    price: "390",
  },
  {
    img: image,
    title: "Check Silk Wool",
    price: "690",
  },
  {
    img: image,
    title: "Icon Stripe Collor Red",
    price: "390",
  },
  {
    img: image,
    title: "Icon Stripe Collor Black",
    price: "390",
  },
];

const filterNav = ["women", "gifting"];

const clothSection = [
  { section: "All Clothing" },
  { section: "Polos & T-Shirt" },
  { section: "Shirts" },
  { section: "Hoodies & Sweatshirts" },
  { section: "Knitswear" },
  { section: "Trousers & Shorts" },
  { section: "Tailoring" },
  { section: "Swimwear" },
  { section: "Underwear" },
];

const services = [
  {
    label: "Free shipping and returns",
    icon: <RiInboxArchiveLine size={"20px"} />,
  },
  { label: "free gift packaging", icon: <CgGift size={"20px"} /> },
  { label: "collect-in-store", icon: <RiStore3Line size={"20px"} /> },
];

const Home = () => {
  useRefreshQuery()

  return (
    <>
      <div className="pt-28 pb-32 flex justify-center uppercase font-medium tracking-wider">
        <h1>Men's clothing</h1>
      </div>
      <Filter />
      <div className="flex justify-center py-12 text-xs">400 results</div>
      <div className="flex justify-center pb-12 font-medium text-[14px]">
        Polo Shirts
      </div>
      <div className="w-full flex flex-col justify-center mb-16 border-b-2 border-[#ccc]">
        <ul className="flex justify-center flex-wrap gap-1">
          {arr.map(({ img, title, price }) => (
            <div key={title} className="flex flex-col">
              <img src={img} className="w-[375px] h-[502px]" />
              <div className="pt-6 pb-16 flex flex-col items-center gap-1">
                <div className="text-xs font-medium">{title}</div>
                <div className="text-xs">₴{price}</div>
              </div>
            </div>
          ))}
        </ul>
        <div className="mt-6 mb-28 flex justify-center">
          <WhiteButton className="px-14 py-3 text-xs font-medium">
            view 37 more{" "}
          </WhiteButton>
        </div>
      </div>
      <div className="mb-32 py-10 ">
        <ul className=" flex flex-col items-center uppercase font-light text-2xl">
          {filterNav.map((item, idx) => (
            <li className="p-3 gap-2 cursor-pointer" key={idx}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-24 pb-32 flex justify-center">
        <p className="max-w-[428px] text-center text-sm">
          The Burberry menswear collection showcases Heritage Trench Coats and
          iconic outerwear alongside knitwear and T-shirts animated with our
          house codes.
        </p>
      </div>
      <div className="pt-12 pb-28">
        <ul className="flex justify-center uppercase">
          {services.map((item, idx) => (
            <li
              className="flex flex-col items-center w-[220px] text-center text-[12px] font-medium"
              key={idx}
            >
              <div className="mb-[15px]">{item.icon}</div>
              <p>{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
      <ScrollUp />
      <div className="mt-12 pt-10 flex flex-col items-center">
        <p className="uppercase text-[12px] font-medium">more for you</p>
        <div className="py-6">
          <ul className="flex flex-row ">
            {clothSection.map(({ section }, idx) => (
              <li
                className="px-4 mb-6 [&:not(:last-child)]:border-r-[1px] border-[#ccc] text-[12px]"
                key={idx}
              >
                {section}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
