import { createStyles, makeStyles, Theme } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import React from "react";
import StartButton from "components/system/taskbar/startButton/startButton";

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

const Taskbar = ():JSX.Element => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.root}>
      <StartButton />
    </BottomNavigation>
  );
};

export default Taskbar;
