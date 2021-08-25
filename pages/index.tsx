import AppsLoader from "components/system/Apps/AppsLoader";

import FileManager from "components/system/Files/FileManager";
import Taskbar from "components/system/taskbar";
import Desktop from "components/system/Desktop";
import React from "react";

const Home = (): React.ReactElement => (
  <Desktop>
    <FileManager url="/desktop" view="icon" />
    <Taskbar />
    <AppsLoader />
  </Desktop>

);

export default Home;
