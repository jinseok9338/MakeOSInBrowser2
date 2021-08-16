import React from "react";
import { useStyles } from "./styledTaskbarEntry";

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
