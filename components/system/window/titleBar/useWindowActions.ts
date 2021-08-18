import { closeWithTransition } from "components/system/window/functions";
import useNextFocusable from "components/system/window/useNextFocusable";
import { useProcesses } from "contexts/process";
import { useSession } from "contexts/session";

type WindowActions = {
  onClose: () => void;
  onMaximize: () => void;
  onMinimize: () => void;
};

const useWindowActions = (id: string): WindowActions => {
  const nextFocusableId = useNextFocusable(id);
  const { setForegroundId, removeFromStack } = useSession();
  const { close, maximize, minimize } = useProcesses();
  const onMinimize = (): void => {
    minimize(id);
    setForegroundId(nextFocusableId);
  };
  const onMaximize = (): void => maximize(id);
  const onClose = (): void => {
    removeFromStack(id);
    closeWithTransition(close, id);
    setForegroundId(nextFocusableId);
  };

  return { onClose, onMaximize, onMinimize };
};

export default useWindowActions;
