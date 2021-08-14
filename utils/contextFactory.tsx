import React, { createContext, ReactNode, useContext } from "react";

type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T
) => { Consumer: React.Consumer<T>; Provider: React.FC; useContext: () => T };

type ProcessProviderProps = {
  children?: ReactNode;
};

const contextFactory: ContextFactory = (
  initialContextState,
  useContextState
) => {
  const Context = createContext(initialContextState);

  const ProcessProvider: React.FC = ({ children }: ProcessProviderProps) => (
    <Context.Provider value={useContextState()}>{children}</Context.Provider>
  );

  return {
    Consumer: Context.Consumer,
    Provider: ProcessProvider,
    useContext: () => useContext(Context),
  };
};

export default contextFactory;
