import { lazy } from "react";

const Home = lazy(() => import("./Home"));
import HomeLayout from "./HomeLayout";
import Loading from "./Loading";
import Layout from "./Layout";
import CheckoutLayout from "./CheckoutLayout";
const Profile = lazy(() => import("./Profile"));
const Auth = lazy(() => import("./Auth"));
const Section = lazy(() => import("./Section"));
const ProductList = lazy(() => import("./ProductList"));
const ProductItem = lazy(() => import("./ProductItem"));
const Account = lazy(() => import("./Account"));
const Overview = lazy(() => import("./Overview"));

export {
  Home,
  Auth,
  Layout,
  Loading,
  Profile,
  Section,
  Account,
  Overview,
  HomeLayout,
  ProductList,
  ProductItem,
  CheckoutLayout,
};
