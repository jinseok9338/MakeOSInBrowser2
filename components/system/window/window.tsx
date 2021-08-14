import { Box, createStyles, makeStyles, Theme } from "@material-ui/core";
import type { FC } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    windowBox: {
      background: theme.colors.light.bolder,
      color: theme.colors.light.secondary,
      position: "absolute",
      textAlign: "center" as "center",
      fontSize: "50px",
    },
  })
);

const Window: FC = ({ children }) => {
  const classes = useStyles();

  return <Box className={classes.windowBox}>{children}</Box>;
};

export default Window;
