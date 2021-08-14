import type { Processes } from "types/contexts/process";
import ProcessDirectory from "utils/processDirectory";

export const closeProcess =
  (processId: string) =>
  ({ [processId]: _closedProcess, ...remainingProcesses }) =>
    remainingProcesses;

export const openProcess =
  (processId: string) => (currentProcesses: Processes) =>
    currentProcesses[processId]
      ? currentProcesses
      : {
          ...currentProcesses,
          [processId]: ProcessDirectory[processId],
        };
