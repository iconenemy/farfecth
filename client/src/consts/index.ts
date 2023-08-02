import services from "./services.const";
const registerBenefits = [
  "Check out faster with your saved details",
  "Track your orders and make returns",
  "Manage your profile and preferences",
];

const filterColours = [
  { id: "1", color: "milky" },
  { id: "2", color: "white" },
  { id: "3", color: "black" },
  { id: "4", color: "green" },
  { id: "5", color: "gray" },
  { id: "6", color: "blue" },
  { id: "7", color: "yellow" },
  { id: "8", color: "red" },
  { id: "9", color: "lilac" },
  { id: "10", color: "brown" },
];

const sortList = [
  { id: 1, name: "Default", key: "sort", value: "1" },
  { id: 2, name: "Price High", key: "sort", value: "2" },
  { id: 3, name: "Price Low", key: "sort", value: "3" },
  { id: 4, name: "New In", key: "sort", value: "4" },
];

const filterSection = [
  { id: 1, filterName: "sort by", filter: "" },
  { id: 2, filterName: "category", filter: "categories[]" },
  { id: 3, filterName: "colour", filter: "colors[]" },
  { id: 4, filterName: "size", filter: "sizes[]" },
];

const deliveryDetails = [
  {
    id: 1,
    title: "Next day delivery",
    description: "Place your order today and receive it tomorrow",
  },
  {
    id: 2,
    title: "Free Standard Shipping",
    description:
      "Place your order today and receive it within 3-5 working days",
  },
  {
    id: 3,
    title: "Collect-in-Store",
    description:
      "Order online today and pick up your items in store as early as tomorrow",
  },
  {
    id: 4,
    title: "Free Gift Packaging",
    description:
      "Our gift packaging includes a signature Burberry gift box finished with a hand-tied ribbon",
  },
  {
    id: 5,
    title: "Free Returns",
    description: "Enjoy free returns on your order",
  },
];

enum ROUTE {
  ABSOLUTE = "/",
  HOME = "/",
  LOADING = "loading",
  SECTION = ":section",
  MEN_SECTION = "men",
  WOMEN_SECTION = "women",
  GIFTS_SECTION = "gifts",
  PRODUCT_ITEM = ":id",
  ACCOUNT = "my-account",
  AUTH = "sign-in-register",
  OVERVIEW = "overview",
  PROFILE = "profile",
  AUTH_ABSOLUTE = "my-account/sign-in-register",
  OVERVIEW_ABSOLUTE = "my-account/overview",
  PROFILE_ABSOLUTE = "my-account/profile",
  CHECKOUT_SHOPPING_BAG = "checkout/shopping-bag/",
}

export {
  registerBenefits,
  filterColours,
  sortList,
  filterSection,
  services,
  deliveryDetails,
  ROUTE,
};
