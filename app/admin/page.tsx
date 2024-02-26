import type { NextPage } from "next";
import { Content } from "@/components/home/content";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const Home: NextPage = () => {
  return <Content />;
};

export default Home;
