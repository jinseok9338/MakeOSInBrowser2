import { Box, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import Draggable from "react-draggable";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    windowBox: {
      background: theme.colors.light.bolder,
      color: theme.colors.light.secondary,
      position: "absolute",
      textAlign: "center",
      fontSize: "50px",
      cursor: "grab"
    },
    handle: {
      cursor: "grab"
    }
  })
);

const Window = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const classes = useStyles();

  return (
    <Draggable>
      <Box className={classes.windowBox}>{children}</Box>
    </Draggable>
  );
};

export default Window;

//https://lo-victoria.com/making-draggable-components-in-react