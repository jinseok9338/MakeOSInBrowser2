import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
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
