import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "../components/layout";

const Layout = () => {
  return (
    <div className="box-border p-0 m-0">
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
