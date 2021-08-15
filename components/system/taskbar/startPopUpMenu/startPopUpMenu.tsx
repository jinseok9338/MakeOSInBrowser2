import { Box, makeStyles, Theme } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import React, { useState, useEffect } from "react";
import PopUpMenues from "./popUpMenus/popUpMenues";

type StartPopUpMenuProps = {
  el: HTMLDivElement | null;
    handleClose: () => void;
    close: (id: string) => void
    open: (id: string) => void
};

const styles = makeStyles<Theme>((theme) => ({
  popover: {
    borderRadius: "none",
  },
}));

const StartPopUpMenu = ({ el, handleClose,close,open }: StartPopUpMenuProps) => {
  const classes = styles();

  return (
    <Popover
      className={classes.popover}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      marginThreshold={0}
      disableEnforceFocus={true}
      open={!!el}
      anchorEl={el}
      onClose={() => handleClose()}
    >
      <PopUpMenues close={close} open={open} />
    </Popover>
  );
};

export default StartPopUpMenu;
//Problem with not updating the elment
