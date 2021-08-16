import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    startbutton: {
      width: theme.sizes.startButton.width,
      height: theme.sizes.taskbar.height,
      background: theme.colors.light.secondary,
      paddingRight: 0,
      paddingLeft: 0,
      position: "absolute",
      left: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      "&:hover": {
        background: theme.colors.light.primary,
      },
    },
  })
);
