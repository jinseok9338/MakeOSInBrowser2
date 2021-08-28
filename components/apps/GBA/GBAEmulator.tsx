import ReactGbaJs, { GbaProvider } from "react-gbajs";
import React from "react";

const GBAEmulator = ():JSX.Element => {
    
    return (
        <GbaProvider>
            <ReactGbaJs />
        </GbaProvider>);
    
   
}

export default GBAEmulator;

