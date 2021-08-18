import AppsLoader from "components/system/Apps/AppsLoader";
import Background from "components/system/background/background";
import FileManager from "components/system/Files/FileManager";
import Taskbar from "components/system/taskbar";
import React from "react";

const Home = (): React.ReactElement => (
  <>
    <Background />
    <FileManager url="/desktop" view="icon" />
    <Taskbar />
    <AppsLoader />
  </>
);

export default Home;
