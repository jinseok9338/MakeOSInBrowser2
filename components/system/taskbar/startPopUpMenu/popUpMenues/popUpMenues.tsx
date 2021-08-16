import React from "react";
import List from "@material-ui/core/List";
import PopUpMenu from "./popUpMenu";
import { useStyles } from "./styledPopUpMenues";

type PopUpMenuesProps = {
  close: (id: string) => void;
  open: (id: string) => void;
  handleClose: () => void;
};

const PopUpMenues = ({ close, open, handleClose }: PopUpMenuesProps) => {
  const classes = useStyles();

  return (
    <List
      component="nav"
      className={classes.menues}
      aria-label="mailbox folders"
    >
      <PopUpMenu open={open} close={close} handleClose={handleClose} />
    </List>
  );
};

export default PopUpMenues;
