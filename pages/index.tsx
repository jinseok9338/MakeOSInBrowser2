import type { NextPage } from "next";
import HelloWorld from "./HelloWorld";
import Background from "components/system/background/background";
import React from "react";
import Taskbar from "components/system/taskbar/taskbar";
import { ProcessProvider } from "contexts/process";
import ProcessLoader from "components/system/processes/processLoader";

const Home: NextPage = () => {
  return (
    <>
      <ProcessProvider>
        <Background />
        <Taskbar />
        <ProcessLoader />
      </ProcessProvider>
    </>
  );
};

export default Home;
