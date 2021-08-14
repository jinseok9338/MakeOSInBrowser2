import { Box, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react"
import type { FC } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    windowBox: {
      background: theme.colors.light.bolder,
      color: theme.colors.light.secondary,
      position: "absolute",
      textAlign: "center",
      fontSize: "50px",
    },
  })
);

const Window = ({ children }:{children:React.ReactNode}):JSX.Element => {
  const classes = useStyles();

  return <Box className={classes.windowBox}>{children}</Box>;
};

export default Window;
