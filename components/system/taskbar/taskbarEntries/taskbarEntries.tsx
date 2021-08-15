import TaskbarEntry from "components/system/taskbar/taskbarEntry/taskbarEntry";
import { ProcessConsumer } from "contexts/process";
import type { FC } from "react";
import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme: Theme) =>
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

const TaskbarEntries: FC = () => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ProcessConsumer>
        {({ mapProcesses }) =>
          mapProcesses(([id, { icon, title }]) => (
            <TaskbarEntry key={id} icon={icon} title={title} />
          ))
        }
      </ProcessConsumer>
    </List>
  );
};

export default TaskbarEntries;
