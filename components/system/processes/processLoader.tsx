import RenderProcess from "components/system/processes/renderProcess";
import { ProcessConsumer } from "contexts/process";
import React from "react"

const ProcessLoader = (): JSX.Element => (
  <ProcessConsumer>
    {({ mapProcesses }) =>
      mapProcesses(([id, { Component, hasWindow }]) => (
        <RenderProcess key={id} Component={Component} hasWindow={!!hasWindow} />
      ))
    }
  </ProcessConsumer>
);

export default ProcessLoader;
