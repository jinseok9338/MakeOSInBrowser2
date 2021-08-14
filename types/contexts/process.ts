import type { ComponentType } from 'react';

export type Process = {
  Component: ComponentType;
  hasWindow?: boolean;
  icon: string;
  title: string;
};

export type Processes = {
  [id: string]: Process;
};

export type processesMap = (
  callba: ([id, process]: [string, Process]) => JSX.Element
) => JSX.Element[];

export type ProcessContextState = {
  mapProcesses: processesMap;
  close: (id: string) => void;
  open: (id: string) => void;
};
