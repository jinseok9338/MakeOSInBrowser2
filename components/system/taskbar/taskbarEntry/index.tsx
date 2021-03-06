import PeekWindow from "components/system/taskbar/taskbarEntry/Peek/peekWindow";
import StyledTaskbarEntry from "components/system/taskbar/taskbarEntry/styledTaskbarEntry";
import useTaskbarEntryContextMenu from "components/system/taskbar/taskbarEntry/useTaskbarEntryContextMenu";
import useTaskbarTransition from "components/system/taskbar/taskbarEntry/useTaskbarTransition";
import useNextFocusable from "components/system/window/useNextFocusable";
import { useProcesses } from "contexts/process";
import { useSession } from "contexts/session";
import { AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import Button from "styles/common/Button";
import Icon from "styles/common/Icon";
import React from "react";

type TaskbarEntryProps = {
  icon: string;
  id: string;
  title: string;
};

const TaskbarEntry = ({ icon, id, title }: TaskbarEntryProps): JSX.Element => {
  const nextFocusableId = useNextFocusable(id);
  const { foregroundId, setForegroundId } = useSession();
  const isForeground = id === foregroundId;
  const {
    linkElement,
    minimize,
    processes: { [id]: { minimized = false } = {} },
  } = useProcesses();
  const linkTaskbarEntry = useCallback(
    (taskbarEntry: HTMLButtonElement) =>
      taskbarEntry && linkElement(id, "taskbarEntry", taskbarEntry),
    [id, linkElement]
  );
  const [isPeekVisible, setPeekVisible] = useState(false);
  const hidePeek = (): void => setPeekVisible(false);
  const showPeek = (): void => setPeekVisible(true);
  const onClick = (): void => {
    if (minimized || isForeground) {
      minimize(id);
    }

    setForegroundId(isForeground ? nextFocusableId : id);
  };

  return (
    <StyledTaskbarEntry
      foreground={isForeground}
      title={title}
      onClick={hidePeek}
      onMouseEnter={showPeek}
      onMouseLeave={hidePeek}
      {...useTaskbarTransition()}
      {...useTaskbarEntryContextMenu(id)}
    >
      <AnimatePresence>
        {isPeekVisible && <PeekWindow id={id} />}
      </AnimatePresence>
      <Button onClick={onClick} ref={linkTaskbarEntry}>
        <figure>
          <Icon src={icon} alt={title} imgSize={16} />
          <figcaption>{title}</figcaption>
        </figure>
      </Button>
    </StyledTaskbarEntry>
  );
};

export default TaskbarEntry;
