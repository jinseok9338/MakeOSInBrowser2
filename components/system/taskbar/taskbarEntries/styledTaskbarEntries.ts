import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      left: theme.sizes.startButton.width,
      position: "absolute",
      right: theme.sizes.startButton.width,
      paddingTop: 0,
      paddingBottom: 0,
    },
  })
);
