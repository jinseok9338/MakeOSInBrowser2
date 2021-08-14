import type { FileSystemContextState } from "types/contexts/fileSystem";
import type { ProcessContextState } from "types/contexts/process";
import type { SessionContextState } from "types/contexts/session";

export const initialProcessContextState: ProcessContextState = {
  mapProcesses: () => [],
  close: () => undefined,
  open: () => undefined,
};

export const initialSessionContextState: SessionContextState = {
  themeName: "",
  setThemeName: () => undefined,
};

export const initialFileSystemContextState: FileSystemContextState = {
  fs: null,
};
