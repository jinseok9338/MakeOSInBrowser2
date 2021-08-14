import { createStyles, makeStyles, Theme } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import React from "react";
import StartButton from "./startButton/startButton";

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

const Taskbar = () => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.root}>
      <StartButton />
    </BottomNavigation>
  );
};

export default Taskbar;
