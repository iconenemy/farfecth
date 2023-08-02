import { useRefreshQuery } from "../app/api/apiSlice";
import { Collection, InPageNavigation, SectionMenu } from "../components/home";

const Home = () => {
  useRefreshQuery();

  return (
    <>
      <Collection />
      <InPageNavigation />
      <SectionMenu />
    </>
  );
};

export default Home;
