import { lazy } from "react";

import Layout from "./Layout";
const Home = lazy(() => import("./Home"));
const Auth = lazy(() => import("./Auth"));
const Account = lazy(() => import("./Account"));
// const Profile = lazy(() => import("./Profile"));
import Profile from "./Profile";
const Overview = lazy(() => import("./Overview"));

export { Layout, Home, Auth, Account, Profile, Overview };
