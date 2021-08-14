import { createStyles, makeStyles, Theme } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import React from "react";
import StartButton from "components/system/taskbar/startButton/startButton";
import TaskbarEntries from 'components/system/taskbar/taskbarEntries/taskbarEntries';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: theme.sizes.taskbar.width,
      height: theme.sizes.taskbar.height,
      background: theme.colors.light.primary,
      position: "fixed",
      bottom: 0,
    },
  })
);

const Taskbar = (): JSX.Element => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.root}>
      <StartButton />
      <TaskbarEntries />
    </BottomNavigation>
  );
};

export default Taskbar;
