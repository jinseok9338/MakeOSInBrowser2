import type { NextPage } from "next";
import { Typography } from "@material-ui/core";
import HelloWorld from "./HelloWorld";
import Background from "./components/background/background";

const Home: NextPage = () => {
  return <Background />;
};

export default Home;
