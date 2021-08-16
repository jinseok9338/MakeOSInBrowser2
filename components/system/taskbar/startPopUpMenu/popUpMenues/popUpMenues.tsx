import React from "react";
import List from "@material-ui/core/List";
import PopUpMenu from "./popUpMenu";
import { useStyles } from "./styledPopUpMenues";

type PopUpMenuesProps = {
  handleClose: () => void;
};

const PopUpMenues = ({  handleClose }: PopUpMenuesProps):JSX.Element => {
  const classes = useStyles();

  return (
    <List
      component="nav"
      className={classes.menues}
      aria-label="mailbox folders"
    >
      <PopUpMenu  handleClose={handleClose} />
    </List>
  );
};

export default PopUpMenues;
