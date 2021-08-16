import BottomNavigation from "@material-ui/core/BottomNavigation";
import React from "react";
import StartButton from "components/system/taskbar/startButton/startButton";
import TaskbarEntries from "components/system/taskbar/taskbarEntries/taskbarEntries";
import { useStyles } from "./styledTaskbar";

const Taskbar = (): JSX.Element => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.root}>
      <TaskbarEntries />
      <StartButton />
    </BottomNavigation>
  );
};

export default Taskbar;
