import type { NextPage } from "next";
import { Typography } from "@material-ui/core";
import HelloWorld from "./HelloWorld";
import Background from "./components/background/background";
import React from "react";
import Taskbar from "./components/taskbar/taskbar";

const Home: NextPage = () => {
  return (
    <>
      <Taskbar />
      <Background />
    </>
  );
};

export default Home;
