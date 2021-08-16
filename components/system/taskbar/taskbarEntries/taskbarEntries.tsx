import TaskbarEntry from "components/system/taskbar/taskbarEntry/taskbarEntry";
import { ProcessConsumer } from "contexts/process";
import type { FC } from "react";
import React from "react";
import List from "@material-ui/core/List";
import { useStyles } from "./styledTaskbarEntries";

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
