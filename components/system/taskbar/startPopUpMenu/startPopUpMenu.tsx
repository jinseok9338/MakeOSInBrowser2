import { Box, makeStyles, Theme } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import React, { useState, useEffect } from "react";
import PopUpMenues from "./popUpMenues/popUpMenues";

type StartPopUpMenuProps = {
  el: HTMLDivElement | null;
  handleClose: () => void;
  close: (id: string) => void;
  open: (id: string) => void;
};

const StartPopUpMenu = ({
  el,
  handleClose,
  close,
  open,
}: StartPopUpMenuProps) => {
  return (
    <Popover
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
      <PopUpMenues close={close} open={open} handleClose={handleClose} />
    </Popover>
  );
};

export default StartPopUpMenu;
