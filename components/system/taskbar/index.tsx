import Clock from "components/system/taskbar/Clock";
import StartButton from "components/system/taskbar/startButton";
import Styledtaskbar from "components/system/taskbar/styledTaskbar";
import taskbarEntries from "components/system/taskbar/taskbarEntries";
import usetaskbarContextMenu from "components/system/taskbar/useTaskbarContextMenu";
import { useSession } from "contexts/session";
import dynamic from "next/dynamic";
import { FOCUSABLE_ELEMENT } from "utils/constants";
import React from "react";

const StartMenu = dynamic(() => import("components/system/StartMenu"));

const taskbar = (): JSX.Element => {
  const { startMenuVisible } = useSession();

  return (
    <>
      {startMenuVisible && <StartMenu />}
      <Styledtaskbar {...usetaskbarContextMenu()} {...FOCUSABLE_ELEMENT}>
        <StartButton />
        <taskbarEntries />
        <Clock />
      </Styledtaskbar>
    </>
  );
};

export default taskbar;
