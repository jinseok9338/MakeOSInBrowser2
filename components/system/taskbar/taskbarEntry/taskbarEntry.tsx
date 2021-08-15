import React from "react";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderBottom: `${theme.sizes.taskbar.entry.borderSize} solid ${theme.colors.light.highlight}`,
      display: "flex",
      height: "100%",
      placeContent: "center",
      placeItems: "center",
      left: theme.sizes.startButton.width,
      maxWidth: theme.sizes.taskbar.entry.maxwidth,
      "&:hover": {
        backgroundColor: theme.colors.light.taskbar.hover,
      },
    },

    figure: {
      alignItems: "center",
      display: "flex",
      marginBottom: theme.sizes.taskbar.entry.borderSize,
      marginLeft: "4px",
      padding: "4px",
    },

    figcaption: {
      color: theme.colors.light.text,
      fontSize: theme.sizes.taskbar.entry.fontSize,
      fontWeight: "bold",
      letterSpacing: "-0.2px",
      marginLeft: "4px",
      overflowX: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },

    img: {
      height: theme.sizes.taskbar.entry.icon.size,
      /* margin: 2px; */
      position: "relative",
      top: "1px",
      width: theme.sizes.taskbar.entry.icon.size,
    },
  })
);

// I need to add entry sizes and entry Fontsize and borderSize, maxWidth/ hover color, highlight

type TaskbarEntryProps = {
  icon: string;
  title: string;
};

const TaskbarEntry = ({
  icon = "/favicon.ico",
  title = "Hello World",
}: TaskbarEntryProps): JSX.Element => {
  const classes = useStyles();

  return (
    <li className={classes.root}>
      <figure className={classes.figure}>
        <img className={classes.img} src={icon} alt={title} />
        <figcaption className={classes.figcaption}>{title}</figcaption>
      </figure>
    </li>
  );
};

export default TaskbarEntry;
