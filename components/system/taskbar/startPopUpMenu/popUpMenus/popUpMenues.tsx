import React from "react";
import List from "@material-ui/core/List";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import PopUpMenu from "./popUpMenu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menues: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

const PopUpMenues = () => {
  const classes = useStyles();

  return (
    <List
      component="nav"
      className={classes.menues}
      aria-label="mailbox folders"
    >
      <PopUpMenu />
    </List>
  );
};

export default PopUpMenues;
