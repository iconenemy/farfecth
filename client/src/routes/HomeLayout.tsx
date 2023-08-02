import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Loading } from ".";
import { Footer, Header } from "../components/layout";

const HomeLayout = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default HomeLayout;
